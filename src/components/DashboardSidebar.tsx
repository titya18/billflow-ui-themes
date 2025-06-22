import { useState } from 'react';
import {
  Search,
  Users,
  FileText,
  BarChart3,
  Settings,
  DollarSign,
  CreditCard,
  TrendingUp,
  User,
  UserPlus,
  Calendar,
  Shield,
  Clock,
  Download,
  FileCheck,
  AlertCircle,
  CheckCircle,
  XCircle,
  RefreshCw,
  Eye,
  ChevronDown,
  ChevronRight,
  Maximize,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: 'Search',
    icon: Search,
    items: [
      { title: 'Search Customers', icon: Users },
      { title: 'Search Invoice', icon: FileText },
      { title: 'Search Contact', icon: User },
      { title: 'Search Online Accounts', icon: Settings },
    ],
  },
  {
    title: 'Customer Service',
    icon: Users,
    items: [
      { title: 'New Customer', icon: UserPlus },
      { title: 'Agent Lists', icon: Users },
      { title: 'Current Online Account', icon: Eye },
      { title: 'End Testing Day', icon: Calendar },
    ],
  },
  {
    title: 'User Transactions',
    icon: CreditCard,
    items: [
      { title: 'Transactions', icon: CreditCard },
      { title: 'Transaction Today', icon: Clock },
      { title: 'Transaction Yesterday', icon: Calendar },
      { title: 'Transaction Monthly', icon: BarChart3 },
    ],
  },
  {
    title: 'General Reports',
    icon: BarChart3,
    items: [
      { title: 'DMC Report', icon: FileText },
      { title: 'Profit Report', icon: TrendingUp },
      { title: 'Radius Reports', icon: BarChart3 },
    ],
  },
  {
    title: 'Services Reports',
    icon: Settings,
    items: [
      { title: 'Service With Expiry Date', icon: Calendar },
      { title: 'Lock Account Report', icon: Shield },
      { title: 'Close Account Reports', icon: XCircle },
      { title: 'Close Account Schedule', icon: Calendar },
      { title: 'Account Suspends', icon: AlertCircle },
      { title: 'Tariff Reports', icon: FileText },
    ],
  },
  {
    title: 'Customer Service Reports',
    icon: User,
    items: [
      { title: 'Customer With Deposit', icon: DollarSign },
      { title: 'Customer No Deposit', icon: XCircle },
      { title: 'Customer Rating', icon: BarChart3 },
      { title: 'Customer Base', icon: Users },
      { title: 'Customer Testing', icon: Settings },
      { title: 'Marketing Reports', icon: TrendingUp },
    ],
  },
  {
    title: 'Accounting',
    icon: DollarSign,
    items: [
      { title: 'Export Invoices', icon: Download },
      { title: 'Export Deposit', icon: Download },
      { title: 'Export Configuration', icon: Download },
      { title: 'Change Plan Reports', icon: RefreshCw },
      { title: 'Proforma Invoice', icon: FileText },
      { title: 'Roll Back Receipt Report', icon: RefreshCw },
    ],
  },
  {
    title: 'Customer Reports',
    icon: Users,
    items: [
      { title: 'Customer Prepayment', icon: DollarSign },
      { title: 'New Customer Reports', icon: UserPlus },
      { title: 'Customer Reports', icon: Users },
      { title: 'Seller to Customer Reports', icon: User },
      { title: 'Customer Advance Pay', icon: DollarSign },
    ],
  },
  {
    title: 'Finance Reports',
    icon: DollarSign,
    items: [
      { title: 'Invoice Reports', icon: FileText },
      { title: 'Unpaid Invoice Report', icon: AlertCircle },
      { title: 'Open Invoice Report', icon: Eye },
      { title: 'Close Invoice Report', icon: CheckCircle },
      { title: 'Deposit Report', icon: DollarSign },
      { title: 'Open Deposit Report', icon: Eye },
      { title: 'Close Deposit Report', icon: CheckCircle },
      { title: 'Void Deposit Report', icon: XCircle },
      { title: 'Unpaid Deposit Report', icon: AlertCircle },
      { title: 'Cash Refund Report', icon: RefreshCw },
      { title: 'Credit Notes Reports', icon: FileCheck },
      { title: 'Write off bad debt', icon: XCircle },
    ],
  },
];

export function DashboardSidebar() {
  const [openItems, setOpenItems] = useState<string[]>(['Search']);

  const toggleItem = (title: string) => {
    setOpenItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <Sidebar className="border-r border-sidebar-border bg-slate-50 dark:bg-slate-900 w-80" style={{ width: '320px' }}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CL</span>
            </div>
            <div>
              <h2 className="font-bold text-lg text-foreground">CityLink</h2>
              <p className="text-xs text-muted-foreground">Admin Dashboard</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleFullscreen}
            className="h-8 w-8 p-0 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-slate-50 dark:bg-slate-900">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <Collapsible key={item.title} open={openItems.includes(item.title)} onOpenChange={() => toggleItem(item.title)}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full hover:bg-slate-200 dark:hover:bg-slate-700 text-foreground">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {openItems.includes(item.title) ? (
                          <ChevronDown className="h-4 w-4 ml-auto" />
                        ) : (
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href="#" className="flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 text-foreground">
                                <subItem.icon className="h-3 w-3" />
                                <span className="text-sm">{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
