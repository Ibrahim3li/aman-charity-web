import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface DropdownItem {
  title: string;
  href: string;
  description?: string;
}

interface NavigationDropdownProps {
  title: string;
  items: DropdownItem[];
  className?: string;
}

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({ title, items, className }) => {
  const { t } = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={cn(
              "font-arabic font-medium text-foreground hover:text-primary transition-colors bg-transparent",
              className
            )}
          >
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-80 p-6 bg-popover border border-border rounded-lg shadow-soft">
              <div className="grid gap-1">
                {items.map((item, index) => (
                  <NavigationMenuLink
                    key={index}
                    href={item.href}
                    className={cn(
                      "block p-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                      "font-arabic text-sm text-foreground"
                    )}
                  >
                    <div className="font-medium">{item.title}</div>
                    {item.description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {item.description}
                      </div>
                    )}
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationDropdown;