
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CustomerInfo } from '@/components/CustomerInfo';
import { CustomerAccounts } from '@/components/CustomerAccounts';
import { CustomerBilling } from '@/components/CustomerBilling';

export function CustomerDetails() {
  return (
    <Card className="animate-fade-in">
      {/* Customer Header */}
      <CardHeader className="bg-blue-600 text-white rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Customer ID: 13</CardTitle>
            <p className="text-blue-100">Customer Name: Cambodia Vietnam Securities PLC</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100">Credit: $ 1.00</p>
            <p className="text-blue-100">Invoice Balance: $ 22.00</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Tabs defaultValue="customers" className="w-full">
          <TabsList className="grid grid-cols-5 w-full rounded-none border-b">
            <TabsTrigger value="customers" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Customers
            </TabsTrigger>
            <TabsTrigger value="contacts" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Contacts
            </TabsTrigger>
            <TabsTrigger value="accounts" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Accounts
            </TabsTrigger>
            <TabsTrigger value="finance" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Finance
            </TabsTrigger>
            <TabsTrigger value="audit" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Audit
            </TabsTrigger>
          </TabsList>

          <TabsContent value="customers" className="p-6">
            <CustomerInfo />
          </TabsContent>

          <TabsContent value="contacts" className="p-6">
            <div className="text-center py-8 text-muted-foreground">
              Contact information will be displayed here
            </div>
          </TabsContent>

          <TabsContent value="accounts" className="p-6">
            <CustomerAccounts />
          </TabsContent>

          <TabsContent value="finance" className="p-6">
            <CustomerBilling />
          </TabsContent>

          <TabsContent value="audit" className="p-6">
            <div className="text-center py-8 text-muted-foreground">
              Audit logs will be displayed here
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
