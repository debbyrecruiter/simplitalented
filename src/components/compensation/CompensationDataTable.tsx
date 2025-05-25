
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

interface CompensationDataTableProps {
  onBack: () => void;
}

export const CompensationDataTable: React.FC<CompensationDataTableProps> = ({
  onBack,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="border-2 border-[#840DD7] bg-white rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-white border-b border-[#840DD7]">
              <TableHead className="text-[#512888] font-semibold">Job Grade</TableHead>
              <TableHead className="w-[200px] text-[#512888] font-semibold">Name</TableHead>
              <TableHead className="text-[#512888] font-semibold">Salary</TableHead>
              <TableHead className="text-[#512888] font-semibold">PIR</TableHead>
              <TableHead className="text-[#512888] font-semibold">Performance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {salaryPerformanceData.map((employee, index) => (
              <TableRow key={index} className="border-b border-[#840DD7]/30 hover:bg-[#F0F0FF]">
                <TableCell className="text-[#512888]">{employee.jobGrade}</TableCell>
                <TableCell className="font-medium text-[#512888]">{employee.name}</TableCell>
                <TableCell className="text-[#512888]">${employee.salary.toLocaleString()}</TableCell>
                <TableCell className="text-[#512888]">{employee.pir}%</TableCell>
                <TableCell className="text-[#512888]">{employee.performance}/5</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
