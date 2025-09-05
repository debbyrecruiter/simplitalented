
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { ChatbotDialog } from "./ChatbotDialog";
import { Button } from "@/components/ui/button";

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg p-0 flex items-center justify-center"
        aria-label="Open Simpli AI Assistant"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
      <ChatbotDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
