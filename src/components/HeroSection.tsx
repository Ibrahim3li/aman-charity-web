import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Users, Target, Award } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, label: 'المستفيدون', value: '50,000+', color: 'brand-orange' },
    { icon: Heart, label: 'التبرعات', value: '25M ريال', color: 'brand-pink' },
    { icon: Target, label: 'المشاريع', value: '150+', color: 'brand-yellow' },
    { icon: Award, label: 'سنوات الخبرة', value: '15 عام', color: 'brand-purple' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-bl from-primary via-brand-purple to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-brand-pink" />
              <span className="text-sm font-arabic">مؤسسة خيرية معتمدة</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-arabic leading-tight mb-6">
              نساعدك
              <span className="block text-brand-yellow">لتساعد</span>
              <span className="block">الآخرين</span>
            </h1>
            
            <p className="text-xl font-arabic leading-relaxed mb-8 text-white/90">
              جمعية أمان الخيرية تهدف إلى تحسين حياة المحتاجين وتقديم الدعم الإنساني والتنموي 
              للمجتمع من خلال برامج ومبادرات متنوعة تلبي احتياجات الفئات المستهدفة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-arabic text-lg px-8 py-6"
              >
                تبرع الآن
                <Heart className="w-5 h-5 mr-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary font-arabic text-lg px-8 py-6"
              >
                تعرف علينا أكثر
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 text-${stat.color}`} />
                  <div className="text-2xl font-bold font-arabic mb-1">{stat.value}</div>
                  <div className="text-sm font-arabic text-white/80">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl border border-white/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-brand-pink/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Heart className="w-24 h-24 mx-auto mb-4 opacity-60" />
                    <p className="text-lg font-arabic">صورة تعبيرية عن أعمال الجمعية</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <Card className="absolute -top-6 -right-6 bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary font-arabic">1,250</div>
                    <div className="text-sm text-muted-foreground font-arabic">أسرة مستفيدة</div>
                  </div>
                </div>
              </Card>

              <Card className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary font-arabic">98%</div>
                    <div className="text-sm text-muted-foreground font-arabic">نسبة الرضا</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;