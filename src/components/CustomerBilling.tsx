
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ModernDataTable, createSortableHeader } from '@/components/ModernDataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Eye, Download, Mail } from 'lucide-react';

interface Invoice {
  id: string;
  invoiceNo: string;
  date: string;
  dueDate: string;
  description: string;
  quantity: string;
  unitPrice: number;
  amount: number;
  status: 'paid' | 'unpaid' | 'overdue' | 'partial';
  vatAmount: number;
  grandTotal: number;
}

const invoiceData: Invoice[] = [
  {
    id: '1',
    invoiceNo: 'PP000983',
    date: '27/Aug/2022',
    dueDate: '03/Sep/2022',
    description: 'Customer Deposit',
    quantity: '1-other',
    unitPrice: 20.00,
    amount: 20.00,
    status: 'paid',
    vatAmount: 2.00,
    grandTotal: 22.00,
  },
  {
    id: '2',
    invoiceNo: 'PP000984',
    date: '28/Aug/2022',
    dueDate: '04/Sep/2022',
    description: 'Monthly Service Fee',
    quantity: '1-month',
    unitPrice: 50.00,
    amount: 50.00,
    status: 'unpaid',
    vatAmount: 5.00,
    grandTotal: 55.00,
  },
  {
    id: '3',
    invoiceNo: 'PP000985',
    date: '29/Aug/2022',
    dueDate: '05/Sep/2022',
    description: 'Setup Fee',
    quantity: '1-time',
    unitPrice: 100.00,
    amount: 100.00,
    status: 'overdue',
    vatAmount: 10.00,
    grandTotal: 110.00,
  },
];

const getStatusBadge = (status: string) => {
  const variants = {
    paid: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    unpaid: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    overdue: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    partial: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  };
  
  return (
    <Badge className={variants[status as keyof typeof variants]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

const columns: ColumnDef<Invoice>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
        className="rounded border-gray-300"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(!!e.target.checked)}
        className="rounded border-gray-300"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoiceNo",
    header: createSortableHeader("Invoice No"),
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("invoiceNo")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: createSortableHeader("Date"),
  },
  {
    accessorKey: "dueDate",
    header: createSortableHeader("Due Date"),
  },
  {
    accessorKey: "description",
    header: createSortableHeader("Description"),
    cell: ({ row }) => (
      <div className="max-w-[200px] truncate">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "quantity",
    header: createSortableHeader("Quantity"),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "unitPrice",
    header: createSortableHeader("Unit Price"),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("unitPrice"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "amount",
    header: createSortableHeader("Amount"),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "vatAmount",
    header: createSortableHeader("VAT (10%)"),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("vatAmount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="text-right">{formatted}</div>
    },
  },
  {
    accessorKey: "grandTotal",
    header: createSortableHeader("Grand Total"),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("grandTotal"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="text-right font-bold">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: createSortableHeader("Status"),
    cell: ({ row }) => getStatusBadge(row.getValue("status")),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
]

export function CustomerBilling() {
  const totalBalance = invoiceData.reduce((sum, invoice) => sum + invoice.grandTotal, 0);
  const unpaidBalance = invoiceData
    .filter(invoice => invoice.status !== 'paid')
    .reduce((sum, invoice) => sum + invoice.grandTotal, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100">Total Invoices</h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{invoiceData.length}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-green-900 dark:text-green-100">Total Balance</h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            ${totalBalance.toFixed(2)}
          </p>
        </div>
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-red-900 dark:text-red-100">Unpaid Balance</h3>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">
            ${unpaidBalance.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white dark:bg-gray-900 rounded-lg border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Invoice History</h3>
          <p className="text-sm text-muted-foreground">
            Complete list of invoices for this customer
          </p>
        </div>
        <div className="p-6">
          <ModernDataTable
            columns={columns}
            data={invoiceData}
            searchPlaceholder="Search invoices..."
            exportFileName="customer-invoices"
          />
        </div>
      </div>
    </div>
  );
}
