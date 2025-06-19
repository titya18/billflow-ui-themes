
import { SidebarProvider } from '@/components/ui/sidebar';
import { ReportsSidebar } from '@/components/ReportsSidebar';
import { ReportsContent } from '@/components/ReportsContent';
import { ThemeProvider } from '@/components/ThemeProvider';

const Reports = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="citylink-reports-theme">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <ReportsSidebar />
          <ReportsContent />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Reports;
