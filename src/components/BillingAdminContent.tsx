
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { CustomerSearch } from '@/components/CustomerSearch';
import { CustomerDetails } from '@/components/CustomerDetails';

export function BillingAdminContent() {
  return (
    <main className="flex-1 overflow-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center gap-4 px-4">
          <SidebarTrigger className="h-8 w-8" />
          <div className="flex flex-1 items-center justify-between">
            <h1 className="font-semibold text-lg">Billing Administration</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">DB USERS</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-6 space-y-6">
        <CustomerSearch />
        <CustomerDetails />
      </div>
    </main>
  );
}
