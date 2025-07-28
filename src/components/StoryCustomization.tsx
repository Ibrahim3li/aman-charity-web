import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { BookOpen, Sparkles, Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface ChildData {
  name: string;
  age: string;
  gender: string;
  interests: string;
  favoriteColor: string;
}

interface StoryTemplate {
  id: string;
  title: string;
  description: string;
  ageGroup: string;
}

const StoryCustomization: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [childData, setChildData] = useState<ChildData>({
    name: '',
    age: '',
    gender: '',
    interests: '',
    favoriteColor: ''
  });
  const [generatedStory, setGeneratedStory] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const storyTemplates: StoryTemplate[] = [
    {
      id: 'adventure',
      title: 'مغامرة في الغابة',
      description: 'قصة مثيرة عن استكشاف الغابة والتعلم من الطبيعة',
      ageGroup: '5-8 سنوات'
    },
    {
      id: 'friendship',
      title: 'صداقة جديدة',
      description: 'قصة عن أهمية الصداقة والتعاون مع الآخرين',
      ageGroup: '6-10 سنوات'
    },
    {
      id: 'courage',
      title: 'الشجاعة الصغيرة',
      description: 'قصة تعلم الطفل كيفية التغلب على الخوف',
      ageGroup: '4-7 سنوات'
    },
    {
      id: 'kindness',
      title: 'قلب كبير',
      description: 'قصة عن اللطف والعطاء ومساعدة الآخرين',
      ageGroup: '5-9 سنوات'
    }
  ];

  const handleInputChange = (field: keyof ChildData, value: string) => {
    setChildData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateStory = async () => {
    if (!selectedTemplate || !childData.name || !childData.age || !childData.gender) {
      toast.error('يرجى ملء جميع البيانات المطلوبة');
      return;
    }

    setIsGenerating(true);
    try {
      // محاكاة استدعاء API للذكاء الاصطناعي
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const template = storyTemplates.find(t => t.id === selectedTemplate);
      const customizedStory = `
كان يا ما كان، في قديم الزمان، كان هناك طفل/طفلة جميل/جميلة يدعى ${childData.name}، 
عمره ${childData.age} سنوات. كان ${childData.name} يحب اللون ${childData.favoriteColor} كثيراً، 
ودائماً ما كان يستمتع بـ ${childData.interests}.

${template?.id === 'adventure' ? 
`في يوم مشمس، قرر ${childData.name} الذهاب في مغامرة إلى الغابة القريبة من البيت...` :
template?.id === 'friendship' ?
`التقى ${childData.name} بصديق جديد في المدرسة، وكان هذا الصديق مختلفاً قليلاً...` :
template?.id === 'courage' ?
`كان ${childData.name} خائفاً من الظلام، ولكن في إحدى الليالي...` :
`رأى ${childData.name} طفلاً حزيناً في الحديقة، فقرر أن يساعده...`}

وهكذا تعلم ${childData.name} دروساً مهمة في الحياة، وأصبح أكثر حكمة وسعادة.

النهاية 🌟
      `;
      
      setGeneratedStory(customizedStory);
      toast.success('تم توليد القصة بنجاح!');
    } catch (error) {
      toast.error('حدث خطأ في توليد القصة');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadStory = () => {
    if (!generatedStory) return;
    
    const element = document.createElement('a');
    const file = new Blob([generatedStory], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `قصة_${childData.name}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('تم تحميل القصة!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <BookOpen className="w-8 h-8 text-primary" />
          <Sparkles className="w-6 h-6 text-brand-orange" />
        </div>
        <h1 className="text-3xl font-bold font-arabic">نظام تخصيص قصص الأطفال</h1>
        <p className="text-muted-foreground font-arabic">اخلق قصة مخصصة لطفلك باستخدام الذكاء الاصطناعي</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-arabic">اختر نموذج القصة</CardTitle>
              <CardDescription className="font-arabic">اختر النموذج المناسب لعمر طفلك</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {storyTemplates.map((template) => (
                  <div 
                    key={template.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedTemplate === template.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <h3 className="font-semibold font-arabic">{template.title}</h3>
                    <p className="text-sm text-muted-foreground font-arabic mt-1">{template.description}</p>
                    <span className="text-xs text-primary font-arabic">{template.ageGroup}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-arabic">بيانات الطفل</CardTitle>
              <CardDescription className="font-arabic">املأ البيانات لتخصيص القصة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-arabic">اسم الطفل *</Label>
                  <Input
                    id="name"
                    value={childData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="أدخل اسم الطفل"
                    className="font-arabic"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age" className="font-arabic">العمر *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={childData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder="4"
                    min="3"
                    max="12"
                    className="font-arabic"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gender" className="font-arabic">الجنس *</Label>
                <Select value={childData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger className="font-arabic">
                    <SelectValue placeholder="اختر الجنس" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male" className="font-arabic">ذكر</SelectItem>
                    <SelectItem value="female" className="font-arabic">أنثى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="favoriteColor" className="font-arabic">اللون المفضل</Label>
                <Input
                  id="favoriteColor"
                  value={childData.favoriteColor}
                  onChange={(e) => handleInputChange('favoriteColor', e.target.value)}
                  placeholder="الأزرق، الأحمر، الأخضر..."
                  className="font-arabic"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests" className="font-arabic">الاهتمامات والهوايات</Label>
                <Textarea
                  id="interests"
                  value={childData.interests}
                  onChange={(e) => handleInputChange('interests', e.target.value)}
                  placeholder="الرسم، كرة القدم، القراءة..."
                  className="font-arabic"
                  rows={3}
                />
              </div>

              <Button 
                onClick={generateStory}
                disabled={isGenerating || !selectedTemplate || !childData.name || !childData.age || !childData.gender}
                className="w-full font-arabic"
                variant="charity"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                    جاري توليد القصة...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 ml-2" />
                    توليد القصة
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Story Display Section */}
        <div className="space-y-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="font-arabic flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                القصة المخصصة
              </CardTitle>
              {generatedStory && (
                <Button
                  onClick={downloadStory}
                  variant="outline"
                  size="sm"
                  className="font-arabic w-fit"
                >
                  <Download className="w-4 h-4 ml-2" />
                  تحميل القصة
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {generatedStory ? (
                <div className="bg-gradient-to-br from-primary/5 to-brand-purple/5 p-6 rounded-lg">
                  <pre className="whitespace-pre-wrap font-arabic text-sm leading-relaxed">
                    {generatedStory}
                  </pre>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                  <BookOpen className="w-16 h-16 mb-4 opacity-50" />
                  <p className="font-arabic text-center">
                    املأ البيانات واختر نموذج القصة لبدء التوليد
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StoryCustomization;