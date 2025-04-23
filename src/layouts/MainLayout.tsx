
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { ChatbotButton } from "@/components/Simpli/ChatbotButton";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
        <ChatbotButton />
      </div>
    </SidebarProvider>
  );
}
