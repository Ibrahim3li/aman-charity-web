# موقع جمعية أمان الخيرية 🏛️

## نظرة عامة
موقع إلكتروني حديث ومتعدد اللغات لجمعية أمان الخيرية المتخصصة في الحماية من الإيذاء.

## الميزات الجديدة ✨

### 🎯 لوحة التحكم المتطورة
- **المسار**: `/dashboard`
- إحصائيات شاملة مع رسوم بيانية تفاعلية
- إدارة المحتوى والبرامج
- متابعة التبرعات وإدارة المستخدمين
- مكتبة الوسائط والملفات

### 🔍 نظام البحث المتقدم
- بحث فوري في جميع أقسام الموقع
- اقتراحات تلقائية
- واجهة عصرية وسهلة الاستخدام

### 🎬 Hero Section متحرك
- سلايدر تفاعلي مع 3 شرائح
- شعار "من حقك تعيش بأمان" مع انيميشن
- تأثيرات بصرية احترافية

### 🌐 دعم لغتين محسّن
- تبديل فوري بين العربية والإنجليزية
- دعم RTL/LTR كامل
- خطوط Cairo للعربية و Inter للإنجليزية

### 📱 قوائم منسدلة متطورة
- قائمة "انضم إلينا" (تطوع، ممارس، عضو)
- قائمة "تسجيل الدخول" مع خيارات الحساب
- قوائم فرعية شاملة لجميع الأقسام

## التقنيات المستخدمة 🛠️
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- React i18next للترجمة
- Recharts للرسوم البيانية
- Lucide React للأيقونات

## التشغيل السريع 🚀

```bash
npm install
npm run dev
```

## البنية الهيكلية 📁
```
src/
├── components/
│   ├── AnimatedHero.tsx     # Hero متحرك
│   ├── SearchBar.tsx        # شريط البحث
│   ├── NavigationDropdown.tsx
│   └── ui/                  # مكونات shadcn
├── pages/
│   ├── Dashboard.tsx        # لوحة التحكم
│   └── UserAccount.tsx      # حساب المستخدم
├── contexts/
│   └── LanguageContext.tsx  # إدارة اللغات
└── lib/
    └── i18n.ts             # إعدادات الترجمة
```

## إدارة المحتوى 📝

### إضافة ترجمة جديدة:
```typescript
// في src/lib/i18n.ts
ar: {
  translation: {
    newText: 'النص الجديد'
  }
},
en: {
  translation: {
    newText: 'New Text'
  }
}
```

### تخصيص الألوان:
```css
/* في src/index.css */
:root {
  --primary: 221 39% 25%;  /* #372C57 */
  --secondary: 46 14% 93%; /* #E9E8E6 */
  /* ... */
}
```

## النشر 🌐

### Netlify (مُوصى به):
1. ربط المستودع بـ Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel:
```bash
npm i -g vercel
vercel --prod
```

## الدعم والصيانة 🔧

### تحديث التبعيات:
```bash
npm update
npx shadcn-ui@latest add --all
```

### حل المشاكل الشائعة:
- **مشكلة اتجاه النص**: تأكد من `dir="rtl"` للعربية
- **مشاكل الخطوط**: استخدم `font-arabic` للنصوص العربية
- **مشاكل البناء**: `rm -rf node_modules && npm install`

## ملاحظات مهمة 📋

### للتطوير المستقبلي:
- لوحة التحكم حالياً frontend mockup
- يحتاج ربط مع backend (Node.js/Laravel)
- قاعدة بيانات لحفظ البيانات الفعلية

### الأمان:
- إضافة authentication حقيقي
- حماية routes الحساسة
- تشفير البيانات الحساسة

## الاتصال 📞
- الموقع: [aman-charity.org](https://aman-charity.org)
- البريد: info@aman-charity.org
- الهاتف: +966 XX XXX XXXX

---
**آخر تحديث**: يناير 2024  
**الإصدار**: 2.0.0
