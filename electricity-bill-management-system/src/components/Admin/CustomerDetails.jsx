import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Sidebar from "./Sidebar";

function CustomerDetails() {
  const customers = [
    {
      id: "CUST001",
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      kw: 250,
      meterDate: "2024-03-01",
    },
    // Add more mock data as needed
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar (Fixed Width) */}
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Customer Details</h1>
        
        {/* Search Input */}
        <div className="mb-6">
          <Input label="Search Customer" size="lg" className="max-w-xs" />
        </div>

        {/* Table Card */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {["Customer ID", "Name", "Email", "Phone", "KW Used", "Actions"].map((heading) => (
                    <th key={heading} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography variant="small" color="blue-gray" className="font-bold">
                        {heading}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {customer.id}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {customer.name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {customer.email}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {customer.phone}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {customer.kw}
                      </Typography>
                    </td>
                    <td className="p-4">
  <Button
    size="sm"
    className="bg-black text-white hover:bg-gray-900 transition-all cursor-pointer"
  >
    Send Alert
  </Button>
</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CustomerDetails;
