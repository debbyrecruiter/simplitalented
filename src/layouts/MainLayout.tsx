
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { ChatbotButton } from "@/components/Simpli/ChatbotButton";
import { Background3D } from "@/components/Background3D";

export default function MainLayout() {
  return (
    <>
      <Background3D />
      <SidebarProvider defaultOpen={false}>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <div className="flex-1 relative overflow-auto">
            <Outlet />
          </div>
          <ChatbotButton />
        </div>
      </SidebarProvider>
    </>
  );
}
