
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, FileText, TrendingUp, Activity, Clock } from 'lucide-react';

const stats = [
  {
    title: 'Total Customers',
    value: '2,847',
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
    color: 'blue',
  },
  {
    title: 'Monthly Revenue',
    value: '$84,692',
    change: '+8.2%',
    changeType: 'increase',
    icon: DollarSign,
    color: 'green',
  },
  {
    title: 'Active Invoices',
    value: '1,294',
    change: '-2.4%',
    changeType: 'decrease',
    icon: FileText,
    color: 'purple',
  },
  {
    title: 'Growth Rate',
    value: '18.6%',
    change: '+4.1%',
    changeType: 'increase',
    icon: TrendingUp,
    color: 'orange',
  },
  {
    title: 'Online Users',
    value: '847',
    change: '+15.3%',
    changeType: 'increase',
    icon: Activity,
    color: 'cyan',
  },
  {
    title: 'Response Time',
    value: '1.2s',
    change: '-12.8%',
    changeType: 'decrease',
    icon: Clock,
    color: 'pink',
  },
];

const colorClasses = {
  blue: 'border-l-blue-500 bg-blue-50 dark:bg-blue-950',
  green: 'border-l-green-500 bg-green-50 dark:bg-green-950',
  purple: 'border-l-purple-500 bg-purple-50 dark:bg-purple-950',
  orange: 'border-l-orange-500 bg-orange-50 dark:bg-orange-950',
  cyan: 'border-l-cyan-500 bg-cyan-50 dark:bg-cyan-950',
  pink: 'border-l-pink-500 bg-pink-50 dark:bg-pink-950',
};

const iconColorClasses = {
  blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900',
  green: 'text-green-600 bg-green-100 dark:bg-green-900',
  purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900',
  orange: 'text-orange-600 bg-orange-100 dark:bg-orange-900',
  cyan: 'text-cyan-600 bg-cyan-100 dark:bg-cyan-900',
  pink: 'text-pink-600 bg-pink-100 dark:bg-pink-900',
};

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {stats.map((stat) => (
        <Card 
          key={stat.title} 
          className={`hover:shadow-lg transition-all duration-300 border-l-4 ${colorClasses[stat.color as keyof typeof colorClasses]}`}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className={`text-xs flex items-center gap-1 ${
                  stat.changeType === 'increase' 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  <TrendingUp className={`h-3 w-3 ${
                    stat.changeType === 'decrease' ? 'rotate-180' : ''
                  }`} />
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-lg ${iconColorClasses[stat.color as keyof typeof iconColorClasses]}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
