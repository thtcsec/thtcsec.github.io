export const pricingData = {
  hero: {
    badge: "Available for freelance projects",
    title: "Xây dựng Website, Tools\n& Hệ thống Backend",
    subtitle: "Tập trung vào hiệu năng – bảo mật – deploy thực tế cho cá nhân, startup và tổ chức giáo dục",
  },

  services: [
    {
      icon: "lucide:layout",
      title: "Website / Web App",
      description: "Landing page, portfolio, web app có backend phục vụ cá nhân và doanh nghiệp nhỏ.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: "lucide:bot",
      title: "Tool web & Automation",
      description: "Công cụ tự động hóa, scraping, monitoring giúp tiết kiệm thời gian và tối ưu quy trình.",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
    },
    {
      icon: "lucide:server",
      title: "Hệ thống backend & API",
      description: "API server, database design, authentication và integration với các service bên thứ ba.",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
    },
    {
      icon: "lucide:shield-check",
      title: "Deploy & Security",
      description: "Triển khai production, cấu hình server, SSL, bảo mật và monitoring hệ thống.",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500",
    },
  ],

  portfolio: [
    {
      number: "01",
      name: "ToanVoTruongToan",
      status: "active",
      statusText: "Đang hoạt động",
      problem: "Giáo viên cần hệ thống quản lý học tập (LMS) để chia sẻ tài liệu, bài giảng và theo dõi học sinh.",
      result: "LMS production-ready phục vụ hàng trăm học sinh, tích hợp Gemini AI tạo đề thi tự động.",
      role: "Thiết kế kiến trúc, phát triển full-stack (React + Supabase), deploy và vận hành.",
      techs: ["React", "Supabase", "Gemini AI"],
    },
    {
      number: "02",
      name: "Smart Camera Surveillance",
      status: "active",
      statusText: "Đang hoạt động",
      problem: "Cần hệ thống giám sát camera thông minh với AI nhận diện khuôn mặt và biển số xe realtime.",
      result: "CMS với microservices architecture, theo dõi realtime qua WebRTC, AI detection với YOLO.",
      role: "Backend ASP.NET Core, AI engine Python, dashboard React, DevSecOps.",
      techs: ["ASP.NET Core", "Python", "YOLO", "WebRTC"],
    },
    {
      number: "03",
      name: "Yodobashi Sniper",
      status: "inactive",
      statusText: "Đã ngừng",
      problem: "Theo dõi và mua sản phẩm giảm giá trên Yodobashi thủ công tốn thời gian, dễ bỏ lỡ deal.",
      result: "Browser extension tự động hóa quy trình mua hàng, sử dụng Chrome APIs và Manifest V3.",
      role: "Phát triển extension JavaScript, testing automation với Playwright.",
      techs: ["JavaScript", "Chrome Extension", "Playwright"],
    },
  ],

  pricingTiers: [
    {
      name: "Landing page",
      price: "từ 1tr",
      popular: false,
      features: ["Responsive design", "SEO optimization", "Contact form", "Deploy lên hosting"],
    },
    {
      name: "Web app có backend",
      price: "từ 3-5tr",
      popular: true,
      features: ["Full-stack development", "Database design", "Authentication", "Admin dashboard", "API integration"],
    },
    {
      name: "Tool đơn giản",
      price: "từ 2tr",
      popular: false,
      features: ["Automation script", "Data processing", "Basic UI", "Deploy & setup"],
    },
    {
      name: "Tool phức tạp",
      price: "từ 5tr+",
      popular: false,
      features: ["Advanced automation", "Multi-service integration", "Complex workflows", "Monitoring system"],
    },
    {
      name: "API + Auth system",
      price: "từ 4tr",
      popular: true,
      features: ["RESTful API", "JWT/OAuth", "Rate limiting", "Database schema", "Documentation"],
    },
    {
      name: "Deploy & Setup",
      price: "từ 300k",
      popular: false,
      features: ["Server setup", "SSL certificate", "CI/CD pipeline", "Basic monitoring"],
    },
    {
      name: "Security hardening",
      price: "từ 1tr",
      popular: false,
      features: ["Security audit", "Penetration testing", "Fix vulnerabilities", "Best practices"],
    },
  ],

  process: [
    {
      step: "01",
      title: "Nhận yêu cầu",
      description: "Trao đổi để hiểu rõ nhu cầu, mục tiêu và phạm vi dự án.",
      icon: "lucide:message-square",
    },
    {
      step: "02",
      title: "Phân tích & Báo giá",
      description: "Đánh giá kỹ thuật, đề xuất giải pháp và báo giá chi tiết.",
      icon: "lucide:file-text",
    },
    {
      step: "03",
      title: "Triển khai",
      description: "Phát triển theo milestone, cập nhật tiến độ thường xuyên.",
      icon: "lucide:code",
    },
    {
      step: "04",
      title: "Bàn giao & Hỗ trợ",
      description: "Deploy production, hướng dẫn sử dụng và hỗ trợ sau bàn giao.",
      icon: "lucide:check-circle",
    },
  ],

  budgetOptions: [
    "Dưới 2 triệu",
    "2-5 triệu",
    "5-10 triệu",
    "Trên 10 triệu",
    "Chưa xác định",
  ],

  serviceOptions: [
    "Landing page / Website",
    "Web App có Backend",
    "Tool & Automation",
    "API & Backend System",
    "Deploy & Security",
    "Tư vấn & Support",
    "Khác",
  ],
} as const;
