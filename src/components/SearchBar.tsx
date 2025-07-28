import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // TODO: Implement search functionality
    }
  };

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-accent"
      >
        <Search className="h-4 w-4" />
      </Button>

      {/* Search Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl mx-4">
            <div className="bg-card border border-border rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold font-arabic">البحث في الموقع</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="ابحث عن البرامج، المبادرات، التقارير..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10 font-arabic"
                    autoFocus
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground font-arabic">
                    اضغط Enter للبحث أو Esc للإغلاق
                  </div>
                  <Button type="submit" className="font-arabic">
                    بحث
                  </Button>
                </div>
              </form>

              {/* Quick Search Suggestions */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-muted-foreground font-arabic mb-3">البحث السريع</h4>
                <div className="flex flex-wrap gap-2">
                  {['راعي الأمان', 'اصنع قصة', 'التطوع', 'التبرع', 'التقارير', 'من نحن'].map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchTerm(suggestion);
                        handleSearch({ preventDefault: () => {} } as React.FormEvent);
                      }}
                      className="font-arabic text-xs"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;