import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Users, 
  Heart, 
  FileText, 
  Settings, 
  TrendingUp, 
  Calendar,
  DollarSign,
  Activity,
  Plus,
  Search,
  Filter,
  Download
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for charts
  const donationsData = [
    { month: 'يناير', amount: 45000 },
    { month: 'فبراير', amount: 52000 },
    { month: 'مارس', amount: 48000 },
    { month: 'أبريل', amount: 61000 },
    { month: 'مايو', amount: 55000 },
    { month: 'يونيو', amount: 67000 },
  ];

  const programsData = [
    { name: 'راعي الأمان', value: 35, color: '#372C57' },
    { name: 'اصنع قصة', value: 25, color: '#DB9FC0' },
    { name: 'التطوع', value: 20, color: '#BCBA47' },
    { name: 'برامج أخرى', value: 20, color: '#D36E49' },
  ];

  const stats = [
    {
      title: 'إجمالي التبرعات',
      value: '328,000 ريال',
      change: '+12%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'المستخدمين المسجلين',
      value: '1,245',
      change: '+8%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'البرامج النشطة',
      value: '12',
      change: '+2',
      icon: Activity,
      color: 'text-purple-600'
    },
    {
      title: 'المستفيدين',
      value: '2,847',
      change: '+15%',
      icon: Heart,
      color: 'text-pink-600'
    },
  ];

  const recentDonations = [
    { id: '001', donor: 'أحمد محمد', amount: '500 ريال', program: 'راعي الأمان', date: '2024-01-15', status: 'مكتمل' },
    { id: '002', donor: 'فاطمة علي', amount: '300 ريال', program: 'اصنع قصة', date: '2024-01-14', status: 'معلق' },
    { id: '003', donor: 'محمد سعد', amount: '1000 ريال', program: 'زكاة', date: '2024-01-13', status: 'مكتمل' },
    { id: '004', donor: 'نورا أحمد', amount: '750 ريال', program: 'صدقة', date: '2024-01-12', status: 'مكتمل' },
  ];

  const users = [
    { id: '001', name: 'أحمد محمد علي', email: 'ahmed@example.com', role: 'مستخدم', joinDate: '2024-01-01', donations: 5 },
    { id: '002', name: 'فاطمة عبدالله', email: 'fatma@example.com', role: 'متطوع', joinDate: '2024-01-05', donations: 3 },
    { id: '003', name: 'محمد سعد', email: 'mohamed@example.com', role: 'راعي', joinDate: '2024-01-10', donations: 8 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-foreground font-arabic">لوحة التحكم - جمعية أمان</h1>
              <p className="text-muted-foreground font-arabic">إدارة شاملة لجميع أنشطة الجمعية</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 ml-2" />
                تصدير التقرير
              </Button>
              <Button className="bg-primary">
                <Plus className="h-4 w-4 ml-2" />
                إضافة جديد
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview" className="font-arabic">الرئيسية</TabsTrigger>
            <TabsTrigger value="content" className="font-arabic">إدارة المحتوى</TabsTrigger>
            <TabsTrigger value="donations" className="font-arabic">التبرعات</TabsTrigger>
            <TabsTrigger value="users" className="font-arabic">المستخدمين</TabsTrigger>
            <TabsTrigger value="media" className="font-arabic">الوسائط</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-border">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium font-arabic">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold font-arabic">{stat.value}</div>
                    <p className="text-xs text-muted-foreground font-arabic">
                      <span className="text-green-600">{stat.change}</span> من الشهر الماضي
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Donations Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-arabic">التبرعات الشهرية</CardTitle>
                  <CardDescription className="font-arabic">نظرة عامة على التبرعات خلال الأشهر الماضية</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={donationsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="amount" fill="#372C57" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Programs Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-arabic">توزيع البرامج</CardTitle>
                  <CardDescription className="font-arabic">النسب المئوية لكل برنامج</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={programsData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {programsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Donations Table */}
            <Card>
              <CardHeader>
                <CardTitle className="font-arabic">آخر التبرعات</CardTitle>
                <CardDescription className="font-arabic">أحدث العمليات المالية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-right py-2 font-arabic">المتبرع</th>
                        <th className="text-right py-2 font-arabic">المبلغ</th>
                        <th className="text-right py-2 font-arabic">البرنامج</th>
                        <th className="text-right py-2 font-arabic">التاريخ</th>
                        <th className="text-right py-2 font-arabic">الحالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentDonations.map((donation) => (
                        <tr key={donation.id} className="border-b">
                          <td className="py-3 font-arabic">{donation.donor}</td>
                          <td className="py-3 font-arabic font-medium">{donation.amount}</td>
                          <td className="py-3 font-arabic">{donation.program}</td>
                          <td className="py-3 font-arabic text-muted-foreground">{donation.date}</td>
                          <td className="py-3">
                            <Badge variant={donation.status === 'مكتمل' ? 'default' : 'secondary'} className="font-arabic">
                              {donation.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-arabic">إدارة المحتوى</CardTitle>
                <CardDescription className="font-arabic">إضافة وتعديل برامج ومبادرات الجمعية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <Input placeholder="البحث في المحتوى..." className="w-80 font-arabic" />
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 ml-2" />
                      تصفية
                    </Button>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 ml-2" />
                    إضافة برنامج جديد
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['راعي الأمان', 'اصنع قصة', 'برامج التطوع', 'الحماية من الإيذاء', 'التوعية المجتمعية', 'برامج الأطفال'].map((program, index) => (
                    <Card key={index} className="border-border">
                      <CardHeader>
                        <CardTitle className="text-lg font-arabic">{program}</CardTitle>
                        <CardDescription className="font-arabic">برنامج نشط - {index + 15} مستفيد</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <Badge variant="default" className="font-arabic">نشط</Badge>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">تعديل</Button>
                            <Button variant="outline" size="sm">حذف</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Donations Tab */}
          <TabsContent value="donations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-arabic">إدارة التبرعات</CardTitle>
                <CardDescription className="font-arabic">متابعة وإدارة جميع التبرعات</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <Input placeholder="البحث في التبرعات..." className="w-80 font-arabic" />
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 ml-2" />
                      تصفية حسب التاريخ
                    </Button>
                  </div>
                  <Button variant="outline">
                    <Download className="h-4 w-4 ml-2" />
                    تصدير البيانات
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-right py-3 font-arabic">رقم التبرع</th>
                        <th className="text-right py-3 font-arabic">المتبرع</th>
                        <th className="text-right py-3 font-arabic">المبلغ</th>
                        <th className="text-right py-3 font-arabic">البرنامج</th>
                        <th className="text-right py-3 font-arabic">طريقة الدفع</th>
                        <th className="text-right py-3 font-arabic">التاريخ</th>
                        <th className="text-right py-3 font-arabic">الحالة</th>
                        <th className="text-right py-3 font-arabic">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentDonations.map((donation) => (
                        <tr key={donation.id} className="border-b">
                          <td className="py-3 font-arabic">#{donation.id}</td>
                          <td className="py-3 font-arabic">{donation.donor}</td>
                          <td className="py-3 font-arabic font-medium">{donation.amount}</td>
                          <td className="py-3 font-arabic">{donation.program}</td>
                          <td className="py-3 font-arabic">بطاقة ائتمان</td>
                          <td className="py-3 font-arabic text-muted-foreground">{donation.date}</td>
                          <td className="py-3">
                            <Badge variant={donation.status === 'مكتمل' ? 'default' : 'secondary'} className="font-arabic">
                              {donation.status}
                            </Badge>
                          </td>
                          <td className="py-3">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">عرض</Button>
                              <Button variant="outline" size="sm">طباعة</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-arabic">إدارة المستخدمين</CardTitle>
                <CardDescription className="font-arabic">عرض وإدارة حسابات المستخدمين</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <Input placeholder="البحث في المستخدمين..." className="w-80 font-arabic" />
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 ml-2" />
                      تصفية حسب الدور
                    </Button>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 ml-2" />
                    إضافة مستخدم
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-right py-3 font-arabic">الاسم</th>
                        <th className="text-right py-3 font-arabic">البريد الإلكتروني</th>
                        <th className="text-right py-3 font-arabic">الدور</th>
                        <th className="text-right py-3 font-arabic">تاريخ التسجيل</th>
                        <th className="text-right py-3 font-arabic">عدد التبرعات</th>
                        <th className="text-right py-3 font-arabic">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b">
                          <td className="py-3 font-arabic">{user.name}</td>
                          <td className="py-3 font-arabic">{user.email}</td>
                          <td className="py-3">
                            <Badge variant="outline" className="font-arabic">{user.role}</Badge>
                          </td>
                          <td className="py-3 font-arabic text-muted-foreground">{user.joinDate}</td>
                          <td className="py-3 font-arabic">{user.donations}</td>
                          <td className="py-3">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">عرض</Button>
                              <Button variant="outline" size="sm">تعديل</Button>
                              <Button variant="outline" size="sm">حذف</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Tab */}
          <TabsContent value="media" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-arabic">مكتبة الوسائط</CardTitle>
                <CardDescription className="font-arabic">إدارة الصور والفيديوهات والملفات</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <Input placeholder="البحث في الملفات..." className="w-80 font-arabic" />
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 ml-2" />
                      تصفية حسب النوع
                    </Button>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 ml-2" />
                    رفع ملف جديد
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
                          <FileText className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-arabic truncate">ملف_{index + 1}.jpg</p>
                        <p className="text-xs text-muted-foreground font-arabic">2.5 MB</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;