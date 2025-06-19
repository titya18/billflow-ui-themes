
import { 
  Search, 
  User, 
  CreditCard, 
  Calendar, 
  Settings,
  FileText,
  Clock,
  Users,
  ChevronDown,
  ChevronRight,
  DollarSign,
  BarChart3,
  Shield,
  Download,
  TrendingUp,
  UserCheck,
  AlertCircle,
  Archive,
  Receipt,
  Banknote,
  Calculator,
  FileBarChart,
  Target,
  Activity,
  Lock,
  RefreshCw,
  UserMinus,
  Star,
  Database,
  Zap,
  Eye,
  FileX,
  RefreshCcw,
  CreditCard as Card
} from 'lucide-react';
import { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const reportCategories = [
  {
    title: 'Search',
    icon: Search,
    color: 'text-cyan-600',
    items: [
      { title: 'Search Customers', icon: Users },
      { title: 'Search Invoice', icon: FileText },
      { title: 'Search Contact', icon: User },
      { title: 'Search Online Accounts', icon: Search },
    ]
  },
  {
    title: 'Customer Service',
    icon: User,
    color: 'text-blue-600',
    items: [
      { title: 'New Customer', icon: UserCheck },
      { title: 'Agent Lists', icon: Users },
      { title: 'Current Online Account', icon: User },
      { title: 'End Testing Day', icon: Clock },
    ]
  },
  {
    title: 'User Transactions',
    icon: CreditCard,
    color: 'text-indigo-600',
    items: [
      { title: 'Transactions', icon: CreditCard },
      { title: 'Transaction Today', icon: Calendar },
      { title: 'Transaction Yesterday', icon: Calendar },
      { title: 'Transaction Monthly', icon: Calendar },
    ]
  },
  {
    title: 'General Reports',
    icon: BarChart3,
    color: 'text-slate-600',
    items: [
      { title: 'DMC Report', icon: FileBarChart },
      { title: 'Profit Report', icon: TrendingUp },
      { title: 'Radius Reports', icon: Target },
    ]
  },
  {
    title: 'Services Reports',
    icon: Settings,
    color: 'text-orange-600',
    items: [
      { title: 'Service With Expiry Date', icon: Clock },
      { title: 'Lock Account Report', icon: Lock },
      { title: 'Close Account Reports', icon: Archive },
      { title: 'Close Account Schedule', icon: Calendar },
      { title: 'Account Suspends', icon: AlertCircle },
      { title: 'Tariff Reports', icon: Receipt },
    ]
  },
  {
    title: 'Customer Service Reports',
    icon: Users,
    color: 'text-yellow-600',
    items: [
      { title: 'Customer With Deposit', icon: Banknote },
      { title: 'Customer No Deposit', icon: UserMinus },
      { title: 'Customer Rating', icon: Star },
      { title: 'Customer Base', icon: Database },
      { title: 'Customer Testing', icon: Zap },
      { title: 'Marketing Reports', icon: TrendingUp },
    ]
  },
  {
    title: 'Accounting',
    icon: Calculator,
    color: 'text-cyan-600',
    items: [
      { title: 'Export Invoices', icon: Download },
      { title: 'Export Deposit', icon: Download },
      { title: 'Export Configuration', icon: Settings },
      { title: 'Change Plan Reports', icon: RefreshCw },
      { title: 'Proforma Invoice', icon: Receipt },
      { title: 'Roll Back Receipt Report', icon: RefreshCcw },
    ]
  },
  {
    title: 'Customer Reports',
    icon: Users,
    color: 'text-blue-600',
    items: [
      { title: 'Customer Prepayment', icon: Card },
      { title: 'New Customer Reports', icon: UserCheck },
      { title: 'Customer Reports', icon: Users },
      { title: 'Seller to Customer Reports', icon: TrendingUp },
      { title: 'Customer Advance Pay', icon: Banknote },
    ]
  },
  {
    title: 'Finance Reports',
    icon: DollarSign,
    color: 'text-blue-600',
    items: [
      { title: 'Invoice Reports', icon: FileText },
      { title: 'Unpaid Invoice Report', icon: AlertCircle },
      { title: 'Open Invoice Report', icon: Eye },
      { title: 'Close Invoice Report', icon: Archive },
      { title: 'Deposit Report', icon: Banknote },
      { title: 'Open Deposit Report', icon: Eye },
      { title: 'Close Deposit Report', icon: Archive },
      { title: 'Void Deposit Report', icon: FileX },
      { title: 'Unpaid Deposit Report', icon: AlertCircle },
      { title: 'Cash Refund Report', icon: Download },
      { title: 'Credit Notes Reports', icon: FileText },
      { title: 'Write off bad debt', icon: Archive },
    ]
  }
];

export function ReportsSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Search']);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(section => section !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar className="border-r border-sidebar-border bg-slate-50 dark:bg-slate-900">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CL</span>
          </div>
          <span className="font-semibold text-sidebar-foreground">CityLink Reports</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2">
        <div className="grid grid-cols-2 gap-4 p-4">
          {reportCategories.map((category) => {
            const isExpanded = expandedSections.includes(category.title);
            
            return (
              <div key={category.title} className="bg-white dark:bg-slate-800 rounded-lg border shadow-sm">
                <SidebarGroup>
                  <SidebarGroupLabel className="p-3 border-b">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSection(category.title)}
                      className="w-full justify-between hover:bg-slate-100 dark:hover:bg-slate-700 p-0 h-auto"
                    >
                      <div className={`flex items-center gap-2 ${category.color}`}>
                        <category.icon className="h-4 w-4" />
                        <span className="font-medium text-sm">{category.title}</span>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="h-3 w-3 text-gray-400" />
                      ) : (
                        <ChevronRight className="h-3 w-3 text-gray-400" />
                      )}
                    </Button>
                  </SidebarGroupLabel>
                  
                  {isExpanded && (
                    <SidebarGroupContent className="p-2">
                      <SidebarMenu>
                        {category.items.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton 
                              asChild 
                              className="hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-xs p-2"
                            >
                              <a href="#" className="flex items-center gap-2">
                                <item.icon className="h-3 w-3 text-gray-500" />
                                <span className="text-gray-700 dark:text-gray-300">{item.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  )}
                </SidebarGroup>
              </div>
            );
          })}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
