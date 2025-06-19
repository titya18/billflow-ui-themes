
import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { BillingAdminSidebar } from '@/components/BillingAdminSidebar';
import { BillingAdminContent } from '@/components/BillingAdminContent';
import { ThemeProvider } from '@/components/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="billing-admin-theme">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <BillingAdminSidebar />
          <BillingAdminContent />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;
