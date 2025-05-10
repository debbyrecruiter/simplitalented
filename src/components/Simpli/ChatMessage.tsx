
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

interface ChatMessageProps {
  message: {
    role: "user" | "assistant";
    content: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 w-full",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar className={cn(
        "h-8 w-8 flex items-center justify-center text-white",
        isUser ? "bg-[#512888]" : "bg-primary"
      )}>
        <span>{isUser ? "You" : "S"}</span>
      </Avatar>
      
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isUser ? "bg-[#F0F0FF] text-[#512888]" : "bg-white border border-[#840DD7] text-gray-800"
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
