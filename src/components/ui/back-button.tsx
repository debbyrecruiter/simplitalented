
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
      // Navigate back in history, or to fallbackPath if no history
      try {
        navigate(-1);
      } catch (error) {
        // If navigation fails, go to fallback path
        navigate(fallbackPath);
      }
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className="flex items-center gap-1 text-[#512888] hover:text-[#512888]/80 hover:bg-transparent p-0"
    >
      <ChevronLeft className="h-5 w-5" />
      {label && <span>{label}</span>}
    </Button>
  );
}
