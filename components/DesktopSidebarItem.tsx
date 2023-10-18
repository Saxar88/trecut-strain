import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
	icon: IconType;
	label: string;
	active?: boolean;
	href: string;
}

const DesktopSidebarItem: React.FC<SidebarItemProps> = ({
	icon: Icon,
	label,
	active,
	href,
}) => {
	return (
		<Link
			href={href}
			className={twMerge(
				"flex flex-row items-center h-auto w-full gap-x-4 py-1 text-md font-medium cursor-pointer hover:text-[#f3f1eb] transition",
				active && "text-[#f3f1eb]"
			)}>
			<ul role="list" className="flex flex-col items-center space-y-1">
				<Icon size={26} />
				<p className="w-full truncate">{label}</p>
			</ul>
		</Link>
	);
};

export default DesktopSidebarItem;
