
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  onClick?: () => void;
  label?: string;
  fallbackPath?: string;
}

export function BackButton({ onClick, label = "Back", fallbackPath = "/" }: BackButtonProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      // Use custom click handler if provided
      onClick();
    } else {
      // Simply go back one step in history
      // This naturally returns to the previous page the user was on
      navigate(-1);
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className="flex items-center gap-1 text-[#840DD7] hover:text-[#840DD7]/80 hover:bg-transparent p-0"
    >
      <div className="flex items-center">
        <ChevronLeft className="h-5 w-5" />
        <ChevronLeft className="h-5 w-5 -ml-3" />
        <ChevronLeft className="h-5 w-5 -ml-3" />
      </div>
      {label && <span className="ml-1 text-[1.75rem]">{label}</span>}
    </Button>
  );
}
