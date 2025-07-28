import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Users, Award } from 'lucide-react';

const AboutPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-arabic">
            {t('aboutTitle')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-arabic">
            {t('aboutDescription')}
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="font-arabic">{t('ourVision')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-arabic">{t('visionText')}</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="font-arabic">{t('ourMission')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-arabic">{t('missionText')}</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="font-arabic">{t('ourValues')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-arabic">{t('valuesText')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-arabic">
              {t('organizationalStructure')}
            </h2>
            <p className="text-muted-foreground font-arabic mb-4">
              جمعية أمان الخيرية منظمة غير ربحية تعمل تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية، وتتبع أعلى معايير الحوكمة والشفافية في إدارة مواردها وتنفيذ برامجها.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-arabic">
              {t('successPartners')}
            </h2>
            <p className="text-muted-foreground font-arabic mb-4">
              نتعاون مع شركاء استراتيgiين من القطاعين الحكومي والخاص لضمان تقديم أفضل الخدمات وتحقيق أقصى استفادة من الموارد المتاحة.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;