import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Bills() {
  const [formData, setFormData] = useState({
    customerId: "",
    kilowatts: "",
    billingPeriod: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { customerId, kilowatts, billingPeriod } = formData;

    if (!customerId || !kilowatts || !billingPeriod) {
      setError("All fields are required.");
      return;
    }

    console.log("Bill generated for:", formData);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-6 bg-gray-100 dark:bg-gray-900 transition-colors">
        <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Generate Bill
        </h1>
        <Card className="p-6 w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Typography variant="small" className="font-semibold text-gray-700 dark:text-gray-300">
                Customer ID
              </Typography>
              <Input
                name="customerId"
                value={formData.customerId}
                onChange={handleChange}
                size="lg"
                className="mt-1"
              />
            </div>

            <div>
              <Typography variant="small" className="font-semibold text-gray-700 dark:text-gray-300">
                Kilowatts Consumed
              </Typography>
              <Input
                name="kilowatts"
                type="number"
                value={formData.kilowatts}
                onChange={handleChange}
                size="lg"
                className="mt-1"
              />
            </div>

            <div>
              <Typography variant="small" className="font-semibold text-gray-700 dark:text-gray-300">
                Billing Period
              </Typography>
              <Input
                name="billingPeriod"
                type="month"
                value={formData.billingPeriod}
                onChange={handleChange}
                size="lg"
                className="mt-1"
              />
            </div>

            {error && <Typography color="red" className="text-sm">{error}</Typography>}

            <Button
              type="submit"
              className="mt-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              fullWidth
            >
              Generate Bill
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Bills;
