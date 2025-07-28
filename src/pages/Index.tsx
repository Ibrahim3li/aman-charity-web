import Header from '@/components/Header';
import AnimatedHero from '@/components/AnimatedHero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import DonationSection from '@/components/DonationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AnimatedHero />
        <ServicesSection />
        <AboutSection />
        <DonationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
