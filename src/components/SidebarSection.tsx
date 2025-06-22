
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavigationSection } from '@/data/billingNavigationItems';

interface SidebarSectionProps {
  section: NavigationSection;
  isExpanded: boolean;
  onToggle: () => void;
}

export function SidebarSection({ section, isExpanded, onToggle }: SidebarSectionProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="w-full justify-between hover:bg-sidebar-accent p-0 h-auto font-semibold text-blue-400 uppercase tracking-wider"
        >
          <div className="flex items-center gap-2">
            <section.icon className="h-4 w-4" />
            <span>{section.title}</span>
          </div>
          {isExpanded ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </Button>
      </SidebarGroupLabel>
      
      {isExpanded && (
        <SidebarGroupContent>
          <SidebarMenu>
            {section.items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild 
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors pl-6"
                >
                  <a href="#" className="flex items-center gap-3">
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      )}
    </SidebarGroup>
  );
}
