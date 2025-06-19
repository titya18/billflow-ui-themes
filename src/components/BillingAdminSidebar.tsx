
import { 
  Search, 
  User, 
  CreditCard, 
  Calendar, 
  Settings,
  Menu,
  FileText,
  Clock,
  Users
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
  SidebarHeader,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const searchItems = [
  { title: 'Search Customers', url: '#', icon: Search },
  { title: 'Search Invoice', url: '#', icon: FileText },
  { title: 'Search Contact', url: '#', icon: Users },
  { title: 'Search Online Accounts', url: '#', icon: Search },
];

const customerItems = [
  { title: 'New Customer', url: '#', icon: User },
  { title: 'Agent Lists', url: '#', icon: Users },
  { title: 'Current Online Account', url: '#', icon: User },
  { title: 'End Testing Day', url: '#', icon: Clock },
];

const transactionItems = [
  { title: 'Transactions', url: '#', icon: CreditCard },
  { title: 'Transaction Today', url: '#', icon: Calendar },
  { title: 'Transaction Yesterday', url: '#', icon: Calendar },
  { title: 'Transaction Monthly', url: '#', icon: Calendar },
];

const reportItems = [
  { title: 'DMC Report', url: '#', icon: FileText },
  { title: 'Profit Report', url: '#', icon: FileText },
  { title: 'Radius Reports', url: '#', icon: FileText },
];

const servicesItems = [
  { title: 'Service With Expiry Date', url: '#', icon: Clock },
  { title: 'Lock Account Report', url: '#', icon: Settings },
  { title: 'Close Account Reports', url: '#', icon: FileText },
  { title: 'Close Account Schedule', url: '#', icon: Calendar },
];

const financeItems = [
  { title: 'Invoice Reports', url: '#', icon: FileText },
  { title: 'Unpaid Invoice Report', url: '#', icon: CreditCard },
  { title: 'Open Invoice Report', url: '#', icon: FileText },
  { title: 'Close Invoice Report', url: '#', icon: FileText },
  { title: 'Deposit Report', url: '#', icon: CreditCard },
];

export function BillingAdminSidebar() {
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
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Search
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {searchItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Customer Service
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            User Transactions
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {transactionItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            General Reports
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {reportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Services Reports
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {servicesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Finance Reports
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {financeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
