import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      // Header
      home: 'الرئيسية',
      about: 'عن الجمعية',
      programs: 'برامجنا ومبادراتنا',
      reports: 'التقارير',
      joinUs: 'انضم إلينا',
      careers: 'الوظائف',
      contact: 'تواصل معنا',
      login: 'تسجيل الدخول',
      donate: 'تبرع الآن',
      language: 'English',
      
      // About submenu
      aboutUs: 'من نحن',
      vision: 'الرؤية',
      mission: 'الرسالة',
      values: 'القيم',
      organizationalStructure: 'الهيكل التنظيمي',
      boardOfDirectors: 'مجلس الإدارة',
      successPartners: 'شركاء النجاح',
      financialStatements: 'القوائم المالية والاجتماعات',
      policies: 'السياسات والإجراءات',
      
      // Programs submenu
      shortPrograms: 'البرامج القصيرة والتسجيل فيها',
      qualitativeInitiatives: 'المبادرات النوعية',
      programsArchive: 'أرشيف البرامج السابقة',
      amanSponsor: 'برنامج راعي الأمان',
      createStory: 'برنامج اصنع قصة باسم طفلك',
      
      // Reports submenu
      detailedReports: 'تقارير تفصيلية لكل مشروع',
      performanceIndicators: 'نسب الإنجاز ومؤشرات الأداء',
      transparencyReports: 'تقارير الشفافية المالية',
      
      // Media Library submenu
      mediaLibrary: 'المكتبة الإعلامية',
      news: 'الأخبار والتغطيات الإعلامية',
      newsletters: 'النشرات والتقارير',
      certificates: 'الشهادات والجوائز',
      
      // Donations submenu
      donations: 'التبرعات',
      quickDonation: 'التبرع السريع',
      donationMethods: 'طرق التبرع (زكاة – صدقات – مشاريع محددة)',
      donationForm: 'نموذج التبرع الإلكتروني',
      
      // Join Us submenu
      volunteer: 'التطوع',
      practitionerRegistration: 'التسجيل كممارس في مجال الحماية من الإيذاء',
      memberRegistration: 'التسجيل كعضو',
      
      // Membership dropdown
      newMember: 'عضو جديد',
      renewMembership: 'تجديد عضوية',
      
      // Login dropdown
      createAccount: 'إنشاء حساب شخصي',
      trackDonations: 'متابعة حالة التبرعات',
      impactReports: 'الاطلاع على تقارير الأثر الخاصة بتبرعاتك',
      manageSponsorSubscription: 'إدارة اشتراك برنامج راعي الأمان',
      
      // Hero Section
      heroTitle1: 'من حقك تعيش بأمان',
      heroSubtitle1: 'نحن هنا لحمايتك ودعمك في كل خطوة',
      heroTitle2: 'برامج تهدف للحماية والأمان',
      heroSubtitle2: 'مبادرات متنوعة لخدمة المجتمع وحمايته من الإيذاء',
      heroTitle3: 'انضم إلى مجتمع الأمان',
      heroSubtitle3: 'كن جزءاً من التغيير الإيجابي في المجتمع',
      explorePrograms: 'استكشف برامجنا',
      scrollDown: 'اكتشف المزيد',
      
      // About Section
      aboutTitle: 'عن جمعية أمان الخيرية',
      aboutDescription: 'نحن جمعية خيرية مختصة في حماية الأطفال والأسر من الإيذاء والعنف. نسعى لبناء مجتمع آمن من خلال برامج الوقاية والتأهيل والدعم.',
      ourVision: 'رؤيتنا',
      visionText: 'مجتمع آمن خالٍ من العنف والإيذاء',
      ourMission: 'رسالتنا',
      missionText: 'حماية الأطفال والأسر من العنف والإيذاء من خلال برامج الوقاية والتدخل المبكر والتأهيل',
      ourValues: 'قيمنا',
      valuesText: 'الأمانة، الشفافية، الاحترام، التعاون، الجودة',
      
      // Services Section
      servicesTitle: 'خدماتنا',
      servicesDescription: 'نقدم مجموعة شاملة من الخدمات للحماية والدعم',
      protectionPrograms: 'برامج الحماية',
      protectionDesc: 'برامج متخصصة لحماية الأطفال والأسر من العنف والإيذاء',
      awarenessPrograms: 'برامج التوعية',
      awarenessDesc: 'حملات توعوية لرفع الوعي بأهمية الحماية من الإيذاء',
      trainingPrograms: 'برامج التدريب',
      trainingDesc: 'تدريب المختصين والمجتمع على طرق الحماية والتعامل مع حالات الإيذاء',
      supportServices: 'خدمات الدعم',
      supportDesc: 'الدعم النفسي والاجتماعي للضحايا وأسرهم',
      
      // Donation Section
      donationTitle: 'ادعم قضيتنا',
      donationDescription: 'مساهمتك تساعدنا في حماية المزيد من الأطفال والأسر',
      donateWithCard: 'تبرع بالبطاقة',
      donateWithApplePay: 'تبرع بـ Apple Pay',
      monthlyDonation: 'تبرع شهري',
      oneTimeDonation: 'تبرع لمرة واحدة',
      
      // Footer
      aboutFooter: 'حول الجمعية',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      followUs: 'تابعنا',
      allRightsReserved: 'جميع الحقوق محفوظة',
      
      // Pages
      pageNotFound: 'الصفحة غير موجودة',
      returnHome: 'العودة للرئيسية',
      
      // Forms
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'الرسالة',
      submit: 'إرسال',
      amount: 'المبلغ',
      currency: 'ريال سعودي',
      
      // Story Customization
      storyTitle: 'برنامج اصنع قصة باسم طفلك',
      storyDescription: 'اختر قصة وخصصها لطفلك باستخدام الذكاء الاصطناعي',
      childName: 'اسم الطفل',
      childAge: 'عمر الطفل',
      childGender: 'جنس الطفل',
      male: 'ذكر',
      female: 'أنثى',
      selectStory: 'اختر القصة',
      generateStory: 'إنشاء القصة',
      
      // Common
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      success: 'تم بنجاح',
      cancel: 'إلغاء',
      save: 'حفظ',
      edit: 'تعديل',
      delete: 'حذف',
      view: 'عرض',
      search: 'بحث',
      filter: 'تصفية',
      sort: 'ترتيب',
      close: 'إغلاق',
      open: 'فتح',
      yes: 'نعم',
      no: 'لا',
      next: 'التالي',
      previous: 'السابق',
      finish: 'إنهاء',
    }
  },
  en: {
    translation: {
      // Header
      home: 'Home',
      about: 'About Us',
      programs: 'Programs & Initiatives',
      reports: 'Reports',
      joinUs: 'Join Us',
      careers: 'Careers',
      contact: 'Contact Us',
      login: 'Login',
      donate: 'Donate Now',
      language: 'العربية',
      
      // About submenu
      aboutUs: 'About Us',
      vision: 'Vision',
      mission: 'Mission',
      values: 'Values',
      organizationalStructure: 'Organizational Structure',
      boardOfDirectors: 'Board of Directors',
      successPartners: 'Success Partners',
      financialStatements: 'Financial Statements & Meetings',
      policies: 'Policies & Procedures',
      
      // Programs submenu
      shortPrograms: 'Short Programs & Registration',
      qualitativeInitiatives: 'Qualitative Initiatives',
      programsArchive: 'Programs Archive',
      amanSponsor: 'Aman Sponsor Program',
      createStory: 'Create a Story Program',
      
      // Reports submenu
      detailedReports: 'Detailed Project Reports',
      performanceIndicators: 'Performance Indicators',
      transparencyReports: 'Financial Transparency Reports',
      
      // Media Library submenu
      mediaLibrary: 'Media Library',
      news: 'News & Media Coverage',
      newsletters: 'Newsletters & Reports',
      certificates: 'Certificates & Awards',
      
      // Donations submenu
      donations: 'Donations',
      quickDonation: 'Quick Donation',
      donationMethods: 'Donation Methods (Zakat - Sadaqah - Specific Projects)',
      donationForm: 'Electronic Donation Form',
      
      // Join Us submenu
      volunteer: 'Volunteer',
      practitionerRegistration: 'Register as Protection Practitioner',
      memberRegistration: 'Register as Member',
      
      // Membership dropdown
      newMember: 'New Member',
      renewMembership: 'Renew Membership',
      
      // Login dropdown
      createAccount: 'Create Personal Account',
      trackDonations: 'Track Donations',
      impactReports: 'View Impact Reports',
      manageSponsorSubscription: 'Manage Sponsor Program Subscription',
      
      // Hero Section
      heroTitle1: 'Your Right to Live Safely',
      heroSubtitle1: 'We are here to protect and support you every step of the way',
      heroTitle2: 'Programs Aimed at Protection and Security',
      heroSubtitle2: 'Various initiatives to serve and protect the community from abuse',
      heroTitle3: 'Join the Safety Community',
      heroSubtitle3: 'Be part of positive change in the community',
      explorePrograms: 'Explore Our Programs',
      scrollDown: 'Discover More',
      
      // About Section
      aboutTitle: 'About Aman Charity Association',
      aboutDescription: 'We are a charity association specialized in protecting children and families from abuse and violence. We strive to build a safe community through prevention, rehabilitation, and support programs.',
      ourVision: 'Our Vision',
      visionText: 'A safe community free from violence and abuse',
      ourMission: 'Our Mission',
      missionText: 'Protecting children and families from violence and abuse through prevention, early intervention, and rehabilitation programs',
      ourValues: 'Our Values',
      valuesText: 'Integrity, Transparency, Respect, Cooperation, Quality',
      
      // Services Section
      servicesTitle: 'Our Services',
      servicesDescription: 'We provide a comprehensive range of protection and support services',
      protectionPrograms: 'Protection Programs',
      protectionDesc: 'Specialized programs to protect children and families from violence and abuse',
      awarenessPrograms: 'Awareness Programs',
      awarenessDesc: 'Awareness campaigns to raise awareness about the importance of protection from abuse',
      trainingPrograms: 'Training Programs',
      trainingDesc: 'Training specialists and the community on protection methods and dealing with abuse cases',
      supportServices: 'Support Services',
      supportDesc: 'Psychological and social support for victims and their families',
      
      // Donation Section
      donationTitle: 'Support Our Cause',
      donationDescription: 'Your contribution helps us protect more children and families',
      donateWithCard: 'Donate with Card',
      donateWithApplePay: 'Donate with Apple Pay',
      monthlyDonation: 'Monthly Donation',
      oneTimeDonation: 'One-time Donation',
      
      // Footer
      aboutFooter: 'About the Association',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      followUs: 'Follow Us',
      allRightsReserved: 'All Rights Reserved',
      
      // Pages
      pageNotFound: 'Page Not Found',
      returnHome: 'Return Home',
      
      // Forms
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      message: 'Message',
      submit: 'Submit',
      amount: 'Amount',
      currency: 'SAR',
      
      // Story Customization
      storyTitle: 'Create a Story in Your Child\'s Name Program',
      storyDescription: 'Choose a story and customize it for your child using artificial intelligence',
      childName: 'Child Name',
      childAge: 'Child Age',
      childGender: 'Child Gender',
      male: 'Male',
      female: 'Female',
      selectStory: 'Select Story',
      generateStory: 'Generate Story',
      
      // Common
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      view: 'View',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      close: 'Close',
      open: 'Open',
      yes: 'Yes',
      no: 'No',
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;