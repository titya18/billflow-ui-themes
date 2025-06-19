
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const customers = [
  {
    id: 1,
    custId: 13,
    name: 'Cambodia Vietnam Securities PLC',
    accId: 34,
    accName: 'cvs.com.kh',
    status: 'Active',
    service: 'Webhosting',
    phone: '097923678/088889364/097666060',
  },
  {
    id: 2,
    custId: 311,
    name: 'Sok SoKha Co. Ltd ()',
    accId: 489,
    accName: 'soksokha.com',
    status: 'Closed',
    service: 'Webhosting',
    phone: '',
  },
  {
    id: 3,
    custId: 1629,
    name: 'HEINEKEN (CAMBODIA) CO., LTD.',
    accId: 2029,
    accName: 'cbl.com.kh',
    status: 'Active',
    service: 'Webhosting',
    phone: '023722683',
  },
  {
    id: 4,
    custId: 1785,
    name: 'sfsfsdfdsf',
    accId: 2162,
    accName: 'scsffsag',
    status: 'Active',
    service: 'WebhostingPremium50MB',
    phone: 'sfsfsdfdsf',
  },
  {
    id: 5,
    custId: 1753,
    name: 'dfdsff',
    accId: 2147,
    accName: 'sdffsdf',
    status: 'Inactive',
    service: 'StandardWebhosting',
    phone: 'dfsfddsf',
  },
];

export function CustomerSearchResults() {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Search Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
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
                <TableHead className="font-semibold">No.</TableHead>
                <TableHead className="font-semibold">Cust. ID</TableHead>
                <TableHead className="font-semibold">Cust. Names</TableHead>
                <TableHead className="font-semibold">Acc. ID</TableHead>
                <TableHead className="font-semibold">Acc. Name</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Service</TableHead>
                <TableHead className="font-semibold">Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer, index) => (
                <TableRow key={customer.id} className="hover:bg-muted/30 cursor-pointer">
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      {customer.custId}
                    </Button>
                  </TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      {customer.accId}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      {customer.accName}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className={`status-badge ${
                        customer.status === 'Active' ? 'status-active' :
                        customer.status === 'Closed' ? 'status-closed' :
                        customer.status === 'Inactive' ? 'status-inactive' :
                        'status-suspended'
                      }`}
                    >
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{customer.service}</TableCell>
                  <TableCell className="text-sm">{customer.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-muted-foreground">
            Showing 1 to 5 of 5 entries
          </span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>
              1
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
