import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, CreditCard, Smartphone, Building2, CheckCircle, Wallet } from 'lucide-react';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('general');

  const quickAmounts = [50, 100, 250, 500, 1000];
  
  const donationTypes = [
    {
      id: 'general',
      title: 'تبرع عام',
      description: 'للمشاريع والبرامج العامة للجمعية',
      icon: Heart,
      color: 'brand-orange'
    },
    {
      id: 'zakat',
      title: 'زكاة وصدقات',
      description: 'زكاة المال والصدقات الشرعية',
      icon: Building2,
      color: 'brand-pink'
    },
    {
      id: 'sponsor',
      title: 'راعي الأمان',
      description: 'رعاية أسرة محتاجة لمدة شهر كامل',
      icon: CheckCircle,
      color: 'brand-purple'
    }
  ];

  const paymentMethods = [
    { id: 'card', name: 'بطاقة ائتمانية', icon: CreditCard },
    { id: 'apple', name: 'Apple Pay', icon: Wallet },
    { id: 'stc', name: 'STC Pay', icon: Smartphone },
    { id: 'bank', name: 'تحويل بنكي', icon: Building2 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-arabic text-primary font-medium">تبرع معنا</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary font-arabic mb-6">
            ساهم في صنع الفرق
          </h2>
          <p className="text-lg text-muted-foreground font-arabic max-w-2xl mx-auto leading-relaxed">
            تبرعك اليوم يمكن أن يغير حياة أسرة كاملة. انضم إلينا في رحلة العطاء وكن جزءاً من التغيير الإيجابي
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Donation Form */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-primary font-arabic mb-8">اختر نوع التبرع</h3>
                
                {/* Donation Types */}
                <div className="space-y-4 mb-8">
                  {donationTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        donationType === type.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="donationType"
                        value={type.id}
                        checked={donationType === type.id}
                        onChange={(e) => setDonationType(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        donationType === type.id ? `bg-${type.color}` : 'bg-gray-100'
                      }`}>
                        <type.icon className={`w-6 h-6 ${
                          donationType === type.id ? 'text-white' : 'text-gray-500'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary font-arabic">{type.title}</h4>
                        <p className="text-sm text-muted-foreground font-arabic">{type.description}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Amount Selection */}
                <div className="mb-6 lg:mb-8">
                  <h4 className="text-lg font-bold text-primary font-arabic mb-4">اختر مبلغ التبرع</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3 mb-4">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-2 lg:p-3 rounded-lg border-2 font-arabic font-medium transition-all text-sm lg:text-base ${
                          selectedAmount === amount && !customAmount
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {amount} ريال
                      </button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="مبلغ مخصص"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    className="font-arabic"
                  />
                </div>

                {/* Payment Methods */}
                <div className="mb-6 lg:mb-8">
                  <h4 className="text-lg font-bold text-primary font-arabic mb-4">طريقة الدفع</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        className="flex flex-col items-center gap-2 p-3 lg:p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-all"
                      >
                        <method.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                        <span className="text-xs lg:text-sm font-arabic">{method.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Donate Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-brand-orange to-brand-pink text-white font-arabic text-lg py-6"
                >
                  تبرع بـ {customAmount || selectedAmount} ريال
                  <Heart className="w-5 h-5 mr-2" />
                </Button>
              </div>

              {/* Impact Visualization */}
              <div className="bg-gradient-to-br from-primary to-brand-purple p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold font-arabic mb-8">أثر تبرعك</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl font-bold font-arabic mb-2">50 ريال</div>
                    <p className="font-arabic text-white/90">وجبة غذائية متكاملة لأسرة مكونة من 5 أفراد</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl font-bold font-arabic mb-2">100 ريال</div>
                    <p className="font-arabic text-white/90">حقيبة مدرسية مع جميع المستلزمات لطالب محتاج</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl font-bold font-arabic mb-2">500 ريال</div>
                    <p className="font-arabic text-white/90">فحص طبي شامل لمريض غير قادر على تكاليف العلاج</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-3xl font-bold font-arabic mb-2">1000 ريال</div>
                    <p className="font-arabic text-white/90">دعم أسرة محتاجة بالمواد الغذائية لشهر كامل</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-brand-yellow" />
                    <span className="font-arabic">تبرعك مؤمن وآمن 100%</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-brand-yellow" />
                    <span className="font-arabic">تقارير شفافة لاستخدام التبرعات</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-yellow" />
                    <span className="font-arabic">إشعار فوري عند وصول تبرعك</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;