import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Home, GraduationCap, Stethoscope, Briefcase, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'المساعدات الإنسانية',
      description: 'تقديم المساعدات العاجلة والإغاثة للأسر المتضررة والمحتاجة في أوقات الأزمات والكوارث',
      color: 'brand-orange',
      gradient: 'from-brand-orange to-brand-pink'
    },
    {
      icon: Home,
      title: 'الإسكان والمأوى',
      description: 'توفير السكن اللائق والآمن للأسر المحتاجة وصيانة المنازل للعائلات الفقيرة',
      color: 'brand-pink',
      gradient: 'from-brand-pink to-brand-purple'
    },
    {
      icon: GraduationCap,
      title: 'التعليم والتدريب',
      description: 'برامج تعليمية ومهنية لرفع مستوى التعليم وتطوير المهارات المهنية للشباب',
      color: 'brand-yellow',
      gradient: 'from-brand-yellow to-brand-orange'
    },
    {
      icon: Stethoscope,
      title: 'الرعاية الصحية',
      description: 'تقديم الخدمات الطبية والعلاج للمرضى والمحتاجين وبرامج التوعية الصحية',
      color: 'brand-purple',
      gradient: 'from-brand-purple to-primary'
    },
    {
      icon: Briefcase,
      title: 'التمكين الاقتصادي',
      description: 'مشاريع صغيرة ومتوسطة لتمكين الأسر اقتصادياً وتحقيق الاستقلالية المالية',
      color: 'primary',
      gradient: 'from-primary to-brand-orange'
    },
    {
      icon: Users,
      title: 'التنمية المجتمعية',
      description: 'برامج تنموية شاملة لتطوير المجتمعات المحلية وتعزيز التماسك الاجتماعي',
      color: 'brand-orange',
      gradient: 'from-brand-orange to-brand-yellow'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-arabic text-primary font-medium">خدماتنا</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary font-arabic mb-6">
            كيف نساعد المجتمع
          </h2>
          <p className="text-lg text-muted-foreground font-arabic max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات والبرامج التي تهدف إلى تحسين حياة المحتاجين 
            وتنمية المجتمع من خلال حلول مبتكرة ومستدامة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden h-full">
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-6 lg:p-8 flex flex-col h-full">
                <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0`}>
                  <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-primary font-arabic mb-3 lg:mb-4 group-hover:text-brand-orange transition-colors text-center lg:text-right">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-arabic leading-relaxed mb-4 lg:mb-6 flex-grow text-center lg:text-right text-sm lg:text-base">
                  {service.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-brand-orange font-arabic p-0 h-auto font-medium self-center lg:self-start"
                >
                  اقرأ المزيد ←
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-brand-purple rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold font-arabic mb-4">
              هل تحتاج لمساعدتنا؟
            </h3>
            <p className="text-lg font-arabic mb-8 text-white/90 max-w-2xl mx-auto">
              نحن هنا لمساعدتك. تواصل معنا لمعرفة كيف يمكننا دعمك أو كيف يمكنك المشاركة في برامجنا
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-arabic w-full sm:w-auto"
              >
                اطلب المساعدة
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary font-arabic w-full sm:w-auto"
              >
                انضم كمتطوع
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;