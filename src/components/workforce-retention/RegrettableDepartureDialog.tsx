
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RegrettableDeparture } from "@/data/regrettableDeparturesData";

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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#512888] font-bold text-xl">
            Regrettable Departures - {month} 2024
          </DialogTitle>
          <DialogDescription>
            {employees.length} regrettable departures in {month}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f0ebff] text-[#512888]">
                <th className="p-3 text-left font-semibold border-b-2 border-[#9b87f5]">Employee</th>
                <th className="p-3 text-left font-semibold border-b-2 border-[#9b87f5]">Department</th>
                <th className="p-3 text-left font-semibold border-b-2 border-[#9b87f5]">Manager</th>
                <th className="p-3 text-left font-semibold border-b-2 border-[#9b87f5]">Departure Date</th>
                <th className="p-3 text-left font-semibold border-b-2 border-[#9b87f5]">Reason</th>
                <th className="p-3 text-left font-semibold border-b-2 border-[#9b87f5]">Performance</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b border-[#e5e7eb] hover:bg-[#f9f7ff]">
                  <td className="p-3 font-medium">{employee.name}</td>
                  <td className="p-3">{employee.department}</td>
                  <td className="p-3">{employee.manager}</td>
                  <td className="p-3">{employee.departureDate}</td>
                  <td className="p-3">{employee.reason}</td>
                  <td className="p-3 font-medium text-[#512888]">{employee.performanceScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegrettableDepartureDialog;
