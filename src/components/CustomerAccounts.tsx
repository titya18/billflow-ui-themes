
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AccountActionsModal } from '@/components/AccountActionsModal';

const accounts = [
  {
    product: 'Hosting',
    account: 'cvs.com.kh',
    status: 'Active',
    tariff: 'Webhosting',
    radiusLog: 'radius-log',
    actions: ['Lock', 'Suspend', 'Password'],
  },
];

export function CustomerAccounts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-medium">View Mode:</h3>
          <div className="flex gap-2 text-sm">
            <span className="text-muted-foreground">Inactive |</span>
            <span className="text-blue-600 font-medium">Active |</span>
            <span className="text-muted-foreground">Locked |</span>
            <span className="text-orange-600">Suspend |</span>
            <span className="text-red-600">Closed |</span>
            <span className="text-muted-foreground">All Status</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show</span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="text-sm text-muted-foreground">entries</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Search:</span>
          <input 
            type="text" 
            className="border rounded px-2 py-1 text-sm w-32"
            placeholder="Filter..."
          />
        </div>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Product</TableHead>
              <TableHead className="font-semibold">Account</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Tariff</TableHead>
              <TableHead className="font-semibold">Radius Log</TableHead>
              <TableHead className="font-semibold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.map((account, index) => (
              <TableRow key={index} className="hover:bg-muted/30">
                <TableCell className="font-medium">{account.product}</TableCell>
                <TableCell>
                  <Button variant="link" className="p-0 h-auto text-blue-600">
                    {account.account}
                  </Button>
                </TableCell>
                <TableCell>
                  <Badge className="status-badge status-active">
                    {account.status}
                  </Badge>
                </TableCell>
                <TableCell>{account.tariff}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {account.radiusLog}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Lock
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
                    >
                      Suspend
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
                    >
                      Password
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Showing 1 to 2 of 2 entries
        </span>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" disabled>
            1
          </Button>
        </div>
      </div>

      <AccountActionsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
