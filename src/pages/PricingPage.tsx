import { useState, useEffect, useRef, FormEvent } from "react";
import { Icon } from "@iconify/react";
import { ArrowDown, Check, Mail, Sparkles, ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { pricingData } from "@/data/pricing";
import { siteConfig } from "@/data/config";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const PricingPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - Need to replace these with your actual EmailJS credentials
      // Get them from: https://dashboard.emailjs.com/
      const result = await emailjs.send(
        "service_ocmafii", // Your EmailJS service ID
        "template_rbxmv0c", // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          to_email: siteConfig.email,
        },
        "nGO6XNXqI2HzVmH9p" // Your EmailJS public key
      );

      if (result.text === "OK") {
        setShowSuccessDialog(true);
        setFormData({ name: "", email: "", service: "", budget: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setShowErrorDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Header with Collapse/Expand */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? "w-[90%] md:w-[600px]"
            : "w-[95%] md:w-[90%] max-w-7xl"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "bg-background/70 dark:bg-background/40 backdrop-blur-xl border border-border/50 dark:border-white/10 rounded-full shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] py-2 px-4 md:px-6"
              : "bg-background/30 dark:bg-background/20 backdrop-blur-sm border border-transparent rounded-full py-3 md:py-4 px-4 md:px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className={`font-bold transition-all duration-300 ease-out whitespace-nowrap ${
                isScrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
              }`}
            >
              hoangtu<span className="text-primary">.dev</span>
            </Link>

            {/* Right side - Back Button + Theme Toggle */}
            <div className={`flex items-center transition-all duration-500 ${isScrolled ? "gap-1" : "gap-2"}`}>
              <ThemeToggle />
              <Button
                size={isScrolled ? "sm" : "default"}
                variant="ghost"
                className="transition-all duration-500 hover:scale-105"
                asChild
              >
                <Link to="/" className="flex items-center gap-2">
                  <Icon icon="mdi:arrow-left" className={`${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
                  <span className={`hidden sm:inline ${isScrolled ? "text-sm" : ""}`}>Trang chủ</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/25 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Sparkles size={16} className="animate-pulse" />
              {pricingData.hero.badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in leading-tight" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {pricingData.hero.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            {pricingData.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button size="lg" onClick={() => handleScrollToSection("pricing")} className="group">
              Xem dịch vụ
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => handleScrollToSection("portfolio")}>
              Xem hệ thống đã triển khai
            </Button>
          </div>

          <div className="mt-16 animate-bounce cursor-pointer" onClick={() => handleScrollToSection("services")}>
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Dịch vụ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Giải pháp toàn diện
            </h2>
            <p className="text-muted-foreground text-lg">từ frontend đến production</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {pricingData.services.map((service, index) => (
              <Card
                key={index}
                className="p-6 border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0 animate-fade-in group"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon icon={service.icon} className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Sản phẩm đã triển khai
            </h2>
            <p className="text-muted-foreground text-lg">Tất cả hệ thống đều đã deploy và vận hành thực tế</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {pricingData.portfolio.map((project, index) => (
              <Card
                key={index}
                className="p-8 border-2 hover:border-primary/50 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * index}s`, animationFillMode: "forwards" }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-20 flex-shrink-0">
                    <div className="text-6xl font-bold text-primary/20">{project.number}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <Badge
                        variant={project.status === "active" ? "default" : "secondary"}
                        className={project.status === "active" ? "bg-green-500" : ""}
                      >
                        {project.statusText}
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Vấn đề</h4>
                        <p className="text-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Kết quả</h4>
                        <p className="text-foreground">{project.result}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Vai trò</h4>
                        <p className="text-foreground">{project.role}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techs.map((tech, i) => (
                          <Badge key={i} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Bảng giá
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Giá cả minh bạch
            </h2>
            <p className="text-muted-foreground text-lg">Giá cụ thể phụ thuộc vào yêu cầu và độ phức tạp của dự án</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {pricingData.pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-6 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0 animate-fade-in relative ${
                  tier.popular ? "border-primary shadow-lg scale-105" : "hover:border-primary/50"
                }`}
                style={{ animationDelay: `${0.05 * index}s`, animationFillMode: "forwards" }}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent">
                    Popular
                  </Badge>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{tier.price}</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            * Báo giá chi tiết sau khi trao đổi yêu cầu cụ thể
          </p>

          <div className="text-center mt-8">
            <Button size="lg" onClick={() => handleScrollToSection("contact")} className="group">
              Nhận báo giá
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Quy trình
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Làm việc cùng tôi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {pricingData.process.map((step, index) => (
              <div
                key={index}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary flex items-center justify-center">
                    <Icon icon={step.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Liên hệ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Bắt đầu dự án của bạn
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mô tả yêu cầu của bạn, tôi sẽ phản hồi trong vòng 24 giờ với đề xuất giải pháp và báo giá chi tiết.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-2">
              {/* Email Display */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted mb-8">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href={`mailto:${siteConfig.email}`} className="font-medium hover:text-primary transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Họ tên <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Dịch vụ <span className="text-destructive">*</span>
                    </label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Chọn dịch vụ" />
                      </SelectTrigger>
                      <SelectContent>
                        {pricingData.serviceOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ngân sách</label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Chọn mức ngân sách" />
                      </SelectTrigger>
                      <SelectContent>
                        {pricingData.budgetOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mô tả yêu cầu <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    placeholder="Mô tả ngắn gọn về dự án bạn cần thực hiện..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="border-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400 animate-in zoom-in duration-300" />
            </div>
            <AlertDialogTitle className="text-center text-2xl">
              Gửi thành công! 🎉
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base space-y-2">
              <p className="font-medium">Cảm ơn bạn đã liên hệ!</p>
              <p>Tôi sẽ phản hồi yêu cầu của bạn trong vòng <span className="text-primary font-semibold">24 giờ</span>.</p>
              <p className="text-sm text-muted-foreground pt-2">
                Vui lòng kiểm tra email (cả thư mục spam) để nhận phản hồi.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)} className="w-full" size="lg">
              Đóng
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error Dialog */}
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <XCircle className="h-10 w-10 text-red-600 dark:text-red-400 animate-in zoom-in duration-300" />
            </div>
            <AlertDialogTitle className="text-center text-2xl">
              Có lỗi xảy ra 😔
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base space-y-2">
              <p>Không thể gửi yêu cầu của bạn lúc này.</p>
              <p className="text-sm">Vui lòng thử lại sau hoặc liên hệ trực tiếp qua:</p>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <Button onClick={() => setShowErrorDialog(false)} variant="outline" className="w-full">
              Đóng
            </Button>
            <Button onClick={() => {
              setShowErrorDialog(false);
              setTimeout(() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }} className="w-full">
              Thử lại
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PricingPage;
