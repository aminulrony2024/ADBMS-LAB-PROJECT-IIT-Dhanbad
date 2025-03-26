import { Card, Typography } from "@material-tailwind/react";
import Sidebar from "./Sidebar";

function Complaints() {
  const complaints = [
    {
      id: "COMP001",
      customerId: "CUST001",
      subject: "Power Fluctuation",
      message: "Experiencing frequent power fluctuations in the evening",
      status: "Pending",
      date: "2024-03-01"
    }
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar (Fixed Width) */}
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content (Takes Remaining Space) */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Customer Complaints</h1>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-bold">
                      Complaint ID
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-bold">
                      Customer ID
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-bold">
                      Subject
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-bold">
                      Status
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-bold">
                      Date
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {complaint.id}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {complaint.customerId}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {complaint.subject}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {complaint.status}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray">
                        {complaint.date}
                      </Typography>
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

export default Complaints;
