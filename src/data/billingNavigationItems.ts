
import { 
  Search, 
  User, 
  CreditCard, 
  Calendar, 
  Settings,
  FileText,
  Clock,
  Users,
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

export interface NavigationItem {
  title: string;
  icon: any;
}

export interface NavigationSection {
  title: string;
  icon: any;
  items: NavigationItem[];
}

export const navigationItems: NavigationSection[] = [
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
