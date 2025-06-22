
import { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
} from '@/components/ui/sidebar';
import { SidebarBrandHeader } from '@/components/SidebarBrandHeader';
import { SidebarSection } from '@/components/SidebarSection';
import { navigationItems } from '@/data/billingNavigationItems';

export function BillingAdminSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Search']);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(section => section !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarBrandHeader />
      
      <SidebarContent className="px-2">
        {navigationItems.map((section) => (
          <SidebarSection
            key={section.title}
            section={section}
            isExpanded={expandedSections.includes(section.title)}
            onToggle={() => toggleSection(section.title)}
          />
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
