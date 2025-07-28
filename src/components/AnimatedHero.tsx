import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedHero: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: t('heroTitle1') || 'من حقك تعيش بأمان',
      subtitle: t('heroSubtitle1') || 'نحن هنا لحمايتك ودعمك في كل خطوة',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80',
      icon: Shield,
      color: 'from-primary/90 to-primary/70'
    },
    {
      id: 2,
      title: t('heroTitle2') || 'برامج تهدف للحماية والأمان',
      subtitle: t('heroSubtitle2') || 'مبادرات متنوعة لخدمة المجتمع وحمايته من الإيذاء',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
      icon: Heart,
      color: 'from-secondary/90 to-secondary/70'
    },
    {
      id: 3,
      title: t('heroTitle3') || 'انضم إلى مجتمع الأمان',
      subtitle: t('heroSubtitle3') || 'كن جزءاً من التغيير الإيجابي في المجتمع',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1200&q=80',
      icon: Users,
      color: 'from-accent/90 to-accent/70'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Icon */}
            <div className="mb-6 lg:mb-8 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 bg-white/20 rounded-full backdrop-blur-sm mb-4 shadow-lg">
                <IconComponent className="h-8 w-8 lg:h-12 lg:w-12 text-white" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-arabic mb-6 lg:mb-8 animate-fade-in leading-tight">
              {currentSlideData.title}
            </h1>

            {/* Animated Lines */}
            <div className="flex justify-center mb-6 lg:mb-8">
              <div className="relative">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="h-1 w-16 lg:w-24 bg-white animate-slide-in-left"></div>
                  <div className="h-2 w-2 lg:h-3 lg:w-3 bg-white rounded-full animate-pulse"></div>
                  <div className="h-1 w-16 lg:w-24 bg-white animate-slide-in-right"></div>
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-arabic mb-8 lg:mb-10 opacity-90 animate-fade-in max-w-4xl mx-auto px-4">
              {currentSlideData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center animate-fade-in px-4">
              <Button 
                size="lg" 
                variant="charity"
                className="font-arabic px-8 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl shadow-strong hover:shadow-medium transition-all duration-300 rounded-xl transform hover:scale-105"
              >
                {t('explorePrograms') || 'استكشف برامجنا'}
              </Button>
              <Button 
                size="lg" 
                variant="gradient" 
                className="font-arabic px-8 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40"
              >
                {t('donate') || 'تبرع الآن'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="lg"
        onClick={prevSlide}
        className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-4 lg:right-6' : 'left-4 lg:left-6'} z-20 text-white hover:bg-white/20 rounded-full w-12 h-12 lg:w-14 lg:h-14 items-center justify-center backdrop-blur-sm`}
      >
        {isRTL ? <ChevronRight className="h-6 w-6 lg:h-7 lg:w-7" /> : <ChevronLeft className="h-6 w-6 lg:h-7 lg:w-7" />}
      </Button>
      
      <Button
        variant="ghost"
        size="lg"
        onClick={nextSlide}
        className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-4 lg:left-6' : 'right-4 lg:right-6'} z-20 text-white hover:bg-white/20 rounded-full w-12 h-12 lg:w-14 lg:h-14 items-center justify-center backdrop-blur-sm`}
      >
        {isRTL ? <ChevronLeft className="h-6 w-6 lg:h-7 lg:w-7" /> : <ChevronRight className="h-6 w-6 lg:h-7 lg:w-7" />}
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2 lg:gap-3 bg-black/30 backdrop-blur-sm rounded-full px-4 py-3 border border-white/20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-500 ease-in-out transform ${
                index === currentSlide
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/40 hover:bg-white/70 hover:scale-110'
              }`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-30"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:block absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white">
          <div className="w-px h-16 bg-white/50 mb-2 animate-pulse"></div>
          <span className="text-sm font-arabic transform rotate-90 whitespace-nowrap">
            {t('scrollDown') || 'اكتشف المزيد'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;