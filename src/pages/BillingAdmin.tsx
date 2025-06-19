
import { SidebarProvider } from '@/components/ui/sidebar';
import { BillingAdminSidebar } from '@/components/BillingAdminSidebar';
import { BillingAdminContent } from '@/components/BillingAdminContent';
import { ThemeProvider } from '@/components/ThemeProvider';

const BillingAdmin = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="citylink-billing-theme">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <BillingAdminSidebar />
          <BillingAdminContent />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default BillingAdmin;
