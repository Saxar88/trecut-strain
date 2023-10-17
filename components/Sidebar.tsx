"use client";

import DesktopSidebar from "./DesktopSidebar";

interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	return (
		<div className="flex h-full">
			<DesktopSidebar />
			<main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
		</div>
	);
};

export default Sidebar;
