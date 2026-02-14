import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Play, 
  Download, 
  Shield, 
  Zap, 
  Music, 
  Video, 
  Smartphone, 
  Github,
  Star,
  Heart,
  Share2,
  Settings,
  Wifi,
  WifiOff,
  Volume2,
  PlayCircle,
  FastForward,
  Pause,
  ChevronRight,
  CheckCircle,
  Code,
  Users,
  Globe,
  Package,
  Rocket,
  Award,
  TrendingUp,
  Lock,
  Eye,
  Headphones,
  Radio,
  Monitor,
  Cpu,
  Database,
  Cloud,
  Terminal,
  GitBranch,
  FileCode,
  Layers,
  Activity,
  BarChart3,
  PieChart,
  Target,
  ZapOff,
  Infinity,
  Sparkles,
  Flame,
  Gem,
  Crown,
  Medal,
  Trophy,
  Save
} from "lucide-react";
import { motion } from "framer-motion";

const SilentPipePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const hasAnimated = useRef(false);

  const features = [
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Share to Play",
      description: "Không cần mở app rườm rà. Chỉ cần nhấn 'Chia sẻ' từ YouTube/TikTok và chọn SilentPipe.",
      color: "text-blue-600",
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Spotify Support",
      description: "Hỗ trợ link Spotify, tự động tìm bài tương ứng trên YouTube để phát.",
      color: "text-green-600",
      badge: "Premium",
      badgeColor: "bg-purple-500"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Download Offline",
      description: "Tải nhạc/video về bộ nhớ máy để nghe Offline bất cứ lúc nào.",
      color: "text-purple-600",
      badge: "Unlimited",
      badgeColor: "bg-blue-500"
    },
    {
      icon: <FastForward className="w-6 h-6" />,
      title: "Playback Speed",
      description: "Điều chỉnh tốc độ phát linh hoạt (0.5x, 1.25x, 2.0x...) hoặc tự nhập con số bất kỳ.",
      color: "text-orange-600",
      badge: "Pro",
      badgeColor: "bg-orange-500"
    },
    {
      icon: <WifiOff className="w-6 h-6" />,
      title: "No Ads",
      description: "Hoàn toàn sạch bóng quảng cáo, trải nghiệm nghe nhạc không gián đoạn.",
      color: "text-indigo-600",
      badge: "Clean",
      badgeColor: "bg-indigo-500"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Custom Equalizer",
      description: "Cân bằng âm thanh tùy chỉnh với nhiều preset và điều chỉnh theo sở thích cá nhân.",
      color: "text-pink-600",
      badge: "Pro",
      badgeColor: "bg-pink-500"
    }
  ];

  const techStack = [
    { name: "Java/Kotlin", icon: <Code className="w-5 h-5" />, level: "Advanced" },
    { name: "Android Media3", icon: <PlayCircle className="w-5 h-5" />, level: "Expert" },
    { name: "NewPipeExtractor", icon: <Download className="w-5 h-5" />, level: "Professional" },
    { name: "Chaquopy", icon: <Smartphone className="w-5 h-5" />, level: "Innovative" },
    { name: "OkHttp", icon: <Wifi className="w-5 h-5" />, level: "Optimized" },
    { name: "Gradle Kotlin DSL", icon: <Settings className="w-5 h-5" />, level: "Modern" }
  ];

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
                className="relative"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl p-2">
                  <img 
                    src="/images/silentpipe/silentpipe.png" 
                    alt="SilentPipe Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>

              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SilentPipe
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Trình phát media ẩn danh & mạnh mẽ cho Android
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Phát nhạc và video từ YouTube, TikTok mà không cần quảng cáo, không theo dõi người dùng, và hỗ trợ chạy nền hoàn hảo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg group" asChild>
                <a href="https://github.com/thtcsec/SilentPipe" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Xem trên GitHub
                </a>
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg group" asChild>
                <a href="https://github.com/thtcsec/SilentPipe/releases/" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Tải APK
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse [animation-delay:0.5s]" />
      </section>

      {/* Features Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trải nghiệm nghe nhạc và xem video chưa từng có
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${activeFeature === index ? 'scale-105' : ''} transition-transform duration-300`}
              >
                <Card className={`h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 ${
                  activeFeature === index ? 'ring-2 ring-purple-500 shadow-2xl' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`inline-flex p-3 rounded-lg bg-white/10 mb-4 ${feature.color}`}>
                        {feature.icon}
                      </div>
                      <Badge className={`${feature.badgeColor} text-white text-xs px-2 py-1`}>
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Thiết kế cho trải nghiệm
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  di động hoàn hảo
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Giao diện hiện đại, trực quan được thiết kế đặc biệt cho Android với tối ưu hóa hiệu năng và trải nghiệm người dùng.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Responsive Design</h3>
                    <p className="text-gray-400">Tương thích mọi kích thước màn hình</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Hiệu năng vượt trội</h3>
                    <p className="text-gray-400">Khởi động nhanh và mượt mà</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto w-80 max-w-[320px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-4 shadow-2xl">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                <div className="w-full aspect-video bg-black rounded-[2.5rem] overflow-hidden relative">
                  <img 
                    src="/images/silentpipe/home.jpg" 
                    alt="SilentPipe App Home Screen" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-pink-900/30" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Equalizer Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Custom Equalizer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tùy chỉnh âm thanh theo phong cách của bạn
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Cân bằng âm thanh chuyên nghiệp
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Trải nghiệm âm thanh tuyệt vời với bộ equalizer tùy chỉnh mạnh mẽ, cho phép bạn điều chỉnh từng dải tần số để phù hợp với sở thích cá nhân.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Volume2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">10+ Presets</h4>
                    <p className="text-gray-400">Rock, Jazz, Classical, Pop và nhiều hơn nữa</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Tùy chỉnh thủ công</h4>
                    <p className="text-gray-400">Điều chỉnh 5 dải tần số chi tiết</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Save className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Lưu cài đặt</h4>
                    <p className="text-gray-400">Tạo và lưu profile âm thanh cá nhân</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <img 
                  src="/images/silentpipe/equalizer.jpg" 
                  alt="SilentPipe Equalizer" 
                  className="w-full rounded-2xl shadow-2xl object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Công nghệ hiện đại
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Xây dựng với những công nghệ mạnh mẽ nhất
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                        {tech.icon}
                      </div>
                      <Badge variant="outline" className="border-purple-400 text-purple-300 text-xs">
                        {tech.level}
                      </Badge>
                    </div>
                    <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                    <p className="text-gray-400 text-sm">Công nghệ cốt lõi</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl md:text-4xl text-white mb-4">
                  Bắt đầu sử dụng SilentPipe
                </CardTitle>
                <CardDescription className="text-xl text-gray-300">
                  Tải và trải nghiệm ngay hôm nay
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Cài đặt thủ công</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">1</Badge>
                        <p className="text-gray-300">Tải file APK từ GitHub Releases</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">2</Badge>
                        <p className="text-gray-300">Cho phép cài đặt từ nguồn không xác định</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">3</Badge>
                        <p className="text-gray-300">Cài đặt và tận hưởng!</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Build từ source</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">1</Badge>
                        <p className="text-gray-300">Clone repository từ GitHub</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">2</Badge>
                        <p className="text-gray-300">Mở project với Android Studio</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">3</Badge>
                        <p className="text-gray-300">Build và install APK</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="bg-white/20" />
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 group" asChild>
                    <a href="https://github.com/thtcsec/SilentPipe/releases/" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Xem Source Code
                    </a>
                  </Button>
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 group" asChild>
                    <a href="https://github.com/thtcsec/SilentPipe/releases/" target="_blank" rel="noopener noreferrer">
                      <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                      Tải APK Mới Nhất
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Music className="w-6 h-6 text-purple-400" />
              <span className="text-white font-bold text-lg">SilentPipe</span>
            </div>
            
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <a href="https://github.com/thtcsec/SilentPipe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://hoangtu.dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://github.com/thtcsec/SilentPipe/pulls" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-gray-400 text-sm mb-1">
                © 2026 SilentPipe. GPLv3 License.
              </div>
              <div className="text-gray-500 text-xs">
                Built by Trinh Hoang Tu
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SilentPipePage;
