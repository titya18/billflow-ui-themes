
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ModernSearchForm } from '@/components/ModernSearchForm';
import { DashboardStats } from '@/components/DashboardStats';

export function DashboardContent() {
  return (
    <main className="w-full overflow-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center gap-4 px-6">
          <SidebarTrigger className="h-8 w-8" />
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h1 className="font-bold text-xl text-blue-600">CityLink Admin</h1>
              <p className="text-sm text-muted-foreground">Dashboard Management</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                DB USERS
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-6 space-y-8">
        <DashboardStats />
        <ModernSearchForm />
      </div>
    </main>
  );
}
