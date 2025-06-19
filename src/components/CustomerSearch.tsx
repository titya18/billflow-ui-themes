
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Autocomplete, AutocompleteOption } from '@/components/ui/autocomplete';
import { CustomerSearchResults } from '@/components/CustomerSearchResults';

const customerOptions: AutocompleteOption[] = [
  { value: '1', label: 'Cambodia Vietnam Securities PLC' },
  { value: '2', label: 'ABC Company Ltd' },
  { value: '3', label: 'XYZ Corporation' },
  { value: '4', label: 'Global Tech Solutions' },
  { value: '5', label: 'Metro Business Center' },
];

const searchTypeOptions: AutocompleteOption[] = [
  { value: 'customer_name', label: 'Customer Name' },
  { value: 'customer_id', label: 'Customer ID' },
  { value: 'account_name', label: 'Account Name' },
  { value: 'email', label: 'Email Address' },
  { value: 'phone', label: 'Phone Number' },
];

export function CustomerSearch() {
  const [searchType, setSearchType] = useState('customer_name');
  const [searchValue, setSearchValue] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchValue.trim()) {
      setShowResults(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Customer Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl">
            <Autocomplete
              label="Search Type"
              options={searchTypeOptions}
              value={searchType}
              onValueChange={setSearchType}
              placeholder="Select search type"
              className="w-full sm:w-64"
            />
            
            <Autocomplete
              label="Search Value"
              options={customerOptions}
              value={searchValue}
              onValueChange={setSearchValue}
              placeholder="Enter search term..."
              freeSolo={true}
              fullWidth
              className="flex-1"
            />
            
            <div className="flex items-end">
              <Button 
                onClick={handleSearch}
                className="w-full sm:w-auto"
                disabled={!searchValue.trim()}
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {showResults && <CustomerSearchResults searchTerm={searchValue} />}
    </div>
  );
}
