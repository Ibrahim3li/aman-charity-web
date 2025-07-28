import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Heart, Phone, MapPin, Globe } from 'lucide-react';
import NavigationDropdown from './NavigationDropdown';
import UserAccountDropdown from './UserAccountDropdown';
import JoinUsDropdown from './JoinUsDropdown';
import MembershipDropdown from './MembershipDropdown';
import SearchBar from './SearchBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();

  // About dropdown items
  const aboutItems = [
    { title: t('aboutUs'), href: '/about', description: t('vision') + ' - ' + t('mission') + ' - ' + t('values') },
    { title: t('organizationalStructure'), href: '/about#structure' },
    { title: t('boardOfDirectors'), href: '/about#board' },
    { title: t('successPartners'), href: '/about#partners' },
    { title: t('financialStatements'), href: '/about#financial' },
    { title: t('policies'), href: '/about#policies' },
  ];

  // Programs dropdown items
  const programsItems = [
    { title: t('shortPrograms'), href: '/programs#short-programs' },
    { title: t('qualitativeInitiatives'), href: '/programs#initiatives' },
    { title: t('programsArchive'), href: '/programs#archive' },
    { title: t('amanSponsor'), href: '/programs#aman-sponsor' },
    { title: t('createStory'), href: '/create-story' },
  ];

  // Reports dropdown items
  const reportsItems = [
    { title: t('detailedReports'), href: '/reports#detailed-reports' },
    { title: t('performanceIndicators'), href: '/reports#performance' },
    { title: t('transparencyReports'), href: '/reports#transparency' },
  ];

  // Media Library dropdown items
  const mediaItems = [
    { title: t('news'), href: '/media#news' },
    { title: t('newsletters'), href: '/media#newsletters' },
    { title: t('certificates'), href: '/media#certificates' },
  ];

  // Donations dropdown items
  const donationItems = [
    { title: t('quickDonation'), href: '/#donation' },
    { title: t('donationMethods'), href: '/#donation-methods' },
    { title: t('donationForm'), href: '/#donation-form' },
  ];

  const menuItems = [
    { name: t('home'), href: '#home', active: true },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="gradient-primary text-white py-2 lg:py-3">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-arabic">+966 11 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="font-arabic">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 lg:px-6 max-w-screen-2xl">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 lg:gap-3 min-w-0 flex-shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary via-brand-purple to-secondary rounded-lg flex items-center justify-center shadow-elegant">
              <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-l from-primary via-brand-purple to-secondary bg-clip-text text-transparent font-arabic leading-tight truncate">
                أمان الخيرية
              </h1>
              <p className="text-xs text-muted-foreground font-arabic leading-tight truncate">نساعدك لتساعد الآخرين</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-4 flex-shrink">
            <NavigationDropdown title={t('about')} items={aboutItems} className="px-1" />
            <NavigationDropdown title={t('programs')} items={programsItems} className="px-1" />
            <NavigationDropdown title={t('reports')} items={reportsItems} className="px-1" />
            <NavigationDropdown title={t('mediaLibrary')} items={mediaItems} className="px-1" />
            <NavigationDropdown title={t('donations')} items={donationItems} className="px-1" />
            <a
              href="/careers"
              className="font-arabic font-medium text-foreground hover:text-primary transition-colors px-1 text-sm"
            >
              {t('careers')}
            </a>
            <a
              href="/contact"
              className="font-arabic font-medium text-foreground hover:text-primary transition-colors px-1 text-sm"
            >
              {t('contact')}
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
            <div className="hidden xl:block">
              <SearchBar />
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="text-foreground hover:bg-accent hover:text-accent-foreground font-arabic px-2 shrink-0"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden 2xl:inline ml-1">{t('language')}</span>
            </Button>
            
            <JoinUsDropdown />
            
            <MembershipDropdown />
            
            <UserAccountDropdown />
            
            <Button 
              variant="gradient" 
              size="sm"
              className="font-arabic shadow-medium hover:shadow-strong transition-all px-3 xl:px-4 py-2 text-white shrink-0 text-sm"
            >
              تبرع الآن
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary via-brand-purple to-secondary rounded-xl flex items-center justify-center shadow-elegant">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-base font-bold bg-gradient-to-l from-primary via-brand-purple to-secondary bg-clip-text text-transparent font-arabic leading-tight">أمان الخيرية</h2>
                    <p className="text-xs text-muted-foreground font-arabic leading-relaxed">نساعدك لتساعد الآخرين</p>
                  </div>
                </div>

                <nav className="flex flex-col space-y-3 flex-1">
                  
                  <a
                    href="/about"
                    className="font-arabic font-medium py-2 px-4 rounded-lg text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('about')}
                  </a>
                  
                  <a
                    href="/programs"
                    className="font-arabic font-medium py-2 px-4 rounded-lg text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('programs')}
                  </a>
                  
                  <a
                    href="/reports"
                    className="font-arabic font-medium py-2 px-4 rounded-lg text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('reports')}
                  </a>
                  
                  <a
                    href="/media"
                    className="font-arabic font-medium py-2 px-4 rounded-lg text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('mediaLibrary')}
                  </a>
                  
                  <a
                    href="/#donation"
                    className="font-arabic font-medium py-2 px-4 rounded-lg text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('donations')}
                  </a>
                  
                  <a
                    href="/careers"
                    className="font-arabic font-medium py-2 px-4 rounded-lg text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('careers')}
                  </a>
                  
                  <a
                    href="/contact"
                    className="font-arabic font-medium py-2 px-4 rounded-lg text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('contact')}
                  </a>
                </nav>

                <div className="flex flex-col gap-3 mt-6">
                  <Button 
                    variant="ghost" 
                    onClick={toggleLanguage}
                    className="justify-start font-arabic"
                  >
                    <Globe className="ml-2 h-4 w-4" />
                    {t('language')}
                  </Button>
                  
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="font-arabic">
                      {t('login')}
                    </Button>
                    <Button 
                      variant="gradient" 
                      className="font-arabic"
                    >
                      {t('donate')}
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;