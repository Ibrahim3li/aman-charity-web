import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, BarChart3, PieChart, Download, Eye, Calendar } from 'lucide-react';

const ReportsPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const reports = [
    {
      icon: FileText,
      title: 'التقرير السنوي 2023',
      description: 'تقرير شامل عن أنشطة وإنجازات الجمعية خلال عام 2023',
      date: '2024-01-15',
      type: 'تقرير سنوي',
      size: '2.5 MB'
    },
    {
      icon: BarChart3,
      title: 'مؤشرات الأداء Q4 2023',
      description: 'تقرير ربعي يوضح مؤشرات الأداء والإنجازات للربع الأخير',
      date: '2023-12-31',
      type: 'تقرير ربعي',
      size: '1.8 MB'
    },
    {
      icon: PieChart,
      title: 'تقرير الشفافية المالية 2023',
      description: 'تفصيل كامل للميزانية والمصروفات والإيرادات',
      date: '2024-02-01',
      type: 'تقرير مالي',
      size: '3.2 MB'
    }
  ];

  const statistics = [
    { label: 'المستفيدون', value: '15,847', icon: '👥' },
    { label: 'البرامج المنفذة', value: '67', icon: '📋' },
    { label: 'الشراكات', value: '23', icon: '🤝' },
    { label: 'التبرعات المجمعة', value: '2.5M ريال', icon: '💰' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-arabic">
            {t('reports')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-arabic">
            تقارير شفافة وتفصيلية عن أداء وإنجازات الجمعية
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-arabic">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reports Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="font-arabic">{t('detailedReports')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-arabic mb-4">
                تقارير تفصيلية لكل مشروع وبرنامج مع النتائج والتوصيات
              </p>
              <Button variant="outline" className="font-arabic">
                {t('view')} التقارير
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="font-arabic">{t('performanceIndicators')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-arabic mb-4">
                مؤشرات الأداء ونسب الإنجاز لجميع البرامج والمشاريع
              </p>
              <Button variant="outline" className="font-arabic">
                {t('view')} المؤشرات
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="font-arabic">{t('transparencyReports')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-arabic mb-4">
                تقارير الشفافية المالية والحوكمة والامتثال
              </p>
              <Button variant="outline" className="font-arabic">
                {t('view')} التقارير
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Latest Reports */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 font-arabic">
            أحدث التقارير
          </h2>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <report.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 font-arabic">{report.title}</h3>
                        <p className="text-muted-foreground font-arabic mb-3">{report.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-arabic">{report.date}</span>
                          </div>
                          <Badge variant="secondary" className="font-arabic">{report.type}</Badge>
                          <span className="font-arabic">{report.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        {t('view')}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        تحميل
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportsPage;