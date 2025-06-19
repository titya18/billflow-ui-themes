
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function CustomerBilling() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Account Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">Account Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <Label className="text-muted-foreground">Subscription Name</Label>
              <p className="font-medium">Cambodia Vietnam Securities PLC</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Account Name</Label>
              <p className="font-medium">cvs.com.kh</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Password</Label>
              <p className="font-medium">4562379</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Branch Name</Label>
              <p className="font-medium">Phnom Penh</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Location</Label>
              <p className="font-medium">Boeung Prait</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Install Address</Label>
              <p className="font-medium text-xs">#99, Norodom Blvd, Sangkat Boeung Raing, Khan Daun Penh, PP</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Current Status</Label>
              <p className="font-medium text-green-600">Active</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Product Type</Label>
              <p className="font-medium">Webhosting</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Monthly Fee</Label>
              <p className="font-medium">$ 50.0000</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Billing Adjustment</Label>
              <p className="font-medium">$ 0.0000</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Service Name</Label>
              <p className="font-medium">Hosting</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Start Billing Date</Label>
              <p className="font-medium">01 / May / 2022</p>
            </div>
            <div>
              <Label className="text-muted-foreground">Next Billing Date</Label>
              <p className="font-medium">01 / Jun / 2022</p>
            </div>
            <div>
              <Label className="text-muted-foreground">IP Address</Label>
              <p className="font-medium">0.0.0.0</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Account & Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">Edit Account & Plan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="billing-tariff">Billing Tariff *</Label>
            <Select defaultValue="webhosting">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="webhosting">Webhosting</SelectItem>
                <SelectItem value="premium">Premium Hosting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthly-fee">Monthly Fee *</Label>
            <div className="flex gap-2">
              <Select defaultValue="usd">
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="khr">KHR</SelectItem>
                </SelectContent>
              </Select>
              <Input 
                id="monthly-fee" 
                defaultValue="50.0000"
                className="flex-1"
              />
              <div className="flex items-center">
                <input type="checkbox" id="exclude-vat" className="mr-2" />
                <Label htmlFor="exclude-vat" className="text-sm">Exclude VAT</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pay-period">Pay Period *</Label>
            <div className="flex gap-2">
              <Input defaultValue="1" className="w-20" />
              <Select defaultValue="months">
                <SelectTrigger className="flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="months">Months</SelectItem>
                  <SelectItem value="years">Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="free-period">Free Period</Label>
            <div className="flex gap-2">
              <Input defaultValue="0" className="w-20" />
              <Select defaultValue="months">
                <SelectTrigger className="flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="months">Months</SelectItem>
                  <SelectItem value="years">Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">Comment</Label>
            <Input id="comment" />
            <p className="text-xs text-muted-foreground">
              Note: If reselling-date smaller than current-date, has only start new period
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="change-period">Change Period</Label>
            <Select defaultValue="start-new">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start-new">Start New Period</SelectItem>
                <SelectItem value="immediate">Immediate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="change-date">Select Date for Change Plan</Label>
            <Input 
              id="change-date" 
              type="date"
              defaultValue="2025-06-18"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              Change Plan
            </Button>
            <Button variant="outline">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
