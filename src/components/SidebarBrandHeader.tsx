
import { SidebarHeader } from '@/components/ui/sidebar';

export function SidebarBrandHeader() {
  return (
    <SidebarHeader className="border-b border-sidebar-border p-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">CL</span>
        </div>
        <span className="font-semibold text-sidebar-foreground">CityLink Admin</span>
      </div>
    </SidebarHeader>
  );
}
