
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Search, Bell, User, Globe, Menu as MenuIcon } from 'lucide-react';

export function ReportsContent() {
  return (
    <main className="flex-1 overflow-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-blue-600 text-white">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="h-8 w-8 text-white hover:bg-blue-700" />
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700 gap-2">
                <Search className="h-4 w-4" />
                Search Customer
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700 gap-2">
                <MenuIcon className="h-4 w-4" />
                Billing Menu
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700 gap-2">
                <User className="h-4 w-4" />
                CityLink Admin
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                Sale Management
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700 gap-2">
                <Globe className="h-4 w-4" />
                CityLink Website
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">DB USERS</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              CityLink Reports Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Select a report category from the sidebar to view available reports and analytics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Customer Reports</h3>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  Access customer analytics, demographics, and activity reports.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Financial Reports</h3>
                <p className="text-sm text-green-700 dark:text-green-200">
                  View invoices, deposits, payments, and financial summaries.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Service Reports</h3>
                <p className="text-sm text-purple-700 dark:text-purple-200">
                  Monitor service usage, expiry dates, and account status.
                </p>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Transaction Reports</h3>
                <p className="text-sm text-orange-700 dark:text-orange-200">
                  Track daily, monthly, and yearly transaction data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
