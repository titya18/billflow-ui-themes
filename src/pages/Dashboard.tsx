
import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DashboardContent } from '@/components/DashboardContent';
import { ThemeProvider } from '@/components/ThemeProvider';

const Dashboard = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="citylink-dashboard-theme">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <DashboardSidebar />
          <DashboardContent />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Dashboard;
