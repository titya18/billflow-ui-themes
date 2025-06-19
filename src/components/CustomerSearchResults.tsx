
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Eye, Edit, Trash2, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mockCustomers = [
  {
    id: 1,
    custId: 13,
    custName: 'Cambodia Vietnam Securities PLC',
    accId: 34,
    accName: 'cvs.com.kh',
    status: 'Active',
    service: 'Webhosting',
    phone: '097534575940/085686834/067665050'
  },
  {
    id: 2,
    custId: 311,
    custName: 'Sok Sokha Co, Ltd (1)',
    accId: 4891,
    accName: 'soksokha.com',
    status: 'Closed',
    service: 'Webhosting',
    phone: ''
  },
  {
    id: 3,
    custId: 8026,
    custName: 'HENIKEN (CAMBODIA) CO., LTD.',
    accId: 2022,
    accName: 'cbrl.com.kh',
    status: 'Active',
    service: 'Webhosting',
    phone: '023720853'
  },
  {
    id: 4,
    custId: 17635,
    custName: 'stdhsdfsf',
    accId: 2162,
    accName: 'scolfag',
    status: 'Active',
    service: 'WebhostingPremium80MB',
    phone: 'stdhsdfsf'
  },
  {
    id: 5,
    custId: 17534,
    custName: 'dfsdfsf',
    accId: 2147,
    accName: 'sdfhsdf',
    status: 'Inactive',
    service: 'StandardWebhosting',
    phone: 'dfsdfsf'
  },
  {
    id: 6,
    custId: 181,
    custName: 'Citylink Swim Recap Testing',
    accId: 376,
    accName: 'streetknight@citylink',
    status: 'Active',
    service: '',
    phone: ''
  },
  {
    id: 7,
    custId: 214,
    custName: 'EXCO CONCRETE CO LTD',
    accId: 351,
    accName: 'exco_regular',
    status: 'Closed',
    service: 'Corporate Standard 1Mbps',
    phone: '017574765'
  },
  {
    id: 8,
    custId: 321,
    custName: 'AJE Japan',
    accId: 508,
    accName: 'ajer_regular',
    status: 'Closed',
    service: 'Corporate Standard 2Mbps',
    phone: '016862562'
  }
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'closed':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    case 'inactive':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    default:
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
  }
};

export function CustomerSearchResults() {
  const [showEntries, setShowEntries] = useState(10);

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Search Results</span>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Show</span>
            <select 
              value={showEntries} 
              onChange={(e) => setShowEntries(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 bg-background"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-50 dark:bg-blue-950">
                <TableHead className="w-12">No.</TableHead>
                <TableHead>Cust. ID</TableHead>
                <TableHead>Cust. Names</TableHead>
                <TableHead>Acc. ID</TableHead>
                <TableHead>Acc. Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead className="w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCustomers.slice(0, showEntries).map((customer, index) => (
                <TableRow key={customer.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="text-blue-600 font-medium">{customer.custId}</TableCell>
                  <TableCell className="text-blue-600 hover:underline cursor-pointer">
                    {customer.custName}
                  </TableCell>
                  <TableCell className="text-blue-600">{customer.accId}</TableCell>
                  <TableCell className="text-blue-600 hover:underline cursor-pointer">
                    {customer.accName}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(customer.status)}>
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{customer.service}</TableCell>
                  <TableCell className="text-sm">{customer.phone}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 border shadow-lg">
                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">
            Showing 1 to {Math.min(showEntries, mockCustomers.length)} of {mockCustomers.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-600 text-white">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
