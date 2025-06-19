
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function CustomerInfo() {
  return (
    <Tabs defaultValue="customer-info" className="w-full">
      <TabsList className="grid grid-cols-2 w-full max-w-md">
        <TabsTrigger value="customer-info">Customer / Contact Information</TabsTrigger>
        <TabsTrigger value="billing-info">Billing Information</TabsTrigger>
      </TabsList>

      <TabsContent value="customer-info" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="customer-name">Customer Name *</Label>
              <Input 
                id="customer-name" 
                defaultValue="Cambodia Vietnam Securities PLC"
                className="font-medium"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="billing-email">Billing Email *</Label>
              <Input 
                id="billing-email" 
                type="email"
                defaultValue="kosal@cvs.com.kh"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vat-type">VAT Type *</Label>
              <Select defaultValue="regular">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular VAT</SelectItem>
                  <SelectItem value="exempt">VAT Exempt</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="passport-id">Passport ID</Label>
              <Input id="passport-id" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="billing-address">Billing Address(*)</Label>
              <Input 
                id="billing-address" 
                defaultValue="#99, Norodom Blvd, Sangkat Boeung Raing, Khan Daun Penh, PP"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="account-type">Account Type</Label>
              <Select defaultValue="corporate">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="individual">Individual</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Select defaultValue="cambodian">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cambodian">Cambodian</SelectItem>
                  <SelectItem value="vietnamese">Vietnamese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="customer-name-kh">Customer Name(KH)</Label>
              <Input id="customer-name-kh" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile-phone">Mobile Phone *</Label>
              <Input 
                id="mobile-phone" 
                defaultValue="097923678/088889364/097666060"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vat-number">VAT Number</Label>
              <Input id="vat-number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="billing-address-2">Billing Address *</Label>
              <Input id="billing-address-2" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="billing-map">Billing Map</Label>
              <Input 
                id="billing-map" 
                defaultValue="11.556042533842378, 104.918000924234249"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pick an occupation..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="select-agent">Select Agent *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pick an agent..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agent1">Agent 1</SelectItem>
                  <SelectItem value="agent2">Agent 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Contact Name</Label>
              <Input id="contact-name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-address">Contact Address</Label>
              <Input id="contact-address" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select defaultValue="cambodia">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cambodia">Cambodia</SelectItem>
                  <SelectItem value="vietnam">Vietnam</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fax">Fax</Label>
              <Input id="fax" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="select-product">Select Product *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pick a service..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hosting">Web Hosting</SelectItem>
                  <SelectItem value="domain">Domain</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="declare-vat">Declare VAT</Label>
              <Select defaultValue="yes">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Input id="organization" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zip-code">Zip Code</Label>
              <Input id="zip-code" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-phone">Contact Phone</Label>
              <Input id="contact-phone" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Contact Email</Label>
              <Input id="contact-email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input id="password" type="password" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Next
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="billing-info" className="mt-6">
        <div className="text-center py-8 text-muted-foreground">
          Billing information form will be displayed here
        </div>
      </TabsContent>
    </Tabs>
  );
}
