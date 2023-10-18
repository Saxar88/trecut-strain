import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

import Box from "./Box";
import Library from "./Library";
import DesktopSidebarItem from "./DesktopSidebarItem";

const DesktopSidebar = () => {
	const pathname = usePathname();

	const routes = useMemo(
		() => [
			{ icon: HiHome, label: "Acasă", active: pathname !== "caută", href: "/" },
			{
				icon: BiSearch,
				label: "Caută",
				active: pathname === "caută",
				href: "/caută",
			},
		],
		[pathname]
	);

	return (
		<div className="hidden md:flex flex-col h-full w-80 p-2 gap-y-2 text-[#c8bea6]">
			<Box>
				<div className="flex flex-col gap-y-4 px-5 py-4">
					{routes.map((item) => (
						<DesktopSidebarItem key={item.label} {...item} />
					))}
				</div>
			</Box>
			<Box className="h-full overflow-y-auto">
				<Library />
			</Box>
		</div>
	);
};

export default DesktopSidebar;
