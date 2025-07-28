import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Heart, FileText, Settings, User, Calendar, Target } from 'lucide-react';

const UserAccount = () => {
  const { t } = useTranslation();

  const donationHistory = [
    { id: 1, amount: 500, project: 'برنامج راعي الأمان', date: '2024-01-15', status: 'مكتمل' },
    { id: 2, amount: 200, project: 'زكاة الفطر', date: '2024-01-10', status: 'مكتمل' },
    { id: 3, amount: 1000, project: 'صدقة جارية', date: '2024-01-05', status: 'مكتمل' },
  ];

  const impactReports = [
    { title: 'تقرير الأثر - يناير 2024', families: 25, children: 67, date: '2024-01-31' },
    { title: 'تقرير الأثر - ديسمبر 2023', families: 30, children: 78, date: '2023-12-31' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary font-arabic mb-2">حسابي الشخصي</h1>
            <p className="text-muted-foreground font-arabic">إدارة تبرعاتك ومتابعة الأثر</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="overview" className="font-arabic">نظرة عامة</TabsTrigger>
              <TabsTrigger value="donations" className="font-arabic">التبرعات</TabsTrigger>
              <TabsTrigger value="impact" className="font-arabic">تقارير الأثر</TabsTrigger>
              <TabsTrigger value="settings" className="font-arabic">الإعدادات</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="shadow-soft">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium font-arabic">إجمالي التبرعات</CardTitle>
                    <Heart className="h-4 w-4 text-brand-pink" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">1,700 ريال</div>
                    <p className="text-xs text-muted-foreground font-arabic">+12% من الشهر الماضي</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium font-arabic">عدد التبرعات</CardTitle>
                    <Target className="h-4 w-4 text-brand-orange" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">3</div>
                    <p className="text-xs text-muted-foreground font-arabic">خلال هذا العام</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium font-arabic">الأسر المستفيدة</CardTitle>
                    <User className="h-4 w-4 text-brand-purple" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">55</div>
                    <p className="text-xs text-muted-foreground font-arabic">من تبرعاتك</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium font-arabic">الأطفال المستفيدون</CardTitle>
                    <Heart className="h-4 w-4 text-brand-yellow" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">145</div>
                    <p className="text-xs text-muted-foreground font-arabic">طفل وطفلة</p>
                  </CardContent>
                </Card>
              </div>

              {/* Sponsor Program Status */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-arabic">برنامج راعي الأمان</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-arabic">حالة الاشتراك:</span>
                    <Badge variant="secondary" className="font-arabic">نشط</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-arabic">مبلغ الاشتراك الشهري:</span>
                    <span className="font-bold text-primary">500 ريال</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-arabic">تقدم الهدف الشهري</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <Button variant="outline" className="w-full font-arabic">
                    <Settings className="mr-2 h-4 w-4" />
                    إدارة الاشتراك
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Donations Tab */}
            <TabsContent value="donations" className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-arabic">سجل التبرعات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {donationHistory.map((donation) => (
                      <div key={donation.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="space-y-1">
                          <p className="font-medium font-arabic">{donation.project}</p>
                          <p className="text-sm text-muted-foreground">{donation.date}</p>
                        </div>
                        <div className="text-left space-y-1">
                          <p className="font-bold text-primary">{donation.amount} ريال</p>
                          <Badge variant="secondary" className="font-arabic">{donation.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {impactReports.map((report, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="font-arabic">{report.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{report.families}</div>
                          <p className="text-sm font-arabic">أسرة مستفيدة</p>
                        </div>
                        <div className="text-center p-4 bg-brand-pink/10 rounded-lg">
                          <div className="text-2xl font-bold text-brand-pink">{report.children}</div>
                          <p className="text-sm font-arabic">طفل مستفيد</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full font-arabic">
                        <FileText className="mr-2 h-4 w-4" />
                        عرض التقرير الكامل
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-arabic">إعدادات الحساب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-arabic">الاسم الكامل</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-border rounded-md font-arabic" 
                      defaultValue="أحمد محمد الأحمد"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-arabic">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-border rounded-md" 
                      defaultValue="ahmed@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-arabic">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      className="w-full p-2 border border-border rounded-md" 
                      defaultValue="+966 50 123 4567"
                    />
                  </div>
                  <Button className="w-full font-arabic">
                    حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserAccount;