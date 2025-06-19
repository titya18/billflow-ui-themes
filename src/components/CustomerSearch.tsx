
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CustomerSearchResults } from '@/components/CustomerSearchResults';

export function CustomerSearch() {
  const [searchType, setSearchType] = useState('fuzzy');
  const [searchBy, setSearchBy] = useState('name');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Customer by Key Word
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Advance Search */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-blue-600">Advance Search</Label>
              <RadioGroup value={searchType} onValueChange={setSearchType} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fuzzy" id="fuzzy" />
                  <Label htmlFor="fuzzy" className="text-sm">Fuzzy Search</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="exact" id="exact" />
                  <Label htmlFor="exact" className="text-sm">Exactly Search</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Customer Searching */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-blue-600">Customer Searching</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Agency</Label>
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
                <div className="space-y-2">
                  <Label className="text-xs">Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pick a location..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phnom-penh">Phnom Penh</SelectItem>
                      <SelectItem value="siem-reap">Siem Reap</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Key Words</Label>
                  <Input placeholder="Search keywords..." />
                </div>
              </div>
              <Button onClick={handleSearch} className="w-full md:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Search Options */}
          <div className="space-y-3">
            <RadioGroup value={searchBy} onValueChange={setSearchBy} className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="name" id="name" />
                <Label htmlFor="name" className="text-sm">Customer's Name</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="id" id="id" />
                <Label htmlFor="id" className="text-sm">Customer's ID</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="account-name" id="account-name" />
                <Label htmlFor="account-name" className="text-sm">Account's Name</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="account-id" id="account-id" />
                <Label htmlFor="account-id" className="text-sm">Account's ID</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email" className="text-sm">Billing's Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="address" id="address" />
                <Label htmlFor="address" className="text-sm">Billing's Address</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {showResults && <CustomerSearchResults />}
    </div>
  );
}
