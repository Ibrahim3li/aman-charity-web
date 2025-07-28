import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, BookOpen, Users, Heart, Clock, Calendar } from 'lucide-react';

const ProgramsPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const programs = [
    {
      icon: Shield,
      title: t('protectionPrograms'),
      description: t('protectionDesc'),
      duration: '3-6 أشهر',
      status: 'متاح',
      link: '/programs/protection'
    },
    {
      icon: BookOpen,
      title: t('awarenessPrograms'),
      description: t('awarenessDesc'),
      duration: '1-2 أشهر',
      status: 'التسجيل مفتوح',
      link: '/programs/awareness'
    },
    {
      icon: Users,
      title: t('trainingPrograms'),
      description: t('trainingDesc'),
      duration: '2-4 أسابيع',
      status: 'متاح',
      link: '/programs/training'
    },
    {
      icon: Heart,
      title: t('createStory'),
      description: t('storyDescription'),
      duration: 'فوري',
      status: 'متاح',
      link: '/create-story'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-arabic">
            {t('programs')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-arabic">
            نقدم مجموعة شاملة من البرامج المتخصصة في الحماية والوقاية والتأهيل
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-arabic text-center">{program.title}</CardTitle>
                <div className="flex justify-center gap-2 mt-2">
                  <Badge variant="secondary" className="font-arabic">
                    <Clock className="w-3 h-3 mr-1" />
                    {program.duration}
                  </Badge>
                  <Badge variant="outline" className="font-arabic">
                    {program.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground font-arabic mb-6">
                  {program.description}
                </p>
                <Button variant="outline" className="w-full font-arabic">
                  {t('view')} التفاصيل
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Categories */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-arabic flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              {t('shortPrograms')}
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold font-arabic mb-2">برنامج الحماية السريع</h3>
                  <p className="text-sm text-muted-foreground font-arabic">
                    برنامج مكثف لمدة أسبوعين يهدف إلى توفير الحماية الفورية للحالات الطارئة
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold font-arabic mb-2">ورش التوعية المجتمعية</h3>
                  <p className="text-sm text-muted-foreground font-arabic">
                    ورش تدريبية قصيرة لتعزيز الوعي بأهمية الحماية من الإيذاء في المجتمع
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-arabic flex items-center">
              <Heart className="w-6 h-6 mr-2" />
              {t('qualitativeInitiatives')}
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold font-arabic mb-2">مبادرة الأسرة الآمنة</h3>
                  <p className="text-sm text-muted-foreground font-arabic">
                    مبادرة شاملة لتعزيز الأمان داخل الأسرة وبناء بيئة صحية للأطفال
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold font-arabic mb-2">مبادرة المدرسة الآمنة</h3>
                  <p className="text-sm text-muted-foreground font-arabic">
                    برنامج تطبيقي في المدارس لحماية الطلاب وتعزيز بيئة تعليمية آمنة
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;