
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { salaryPerformanceData } from "@/data/compensationData";

interface PIRSalaryDataTableProps {
  onBack: () => void;
}

export const PIRSalaryDataTable: React.FC<PIRSalaryDataTableProps> = ({
  onBack,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Job Grade</TableHead>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Starting Salary</TableHead>
              <TableHead>Current Salary</TableHead>
              <TableHead>PIR</TableHead>
              <TableHead>Performance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salaryPerformanceData.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.jobGrade}</TableCell>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>${employee.startingSalary.toLocaleString()}</TableCell>
                <TableCell>${employee.salary.toLocaleString()}</TableCell>
                <TableCell>{employee.pir}%</TableCell>
                <TableCell>{employee.performance}/5</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Button
        onClick={onBack}
        className="flex items-center gap-2 bg-[#9320E7] hover:bg-[#7D00D2] text-white"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Compensation Cards
      </Button>
    </div>
  );
};
