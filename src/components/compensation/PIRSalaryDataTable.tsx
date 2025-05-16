
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
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Job Grade</TableHead>
              <TableHead>Starting Salary</TableHead>
              <TableHead>PIR</TableHead>
              <TableHead>Performance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salaryPerformanceData.map((employee, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>{employee.jobGrade}</TableCell>
                <TableCell>${employee.salary.toLocaleString()}</TableCell>
                <TableCell>{employee.pir}%</TableCell>
                <TableCell>{employee.performance}/5</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <button
        className="px-4 py-2 bg-[#9320E7] text-white rounded-md hover:bg-[#7D00D2] transition-colors self-start"
        onClick={onBack}
      >
        Back to Compensation Cards
      </button>
    </div>
  );
};
