
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            CityLink Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Welcome to the CityLink administration system. Choose your preferred dashboard to get started.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Modern Dashboard
            </Button>
          </Link>
          
          <Link to="/billing-admin">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
              Billing Administration
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Modern Dashboard</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Advanced search capabilities, modern UI components, and comprehensive data visualization.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Billing Administration</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Complete billing management, customer search, invoice handling, and financial reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
