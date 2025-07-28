import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Newspaper, FileText, Award, Play, Image, Calendar, Search, Filter } from 'lucide-react';

const MediaLibraryPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const newsItems = [
    {
      title: 'إطلاق برنامج الأسرة الآمنة',
      description: 'الجمعية تطلق برنامجاً جديداً لحماية الأسر من العنف المنزلي',
      date: '2024-03-15',
      image: '/api/placeholder/300/200',
      category: 'برامج جديدة'
    },
    {
      title: 'شراكة مع وزارة التعليم',
      description: 'توقيع اتفاقية تعاون لتنفيذ برامج التوعية في المدارس',
      date: '2024-03-10',
      image: '/api/placeholder/300/200',
      category: 'شراكات'
    },
    {
      title: 'حملة توعوية في مول الرياض',
      description: 'فعالية توعوية ناجحة استهدفت أكثر من 1000 زائر',
      date: '2024-03-05',
      image: '/api/placeholder/300/200',
      category: 'فعاليات'
    }
  ];

  const newsletters = [
    {
      title: 'نشرة أمان - مارس 2024',
      description: 'النشرة الشهرية تتضمن آخر الأخبار والفعاليات',
      date: '2024-03-01',
      size: '2.1 MB',
      downloads: 1250
    },
    {
      title: 'تقرير الربع الأول 2024',
      description: 'تقرير تفصيلي عن إنجازات الربع الأول من العام',
      date: '2024-02-28',
      size: '3.5 MB',
      downloads: 890
    }
  ];

  const certificates = [
    {
      title: 'شهادة الجودة ISO 9001',
      description: 'شهادة الجودة الدولية لإدارة الجودة',
      date: '2023-12-15',
      issuer: 'المنظمة الدولية للمعايير'
    },
    {
      title: 'جائزة أفضل جمعية خيرية',
      description: 'جائزة من وزارة الموارد البشرية والتنمية الاجتماعية',
      date: '2023-11-20',
      issuer: 'وزارة الموارد البشرية'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-arabic">
            {t('mediaLibrary')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-arabic">
            مكتبة إعلامية شاملة تضم الأخبار والتقارير والشهادات
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="ابحث في المكتبة الإعلامية..."
              className="pl-10 font-arabic"
            />
          </div>
          <Button variant="outline" className="font-arabic">
            <Filter className="w-4 h-4 mr-2" />
            تصفية
          </Button>
        </div>

        {/* Tabs for different media types */}
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="news" className="font-arabic">{t('news')}</TabsTrigger>
            <TabsTrigger value="newsletters" className="font-arabic">{t('newsletters')}</TabsTrigger>
            <TabsTrigger value="certificates" className="font-arabic">{t('certificates')}</TabsTrigger>
          </TabsList>

          {/* News Tab */}
          <TabsContent value="news" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="font-arabic">
                        {item.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="font-arabic text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-arabic mb-4">
                      {item.description}
                    </p>
                    <Button variant="outline" className="w-full font-arabic">
                      {t('view')} التفاصيل
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Newsletters Tab */}
          <TabsContent value="newsletters" className="mt-8">
            <div className="space-y-4">
              {newsletters.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 font-arabic">{item.title}</h3>
                          <p className="text-muted-foreground font-arabic mb-3">{item.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span className="font-arabic">{item.date}</span>
                            </div>
                            <span className="font-arabic">{item.size}</span>
                            <span className="font-arabic">{item.downloads} تحميل</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Button variant="outline" size="sm" className="font-arabic">
                          {t('view')}
                        </Button>
                        <Button variant="outline" size="sm" className="font-arabic">
                          تحميل
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-arabic text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground font-arabic mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center justify-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-arabic">{item.date}</span>
                      </div>
                      <div className="font-arabic">
                        الجهة المانحة: {item.issuer}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full font-arabic">
                      {t('view')} الشهادة
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default MediaLibraryPage;