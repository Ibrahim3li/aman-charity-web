import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { UserPlus, RefreshCw } from 'lucide-react';

const MembershipDropdown: React.FC = () => {
  const { t } = useTranslation();

  const handleMembershipAction = (action: string) => {
    console.log(`Membership action: ${action}`);
    // TODO: Implement navigation logic for membership forms
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="charity" 
          size="sm"
          className="font-arabic px-3 xl:px-4 py-2 text-white shrink-0 text-sm"
        >
          التسجيل كعضو
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-popover border border-border shadow-soft"
      >
        <div className="p-2">
          <DropdownMenuItem 
            onClick={() => handleMembershipAction('newMember')}
            className="font-arabic p-3 rounded-md hover:bg-accent cursor-pointer"
          >
            <UserPlus className="ml-2 h-4 w-4" />
            عضو جديد
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => handleMembershipAction('renewMembership')}
            className="font-arabic p-3 rounded-md hover:bg-accent cursor-pointer"
          >
            <RefreshCw className="ml-2 h-4 w-4" />
            تجديد عضوية
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MembershipDropdown;