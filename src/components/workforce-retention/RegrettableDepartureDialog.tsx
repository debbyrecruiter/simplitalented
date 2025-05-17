
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RegrettableDeparture } from "@/data/regrettableDeparturesData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RegrettableDepartureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  month: string | null;
  employees: RegrettableDeparture[];
}

const RegrettableDepartureDialog: React.FC<RegrettableDepartureDialogProps> = ({
  isOpen,
  onClose,
  month,
  employees,
}) => {
  // Helper function to render performance ratings with purple stars
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-[#9b87f5]">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return <div className="flex">{stars} <span className="ml-1 text-sm">({rating}/5)</span></div>;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto border-2 border-[#9b87f5]">
        <DialogHeader>
          <DialogTitle className="text-[#512888] font-bold text-xl">
            Regrettable Departures - {month} 2024
          </DialogTitle>
          <DialogDescription>
            {employees.length} regrettable departures in {month}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-[#f0ebff] text-[#512888] font-semibold">Employee</TableHead>
                <TableHead className="bg-[#f0ebff] text-[#512888] font-semibold">Department</TableHead>
                <TableHead className="bg-[#f0ebff] text-[#512888] font-semibold">Manager</TableHead>
                <TableHead className="bg-[#f0ebff] text-[#512888] font-semibold">Manager Rating</TableHead>
                <TableHead className="bg-[#f0ebff] text-[#512888] font-semibold">Reason</TableHead>
                <TableHead className="bg-[#f0ebff] text-[#512888] font-semibold">Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id} className="border-b hover:bg-[#f9f7ff]">
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.manager}</TableCell>
                  <TableCell>{renderRatingStars(employee.managerRating)}</TableCell>
                  <TableCell>{employee.reason}</TableCell>
                  <TableCell>{renderRatingStars(employee.performanceScore)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegrettableDepartureDialog;
