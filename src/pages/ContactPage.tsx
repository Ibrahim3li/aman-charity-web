import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: 'رقم الهاتف',
      content: '+966 11 234 5678',
      description: 'متاح من 8:00 ص - 5:00 م'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      content: 'info@aman-charity.org',
      description: 'نرد خلال 24 ساعة'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      content: 'الرياض، المملكة العربية السعودية',
      description: 'حي الملز، شارع الملك فهد'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      content: 'الأحد - الخميس',
      description: '8:00 ص - 5:00 م'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-arabic">
            {t('contact')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-arabic">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في أي وقت
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-arabic">
              معلومات التواصل
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold font-arabic mb-1">{info.title}</h3>
                        <p className="text-foreground font-arabic mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground font-arabic">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="font-arabic">تابعنا على</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <span className="text-lg">📱</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="text-lg">📘</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="text-lg">🐦</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="text-lg">📺</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-arabic">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="font-arabic">{t('fullName')}</Label>
                      <Input id="fullName" placeholder="اكتب اسمك الكامل" className="font-arabic" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-arabic">{t('email')}</Label>
                      <Input id="email" type="email" placeholder="اكتب بريدك الإلكتروني" className="font-arabic" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-arabic">{t('phone')}</Label>
                      <Input id="phone" placeholder="اكتب رقم هاتفك" className="font-arabic" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-arabic">الموضوع</Label>
                      <Input id="subject" placeholder="موضوع الرسالة" className="font-arabic" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-arabic">{t('message')}</Label>
                    <Textarea 
                      id="message" 
                      placeholder="اكتب رسالتك هنا..." 
                      className="min-h-[120px] font-arabic"
                    />
                  </div>

                  <Button className="w-full font-arabic" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    {t('submit')} الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="font-arabic">موقعنا</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground font-arabic">خريطة الموقع</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;