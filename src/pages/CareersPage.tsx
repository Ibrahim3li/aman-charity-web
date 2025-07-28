import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Building, Calendar, Send } from 'lucide-react';

const CareersPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const jobs = [
    {
      title: 'مختص حماية الطفل',
      department: 'قسم الحماية',
      location: 'الرياض',
      type: 'دوام كامل',
      experience: '3-5 سنوات',
      deadline: '2024-04-15',
      description: 'البحث عن مختص متمرس في مجال حماية الطفل للانضمام إلى فريقنا المتميز',
      requirements: [
        'بكالوريوس في علم النفس أو الخدمة الاجتماعية',
        'خبرة لا تقل عن 3 سنوات في مجال حماية الطفل',
        'مهارات تواصل ممتازة',
        'القدرة على العمل تحت الضغط'
      ]
    },
    {
      title: 'منسق برامج التوعية',
      department: 'قسم التوعية',
      location: 'الرياض',
      type: 'دوام كامل',
      experience: '2-4 سنوات',
      deadline: '2024-04-20',
      description: 'منسق برامج لتطوير وتنفيذ حملات التوعية المجتمعية',
      requirements: [
        'بكالوريوس في التسويق أو الإعلام',
        'خبرة في تنظيم الفعاليات',
        'مهارات في التصميم والإبداع',
        'إجادة استخدام وسائل التواصل الاجتماعي'
      ]
    },
    {
      title: 'محاسب مالي',
      department: 'القسم المالي',
      location: 'الرياض',
      type: 'دوام كامل',
      experience: '2-3 سنوات',
      deadline: '2024-04-25',
      description: 'محاسب مالي للإشراف على العمليات المحاسبية والمالية للجمعية',
      requirements: [
        'بكالوريوس في المحاسبة',
        'شهادة زمالة محاسبية معتمدة',
        'خبرة في المؤسسات غير الربحية',
        'إجادة برامج المحاسبة'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'راتب تنافسي',
      description: 'راتب يتناسب مع المؤهلات والخبرة'
    },
    {
      icon: '🏥',
      title: 'تأمين صحي',
      description: 'تأمين صحي شامل للموظف وعائلته'
    },
    {
      icon: '📚',
      title: 'التطوير المهني',
      description: 'برامج تدريبية ودورات تطويرية'
    },
    {
      icon: '🏖️',
      title: 'إجازات مدفوعة',
      description: 'إجازات سنوية ومرضية مدفوعة'
    },
    {
      icon: '🎯',
      title: 'بيئة عمل إيجابية',
      description: 'فريق متعاون وبيئة عمل محفزة'
    },
    {
      icon: '🚀',
      title: 'فرص التقدم',
      description: 'فرص ترقية وتطوير مسار مهني'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-arabic">
            {t('careers')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-arabic">
            انضم إلى فريقنا وكن جزءاً من التغيير الإيجابي في المجتمع
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center font-arabic">
            مزايا العمل معنا
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2 font-arabic">{benefit.title}</h3>
                  <p className="text-muted-foreground font-arabic">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 font-arabic">
            الوظائف المتاحة
          </h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold text-foreground font-arabic">{job.title}</h3>
                        <Badge variant="secondary" className="font-arabic">{job.type}</Badge>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-arabic">{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-arabic">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span className="font-arabic">{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-arabic">آخر موعد: {job.deadline}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground font-arabic mb-4">{job.description}</p>
                      
                      <div>
                        <h4 className="font-bold text-foreground mb-2 font-arabic">المتطلبات:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-muted-foreground font-arabic flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:w-48">
                      <Button className="w-full font-arabic">
                        <Send className="w-4 h-4 mr-2" />
                        تقدم للوظيفة
                      </Button>
                      <Button variant="outline" className="w-full font-arabic">
                        {t('view')} التفاصيل
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-arabic">
              لم تجد الوظيفة المناسبة؟
            </h2>
            <p className="text-muted-foreground font-arabic mb-6">
              أرسل لنا سيرتك الذاتية وسنتواصل معك عند توفر وظيفة تناسب مؤهلاتك
            </p>
            <Button size="lg" className="font-arabic">
              <Send className="w-4 h-4 mr-2" />
              أرسل سيرتك الذاتية
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;