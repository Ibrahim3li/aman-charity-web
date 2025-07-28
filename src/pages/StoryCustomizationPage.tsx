import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCustomization from '@/components/StoryCustomization';

const StoryCustomizationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-background to-muted py-12">
        <StoryCustomization />
      </main>
      <Footer />
    </div>
  );
};

export default StoryCustomizationPage;