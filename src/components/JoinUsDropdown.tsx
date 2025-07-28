import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Users, Shield, UserPlus } from 'lucide-react';

const JoinUsDropdown: React.FC = () => {
  const { t } = useTranslation();

  const handleJoinAction = (action: string) => {
    console.log(`Join action: ${action}`);
    // TODO: Implement navigation logic
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="font-arabic border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          {t('joinUs')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-72 bg-popover border border-border shadow-soft"
      >
        <div className="p-2">
          <DropdownMenuItem 
            onClick={() => handleJoinAction('volunteer')}
            className="font-arabic p-3 rounded-md hover:bg-accent cursor-pointer"
          >
            <Users className="ml-2 h-4 w-4" />
            {t('volunteer')}
          </DropdownMenuItem>
          
          
          <DropdownMenuItem 
            onClick={() => handleJoinAction('practitioner')}
            className="font-arabic p-3 rounded-md hover:bg-accent cursor-pointer"
          >
            <Shield className="ml-2 h-4 w-4" />
            التسجيل كممارس في مجال الحماية من الإيذاء
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default JoinUsDropdown;