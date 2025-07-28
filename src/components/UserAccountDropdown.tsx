import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { User, Heart, FileText, Settings } from 'lucide-react';

const UserAccountDropdown: React.FC = () => {
  const { t } = useTranslation();

  const handleMenuClick = (action: string) => {
    if (action === 'createAccount') {
      window.location.href = '/account';
    }
    // Add other navigation logic as needed
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="font-arabic">
          {t('login')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-80 bg-popover border border-border shadow-soft"
      >
        <div className="p-2">
          <DropdownMenuItem 
            onClick={() => handleMenuClick('createAccount')}
            className="font-arabic p-3 rounded-md hover:bg-accent cursor-pointer"
          >
            <User className="ml-2 h-4 w-4" />
            {t('createAccount')}
          </DropdownMenuItem>
          
          <DropdownMenuSeparator className="my-2" />
          
          <DropdownMenuItem 
            onClick={() => handleMenuClick('trackDonations')}
            className="font-arabic p-3 rounded-md hover:bg-accent cursor-pointer"
          >
            <Heart className="ml-2 h-4 w-4" />
            {t('trackDonations')}
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => handleMenuClick('impactReports')}
            className="font-arabic p-3 rounded-md hover:bg-accent cursor-pointer"
          >
            <FileText className="ml-2 h-4 w-4" />
            {t('impactReports')}
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => handleMenuClick('manageSponsorSubscription')}
            className="font-arabic p-3 rounded-md hover:bg-accent cursor-pointer"
          >
            <Settings className="ml-2 h-4 w-4" />
            {t('manageSponsorSubscription')}
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountDropdown;