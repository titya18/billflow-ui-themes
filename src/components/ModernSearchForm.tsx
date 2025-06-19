
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Autocomplete, AutocompleteOption } from '@/components/ui/autocomplete';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download, RefreshCw } from 'lucide-react';

const searchTypeOptions: AutocompleteOption[] = [
  { value: 'customer_name', label: 'Customer Name' },
  { value: 'customer_id', label: 'Customer ID' },
  { value: 'invoice_number', label: 'Invoice Number' },
  { value: 'account_name', label: 'Account Name' },
  { value: 'email', label: 'Email Address' },
  { value: 'phone', label: 'Phone Number' },
  { value: 'ip_address', label: 'IP Address' },
  { value: 'mac_address', label: 'MAC Address' },
];

const customerOptions: AutocompleteOption[] = [
  { value: '1', label: 'Cambodia Vietnam Securities PLC' },
  { value: '2', label: 'ABC Company Ltd' },
  { value: '3', label: 'XYZ Corporation' },
  { value: '4', label: 'Global Tech Solutions' },
  { value: '5', label: 'Metro Business Center' },
  { value: '6', label: 'Pacific Trading Co.' },
  { value: '7', label: 'Asia Investment Group' },
  { value: '8', label: 'Digital Innovation Hub' },
  { value: '9', label: 'Smart Technology Solutions' },
  { value: '10', label: 'Royal Enterprise Ltd' },
];

const statusOptions: AutocompleteOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' },
  { value: 'closed', label: 'Closed' },
  { value: 'pending', label: 'Pending' },
];

const serviceOptions: AutocompleteOption[] = [
  { value: 'internet', label: 'Internet Service' },
  { value: 'hosting', label: 'Web Hosting' },
  { value: 'email', label: 'Email Service' },
  { value: 'domain', label: 'Domain Registration' },
  { value: 'vpn', label: 'VPN Service' },
  { value: 'cloud', label: 'Cloud Storage' },
];

export function ModernSearchForm() {
  const [searchType, setSearchType] = useState('customer_name');
  const [searchValue, setSearchValue] = useState('');
  const [status, setStatus] = useState('');
  const [service, setService] = useState('');

  const handleSearch = () => {
    console.log('Search:', { searchType, searchValue, status, service });
  };

  const handleReset = () => {
    setSearchType('customer_name');
    setSearchValue('');
    setStatus('');
    setService('');
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Search className="h-6 w-6" />
            Advanced Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search Type */}
            <div className="space-y-2">
              <Autocomplete
                label="Search Type"
                options={searchTypeOptions}
                value={searchType}
                onValueChange={setSearchType}
                placeholder="Select search type"
                fullWidth
              />
            </div>

            {/* Search Value */}
            <div className="space-y-2">
              <Autocomplete
                label="Search Value"
                options={customerOptions}
                value={searchValue}
                onValueChange={setSearchValue}
                placeholder="Enter search term..."
                freeSolo={true}
                fullWidth
              />
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <Autocomplete
                label="Status Filter"
                options={statusOptions}
                value={status}
                onValueChange={setStatus}
                placeholder="Select status"
                clearable={true}
                fullWidth
              />
            </div>

            {/* Service Type */}
            <div className="space-y-2">
              <Autocomplete
                label="Service Type"
                options={serviceOptions}
                value={service}
                onValueChange={setService}
                placeholder="Select service"
                clearable={true}
                fullWidth
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"
              disabled={!searchValue.trim()}
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="border-blue-300 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-6"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            
            <Button 
              variant="outline"
              className="border-green-300 text-green-600 hover:bg-green-50 dark:hover:bg-green-950 px-6"
            >
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filter
            </Button>
            
            <Button 
              variant="outline"
              className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 px-6"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Results
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Search Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Search className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Quick Customer Search</h3>
                <p className="text-xs text-muted-foreground">Find customers instantly</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Filter className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Advanced Filters</h3>
                <p className="text-xs text-muted-foreground">Complex search queries</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-500">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Download className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Export Data</h3>
                <p className="text-xs text-muted-foreground">Download search results</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-orange-500">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <RefreshCw className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Real-time Updates</h3>
                <p className="text-xs text-muted-foreground">Live data synchronization</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
