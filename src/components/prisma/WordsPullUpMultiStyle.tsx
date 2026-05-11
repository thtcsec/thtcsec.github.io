import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
}

const WordsPullUpMultiStyle = ({ segments, containerClassName = "" }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const allWords: { word: string; className: string }[] = [];
  segments.forEach((segment) => {
    segment.text.split(" ").forEach((word) => {
      allWords.push({ word, className: segment.className || "" });
    });
  });

  return (
    <div ref={ref} className={containerClassName}>
      {allWords.map((item, i) => (
        <motion.span
          key={i}
          initial={{ y: 14, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: i * 0.05,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={item.className}
          style={{ display: "inline" }}
        >
          {item.word}{i < allWords.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </div>
  );
};

export default WordsPullUpMultiStyle;
