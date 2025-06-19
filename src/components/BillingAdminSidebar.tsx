
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
  Activity
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    title: 'Search',
    icon: Search,
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
    items: [
      { title: 'DMC Report', icon: FileBarChart },
      { title: 'Profit Report', icon: TrendingUp },
      { title: 'Radius Reports', icon: Target },
    ]
  },
  {
    title: 'Services Reports',
    icon: Settings,
    items: [
      { title: 'Service With Expiry Date', icon: Clock },
      { title: 'Lock Account Report', icon: Shield },
      { title: 'Close Account Reports', icon: Archive },
      { title: 'Close Account Schedule', icon: Calendar },
      { title: 'Account Suspends', icon: AlertCircle },
      { title: 'Tariff Reports', icon: Receipt },
    ]
  },
  {
    title: 'Customer Service Reports',
    icon: Users,
    items: [
      { title: 'Customer With Deposit', icon: Banknote },
      { title: 'Customer No Deposit', icon: User },
      { title: 'Customer Rating', icon: Activity },
      { title: 'Customer Base', icon: Users },
      { title: 'Customer Testing', icon: Settings },
      { title: 'Marketing Reports', icon: TrendingUp },
    ]
  },
  {
    title: 'Accounting',
    icon: Calculator,
    items: [
      { title: 'Export Invoices', icon: Download },
      { title: 'Export Deposit', icon: Download },
      { title: 'Export Configuration', icon: Settings },
      { title: 'Change Plan Reports', icon: FileText },
      { title: 'Proforma Invoice', icon: Receipt },
      { title: 'Roll Back Receipt Report', icon: Archive },
    ]
  },
  {
    title: 'Finance Reports',
    icon: DollarSign,
    items: [
      { title: 'Invoice Reports', icon: FileText },
      { title: 'Unpaid Invoice Report', icon: AlertCircle },
      { title: 'Open Invoice Report', icon: FileText },
      { title: 'Close Invoice Report', icon: Archive },
      { title: 'Deposit Report', icon: Banknote },
      { title: 'Open Deposit Report', icon: FileText },
      { title: 'Close Deposit Report', icon: Archive },
      { title: 'Void Deposit Report', icon: AlertCircle },
      { title: 'Unpaid Deposit Report', icon: AlertCircle },
      { title: 'Cash Refund Report', icon: Download },
      { title: 'Credit Notes Reports', icon: FileText },
      { title: 'Write off bad debt', icon: Archive },
    ]
  },
  {
    title: 'Customer Reports',
    icon: Users,
    items: [
      { title: 'Customer Prepayment', icon: CreditCard },
      { title: 'New Customer Reports', icon: UserCheck },
      { title: 'Customer Reports', icon: Users },
      { title: 'Seller to Customer Reports', icon: TrendingUp },
      { title: 'Customer Advance Pay', icon: Banknote },
    ]
  }
];

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
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CL</span>
          </div>
          <span className="font-semibold text-sidebar-foreground">CityLink Admin</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2">
        {navigationItems.map((section) => {
          const isExpanded = expandedSections.includes(section.title);
          
          return (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleSection(section.title)}
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
        })}
      </SidebarContent>
    </Sidebar>
  );
}
