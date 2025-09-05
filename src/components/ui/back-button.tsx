
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
  
  const handleClick = (e: React.MouseEvent) => {
    // Prevent any default behavior
    e.preventDefault();
    e.stopPropagation();
    
    if (onClick) {
      // Call the provided onClick handler directly
      onClick();
    } else {
      // Go back one page in browser history, or fallback if no history
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate(fallbackPath);
      }
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className="flex items-center gap-1 text-[#A171E5] hover:text-[#A171E5]/80 hover:bg-transparent p-0"
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
