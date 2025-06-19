
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Print, Eye } from 'lucide-react';

interface InvoiceDetailProps {
  invoiceData: {
    invoiceNo: string;
    date: string;
    dueDate: string;
    customerName: string;
    customerId: string;
    address: string;
    phone: string;
    email: string;
    items: Array<{
      description: string;
      quantity: string;
      unitPrice: number;
      amount: number;
    }>;
    subTotal: number;
    vatRate: number;
    vatAmount: number;
    grandTotal: number;
    exchangeRate: number;
    amountInKHR: number;
    status: string;
  };
}

export function InvoiceDetail({ invoiceData }: InvoiceDetailProps) {
  return (
    <Card className="max-w-4xl mx-auto">
      {/* Header with Company Info */}
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">CL</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">CityLink Co.,Ltd</h1>
              <p className="text-blue-100 text-sm">YOUR OBVIOUS CHOICE</p>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="mb-2">
              {invoiceData.status.toUpperCase()}
            </Badge>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="secondary" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Send
              </Button>
              <Button variant="secondary" size="sm">
                <Print className="h-4 w-4 mr-2" />
                Print
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        {/* Company Details */}
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-600">
            បណ្ដាញអ៊ីនធឺណេតសង្ស័យ គ្មាន (VAT Tin) :1001-100077668
          </p>
          <p className="text-sm text-gray-600">
            អាសយដ្ឋាន : អគារលេខ 90ខ-90ង ផ្លូវព្រះស្រីអង្គ លេខ៧បុរីចន្លោះជី ខណ្ឌចម្ការមន គម្រោងរាជធានីភ្នំពេញ
          </p>
          <p className="text-sm text-gray-600">
            Address : No 105-107, Street Preah Sihanouk, Sangkat Boeueng Prolit, khan 7 Makara, Phnom Penh.
          </p>
          <p className="text-sm text-gray-600">
            ទូរស័ព្ទ(Tel):(855) 23 220 112; កូដ៖IT / Email: billing@citylink.com.kh / infoar@citylink.com.kh
          </p>
        </div>

        {/* Invoice Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-2">
            វិក្កយបត្រពន្ធ<br />
            TAX INVOICE
          </h2>
        </div>

        {/* Invoice Info and Customer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">អតិថិជន / Customer</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">ឈ្មោះក្រុមហ៊ុន ឬ អតិថិជន:</span> {invoiceData.customerName}</p>
              <p><span className="font-medium">Company Name / Customer:</span> {invoiceData.customerName} (CID : {invoiceData.customerId})</p>
              <p><span className="font-medium">អាសយដ្ឋាន:</span></p>
              <p><span className="font-medium">Address:</span> {invoiceData.address}</p>
              <p><span className="font-medium">ទូរស័ព្ទលេខ / Tel:</span> {invoiceData.phone}</p>
              <p><span className="font-medium">អីមែល / Email:</span> {invoiceData.email}</p>
            </div>
          </div>

          <div>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">លេខវិក្កយបត្រ:</span> {invoiceData.invoiceNo}</p>
              <p><span className="font-medium">Invoice No:</span> {invoiceData.invoiceNo}</p>
              <p><span className="font-medium">កាលបរិច្ឆេទ:</span> {invoiceData.date}</p>
              <p><span className="font-medium">Date:</span> {invoiceData.date}</p>
              <p><span className="font-medium">ថ្ងៃផុតកំណត់:</span> {invoiceData.dueDate}</p>
              <p><span className="font-medium">Due Date:</span> {invoiceData.dueDate}</p>
            </div>
          </div>
        </div>

        {/* Invoice Items Table */}
        <div className="mb-8">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-3 text-left">លេខ<br />No</th>
                <th className="border border-gray-300 p-3 text-left">ពិពណ៌នាសេវា<br />Description</th>
                <th className="border border-gray-300 p-3 text-center">បរិមាណ<br />Quantity</th>
                <th className="border border-gray-300 p-3 text-right">តម្លៃឯកតា<br />Unit Price</th>
                <th className="border border-gray-300 p-3 text-right">ចំនួនសរុប<br />Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 p-3" colSpan={5}>
                  Account name: {invoiceData.email}
                </td>
              </tr>
              {invoiceData.items.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                  <td className="border border-gray-300 p-3">{item.description}</td>
                  <td className="border border-gray-300 p-3 text-center">{item.quantity}</td>
                  <td className="border border-gray-300 p-3 text-right">$ {item.unitPrice.toFixed(2)}</td>
                  <td className="border border-gray-300 p-3 text-right">$ {item.amount.toFixed(2)}</td>
                </tr>
              ))}
              
              {/* Totals */}
              <tr>
                <td className="border border-gray-300 p-3 text-right font-medium" colSpan={4}>
                  សរុប / Sub Total
                </td>
                <td className="border border-gray-300 p-3 text-right">$ {invoiceData.subTotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-right" colSpan={4}>
                  អាកបត្រតម្លៃថែម {invoiceData.vatRate}% / VAT ({invoiceData.vatRate}%)
                </td>
                <td className="border border-gray-300 p-3 text-right">$ {invoiceData.vatAmount.toFixed(2)}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 p-3 text-right font-bold" colSpan={4}>
                  សរុបរួម / Grand Total
                </td>
                <td className="border border-gray-300 p-3 text-right font-bold">$ {invoiceData.grandTotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-right" colSpan={4}>
                  Payment made (including advanced payment and credit)
                </td>
                <td className="border border-gray-300 p-3 text-right">$ 0.00</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-gray-300 p-3 text-right font-bold" colSpan={4}>
                  Balance Due
                </td>
                <td className="border border-gray-300 p-3 text-right font-bold">$ {invoiceData.grandTotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center" colSpan={5}>
                  អត្រាប្ដូរប្រាក់ 1 ដុល្លារ = {invoiceData.exchangeRate.toFixed(0)} រៀល / Exchange Rate 1USD = {invoiceData.exchangeRate.toFixed(0)} KHR: 
                  <span className="font-bold ml-2">{invoiceData.amountInKHR.toLocaleString()} រៀល</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          <p>Thank you for your business!</p>
        </div>
      </CardContent>
    </Card>
  );
}
