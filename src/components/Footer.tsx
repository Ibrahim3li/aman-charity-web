import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    about: [
      { name: 'من نحن', href: '#' },
      { name: 'رؤيتنا ورسالتنا', href: '#' },
      { name: 'مجلس الإدارة', href: '#' },
      { name: 'التقارير المالية', href: '#' }
    ],
    programs: [
      { name: 'راعي الأمان', href: '#' },
      { name: 'اصنع قصة', href: '#' },
      { name: 'التمكين الاقتصادي', href: '#' },
      { name: 'الرعاية الصحية', href: '#' }
    ],
    support: [
      { name: 'كيفية التبرع', href: '#' },
      { name: 'التطوع معنا', href: '#' },
      { name: 'الشراكات', href: '#' },
      { name: 'الأسئلة الشائعة', href: '#' }
    ],
    legal: [
      { name: 'سياسة الخصوصية', href: '#' },
      { name: 'شروط الاستخدام', href: '#' },
      { name: 'سياسة الاسترداد', href: '#' },
      { name: 'إخلاء المسؤولية', href: '#' }
    ]
  };

  const socialMedia = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <Card className="bg-gradient-to-r from-brand-orange to-brand-pink border-0 p-8 text-white">
            <div className="text-center max-w-2xl mx-auto">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-arabic mb-4">
                اشترك في نشرتنا الإخبارية
              </h3>
              <p className="font-arabic mb-6 text-white/90">
                احصل على آخر الأخبار والتحديثات حول برامجنا ومبادراتنا الخيرية
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 text-white font-arabic text-sm"
                />
                <Button className="bg-white text-primary hover:bg-white/90 font-arabic px-4 lg:px-6 shrink-0">
                  اشتراك
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-brand-orange to-brand-pink rounded-lg flex items-center justify-center ml-3">
                <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold font-arabic">جمعية أمان الخيرية</h3>
                <p className="text-xs lg:text-sm text-white/70 font-arabic">نساعدك لتساعد الآخرين</p>
              </div>
            </div>
            
            <p className="text-sm lg:text-base text-white/80 font-arabic leading-relaxed mb-6">
              جمعية أمان الخيرية مؤسسة خيرية مرخصة تهدف إلى خدمة المجتمع وتقديم المساعدة 
              للمحتاجين من خلال برامج ومبادرات متنوعة تحقق التنمية المستدامة.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-brand-yellow shrink-0" />
                <span className="font-arabic text-sm lg:text-base">+966 11 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-brand-yellow shrink-0" />
                <span className="font-arabic text-sm lg:text-base">info@aman-charity.org</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-brand-yellow shrink-0" />
                <span className="font-arabic text-sm lg:text-base">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-8 h-8 lg:w-10 lg:h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="order-3 lg:order-2">
            <h4 className="text-base lg:text-lg font-bold font-arabic mb-4 lg:mb-6">عن الجمعية</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm lg:text-base text-white/70 hover:text-white font-arabic transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-4 lg:order-3">
            <h4 className="text-base lg:text-lg font-bold font-arabic mb-4 lg:mb-6">برامجنا</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm lg:text-base text-white/70 hover:text-white font-arabic transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2 sm:order-5 lg:order-4">
            <h4 className="text-base lg:text-lg font-bold font-arabic mb-4 lg:mb-6">كيف تساعد</h4>
            <ul className="space-y-2 lg:space-y-3 mb-6">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm lg:text-base text-white/70 hover:text-white font-arabic transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-gradient-to-r from-brand-orange to-brand-pink hover:opacity-90 font-arabic">
              تبرع الآن
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs lg:text-sm text-white/70 font-arabic text-center md:text-right">
              © 2025 جمعية أمان الخيرية. جميع الحقوق محفوظة.
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs lg:text-sm text-white/70 hover:text-white font-arabic transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;