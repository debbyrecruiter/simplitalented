
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { salaryPerformanceData } from "@/data/compensationData";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CompensationDataTableProps {
  onBack: () => void;
}

export const CompensationDataTable: React.FC<CompensationDataTableProps> = ({
  onBack,
}) => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    // First try the onBack function, but if it somehow fails, redirect to compensation analysis
    try {
      onBack();
    } catch (error) {
      console.error("Error with onBack function:", error);
      navigate("/reports/compensation-analysis");
    }
  };
  
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4">
        <Button
          onClick={handleBackClick}
          variant="ghost"
          className="flex items-center gap-1 text-[#840DD7] hover:text-[#840DD7]/80 hover:bg-transparent p-0"
        >
          <div className="flex items-center">
            <ChevronLeft className="h-5 w-5" />
            <ChevronLeft className="h-5 w-5 -ml-3" />
            <ChevronLeft className="h-5 w-5 -ml-3" />
          </div>
          <span className="ml-1 text-[1.75rem]">Back to Compensation Analysis</span>
        </Button>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Grade</TableHead>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>PIR</TableHead>
              <TableHead>Performance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salaryPerformanceData.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.jobGrade}</TableCell>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>${employee.salary.toLocaleString()}</TableCell>
                <TableCell>{employee.pir}%</TableCell>
                <TableCell>{employee.performance}/5</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
