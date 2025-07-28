import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Target, Users, Award, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'الشفافية',
      description: 'نعمل بشفافية كاملة في جميع معاملاتنا وتقاريرنا المالية'
    },
    {
      icon: Target,
      title: 'الفعالية',
      description: 'نسعى لتحقيق أكبر أثر إيجابي بأفضل استخدام للموارد المتاحة'
    },
    {
      icon: Users,
      title: 'التعاون',
      description: 'نؤمن بقوة العمل الجماعي والشراكات المجتمعية الفعالة'
    },
    {
      icon: Award,
      title: 'التميز',
      description: 'نلتزم بأعلى معايير الجودة والتميز في جميع خدماتنا'
    }
  ];

  const achievements = [
    '50,000+ مستفيد من برامجنا',
    '25 مليون ريال قيمة التبرعات',
    '150+ مشروع خيري منجز',
    '15 عام من العطاء المتواصل',
    '98% نسبة رضا المستفيدين',
    '500+ متطوع نشط'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-arabic text-primary font-medium">من نحن</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-primary font-arabic mb-6">
              جمعية أمان للعمل الخيري
            </h2>
            
            <p className="text-lg text-muted-foreground font-arabic leading-relaxed mb-8">
              تأسست جمعية أمان الخيرية عام 2010 كمؤسسة خيرية مرخصة تهدف إلى خدمة المجتمع 
              وتقديم المساعدة للأسر المحتاجة. نعمل على تحقيق التنمية المستدامة من خلال برامج 
              متنوعة تشمل الإغاثة، التعليم، الصحة، والتمكين الاقتصادي.
            </p>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-l-4 border-l-brand-orange bg-gradient-to-br from-brand-orange/5 to-transparent">
                <h3 className="text-xl font-bold text-primary font-arabic mb-3">رسالتنا</h3>
                <p className="text-muted-foreground font-arabic">
                  تقديم خدمات خيرية متميزة تساهم في تحسين حياة المحتاجين وتحقيق التنمية المجتمعية المستدامة
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-brand-pink bg-gradient-to-br from-brand-pink/5 to-transparent">
                <h3 className="text-xl font-bold text-primary font-arabic mb-3">رؤيتنا</h3>
                <p className="text-muted-foreground font-arabic">
                  أن نكون المؤسسة الخيرية الرائدة في المملكة في مجال العمل الخيري والتنمية المجتمعية
                </p>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button size="lg" className="font-arabic w-full sm:w-auto">
                اقرأ المزيد عنا
              </Button>
              <Button size="lg" variant="outline" className="font-arabic w-full sm:w-auto">
                تحميل التقرير السنوي
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            {/* Main Card */}
            <Card className="bg-gradient-to-br from-primary to-brand-purple text-white p-8 mb-8">
              <h3 className="text-2xl font-bold font-arabic mb-6">قيمنا الأساسية</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-3">
                      <value.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <h4 className="font-bold font-arabic mb-1 lg:mb-2 text-sm lg:text-base">{value.title}</h4>
                    <p className="text-xs lg:text-sm text-white/80 font-arabic leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary font-arabic mb-4">إنجازاتنا</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span className="text-muted-foreground font-arabic">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-yellow/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-pink/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;