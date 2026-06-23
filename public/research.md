# Technical Research & Blogs — Trịnh Hoàng Tú (Hoang Tu)

Deep-dive technical auditing, performance profiling, and machine learning research logs.

---

## 📑 Articles Index

1.  **[Advanced Deep Learning Architectures for Vietnamese License Plate Recognition](#1-advanced-deep-learning-architectures-for-vietnamese-license-plate-recognition)** — *March 2026*
2.  **[Log Anomaly Detection using Transformer Models](#2-log-anomaly-detection-using-transformer-models)** — *May 2026*

---

## 1. Advanced Deep Learning Architectures for Vietnamese License Plate Recognition
**Date:** March 2026  
**Read Time:** 15 min  
**Tags:** Deep Learning, Computer Vision, YOLOv11, ITS, Edge Computing

### 1.1 Introduction: The Evolution of ITS in the Vietnamese Context
The deployment of Intelligent Transportation Systems (ITS) in the Socialist Republic of Vietnam has reached a critical inflection point. Driven by rapid urbanization, a burgeoning middle class, and the national digital transformation agenda, the demand for automated traffic management solutions has outpaced the capabilities of legacy optical character recognition (OCR) systems.

The specific challenge facing computer vision researchers today is not merely the recognition of text, but the reliable extraction of vehicle intelligence from a highly heterogeneous, chaotic, and visually complex traffic environment. This report serves as a deep technical audit of the current state-of-the-art (SOTA) methodologies for Automatic License Plate Recognition (ALPR), specifically calibrated to the unique constraints and characteristics of the Vietnamese vehicular landscape.

The Vietnamese traffic ecosystem is distinct from the Western or Chinese environments typically used to train benchmark models like ALPR or CCPD. It is characterized by an overwhelming density of motorcycles, a rapid influx of private automobiles, and a regulatory framework that has resulted in a fragmented mix of license plate standards.

### 1.2 The Anatomy of the Vietnamese License Plate
To design an optimal neural architecture, one must first deconstruct the object of interest. Vietnamese license plates are not uniform text strings; they are structured, semantic objects with strict geometrical and typographical rules that have evolved over decades.

The current landscape is defined by the coexistence of two primary form factors:
- **The "Long" Plate:** Rectangular, typically 1-line, which adheres to a roughly 4:1 aspect ratio. Standard on the front of automobiles.
- **The "Short" Plate:** Square-like, typically 2-line, with a ratio closer to 4:3. Ubiquitous on motorcycles and the rear of many automobiles.

This duality presents a fundamental problem for anchor-based detection networks, which rely on predefined aspect ratio priors. A model optimized for long plates will struggle to achieve high Intersection over Union (IoU) on square plates, leading to localization jitter that degrades recognition accuracy.

Semantic color coding adds another layer of complexity:
- **White:** Private ownership
- **Blue:** Government or administrative vehicles
- **Red:** Military reserved
- **Yellow:** Commercial transport vehicles (taxis, trucks, ride-hailing services, mandated since August 2020)

*Typography note:* The introduction of the TCVN 6909 standard brought specific anti-counterfeiting measures into the font design. Notably, the character `0` (zero) is often rendered with a diagonal slash or dot to distinguish it from the letter `O`, and the letter `Q` features a distinct, detached tail. The letters `B` and `D` have modified serifs to prevent tampering.

### 1.3 Detection and Unwarping: The Geometric Foundation
The first and arguably most critical stage of the LPR pipeline is the localization of the license plate within the high-resolution frame. Accuracy at this stage dictates the upper bound of the system's performance; a recognition model cannot read what it cannot see.

#### The Legacy Benchmark: WPOD-NET
For years, the Warped Planar Object Detection Network (WPOD-NET) stood as the gold standard for LPR in challenging scenarios. Developed specifically to address the planar perspective deformation of license plates, WPOD-NET diverged from standard object detectors by predicting an affine transformation matrix rather than a simple bounding box. However, its affine regression is computationally expensive and can be unstable, generating severely distorted outputs on occluded plates.

#### The Modern Standard: YOLOv11/v12 Oriented Bounding Box (OBB)
The evolution of the YOLO (You Only Look Once) family has fundamentally altered the landscape of real-time object detection. Unlike standard YOLO, which predicts axis-aligned boxes `(cx, cy, w, h)`, OBB models predict an additional angle parameter `θ`, allowing the network to tightly enclose rotated objects.

For the RTX 4060 Mobile, which excels at FP16 tensor operations, the YOLOv11 architecture is highly optimized, capable of achieving inference speeds of 8-12ms per frame (approx. 80-120 FPS) when compiled with TensorRT, compared to the 20-30ms typical of WPOD-NET implementations.

### 1.4 Recognition Architectures: From Convolutions to Attention
Once a license plate has been detected and cropped (and optionally rotated), the pixel data must be transcribed into a character string.

#### LPRNet: The Lightweight Champion
LPRNet was designed as a "segmentation-free" architecture, treating the plate as a sequence. It utilizes a very lightweight Convolutional Neural Network (CNN) backbone. Because it is purely convolutional, it can be fully parallelized on the GPU. On an RTX 4060, LPRNet can process thousands of crops per second. However, its "global context" is limited, and it struggles with severe perspective distortion and 2-line plates.

#### STN-LPRNet: The Hybrid SOTA
To fix the weaknesses of LPRNet while keeping its speed, the integration of a Spatial Transformer Network (STN) is the current state-of-the-art approach. The STN module acts as a "fine tuner" for alignment, automatically correcting residual "keystone" perspective distortion.

#### Loss Functions: The CTC vs. Focal CTC Debate
Vietnamese datasets exhibit severe class imbalance. Some provincial codes (e.g., "29" for Hanoi, "59" for HCMC) are overrepresented, while others are rare. Furthermore, some characters (like 8, B, 0, D, Q) are structurally very similar.

To address this, we apply **Focal CTC Loss**, which introduces a modulating factor `(1 - p_t)^γ` to the standard CTC loss. The training process automatically "focuses" on the hard examples—the rare provinces and the confusing characters—preventing the vast number of easy, clean plates from overwhelming the gradient descent.

### 1.5 Handling 2-Line Plates
Recognizing 2-line plates with a 1-line architecture like LPRNet requires a specific strategy. The **"Split"** approach is widely verified as the most robust. When the detector identifies a plate as "2-line", the system crops the Top Half and Bottom Half as two separate images. These two images are passed to the STN-LPRNet as a batch. The results are concatenated (`Result_Top + "-" + Result_Bottom`) to form the full string.

### 1.6 Synthetic Data Generation: Overcoming the Data Deficit
A recurring theme in all Vietnamese research is the scarcity of high-quality, diverse public datasets. Privacy laws and local regulations make collecting large-scale real-world datasets difficult. To achieve SOTA performance, one must synthesize data:
1.  **Procedural Augmentation Pipeline:** Simulating optical physics like Specular Glare (retro-reflective washouts), Tropical Rain (motion blur streaks), and Dirt/Mud (Perlin noise masks).
2.  **Generative AI Approaches:** Fine-tuning Stable Diffusion or using CycleGANs to bridge the "domain gap", creating training data that looks indistinguishable from real-world captures.

### 1.7 Strategic Implementation: The 3-Stage Pipeline on RTX 4060
Based on the analysis of architectures and hardware, we propose a "Split-Rectify-Recognize" pipeline optimized for the Core i7-13620H and Mobile RTX 4060:
- **Stage 1: Global Context (YOLOv11-Medium)** — Run on the full frame to detect vehicles (Car, Bike, Truck), constraining the search space and avoiding false positives.
- **Stage 2: Plate Localization (YOLOv11-OBB Nano)** — Detect the plate + rotation angle `θ`. Classify into 1-line vs 2-line. If 2-line, split vertically into Top/Bottom.
- **Stage 3: Recognition (STN-LPRNet)** — Sequence Transcription using Focal CTC. Pass crops as a batch, leveraging FP16 TensorRT acceleration for ultra-fast, robust decoding.

---

## 2. Log Anomaly Detection using Transformer Models
**Date:** May 2026  
**Read Time:** 12 min  
**Tags:** Cybersecurity, NLP, LogBERT, Transformers, AIOps

### 2.1 Abstract
In the era of digital education, the availability and security of IT infrastructure such as Learning Management Systems (LMS), student portals, cloud services, and centralized authentication systems play a pivotal role. System logs record detailed operational states but are typically massive in volume, heterogeneous, and difficult to analyze manually.

This article presents an automated log anomaly detection approach based on the **Drain3** pipeline and **LogBERT**—a bidirectional Transformer architecture trained via self-supervision. The proposed workflow utilizes Drain3 to parse unstructured logs into event templates, and then employs a sequence context learning model to calculate anomaly scores. Experiments on 500,000 lines of HDFS log data show that Drain3 generated 137 event templates, and lightweight baselines such as PCA and Isolation Forest demonstrated significant limitations when detecting anomalies on event sequences. The research results provide a technical foundation for building log-based information security monitoring systems in large-scale digital education environments.

### 2.2 Introduction
The rapid evolution of digital education platforms and online enterprise services has exponentially increased infrastructure complexity. A modern LMS encompasses not only the learning interface but also integrates with web servers, databases, authentication systems, content repositories, APIs, and cloud services. Each component generates logs with different formats and verbosity levels, rendering manual rule-based error detection highly unscalable.

An anomalous log sequence can indicate hardware failures, software bugs, service overloads, brute-force password attacks, API vulnerability exploitation, or lateral movement within an internal network. Employing a Transformer machine learning model enables the system to learn normal patterns directly from event sequences without being constrained by rigid rule sets.

### 2.3 Proposed Methodology
- **Log Parsing with Drain3:** Drain3 is utilized to parse unstructured logs into standardized templates. Based on a fixed-depth parse tree algorithm, Drain3 is capable of processing online streaming logs at high velocities.
  * *Raw Log:* `User student_01 login failed from 192.168.1.10`
  * *Template:* `User <*> login failed from <*>`
- **Log Sequence Representation:** Following parsing, each template is mapped to a unique Event ID. A session or time window is then represented as a sequence of events: `S = [E1, E2, ..., Em]`
- **LogBERT Architecture:** LogBERT leverages a Transformer Encoder to learn bidirectional representations for event sequences through the **Self-Attention** mechanism. Unlike LSTMs, Self-Attention allows each event in the sequence to directly attend to all other events simultaneously. The model is trained using a **Masked Log Key Prediction** objective. During inference, sequences with low recovery probabilities or those containing rare events are assigned high anomaly scores.

### 2.4 Experiments and Performance Comparison
The study utilizes 500,000 lines of standard HDFS data from LogHub for evaluation and reproduction. The experimental results of the baselines used for comparison are as follows:

| Method | Precision | Recall | F1-Score |
| :--- | :--- | :--- | :--- |
| **PCA** | 0.7649 | 0.5401 | 0.6331 |
| **TruncatedSVD** | 0.7608 | 0.5401 | 0.6317 |
| **Isolation Forest (TF-IDF)** | 0.1875 | 0.1202 | 0.1465 |

*Observation:* Baselines such as PCA or Isolation Forest achieve low F1-Scores primarily because they rely on TF-IDF features or bag-of-events, discarding chronological order. This reinforces the necessity for models that learn sequential relationships and long-term context, such as LogBERT.

### 2.5 Application in Digital Education (LMS)
In an LMS environment, anomalies represent not just system faults but also potential indicators of compromise. The proposed pipeline facilitates the detection of several scenarios:
- **Brute-Force Attacks:** Repeated failed login patterns originating from diverse IPs, deviating from normal academic behavior.
- **API Exploitation:** Requests containing anomalous parameters or accessing rare endpoints that generate completely new event templates via Drain3 parsing.
- **Service Overload:** Sequences of database timeouts, HTTP 5xx errors, and elevated latency during peak online examination periods.
- **User Session Anomalies:** Students logging in from multiple distinct geographical locations consecutively or exhibiting abnormal resource access cadences.
