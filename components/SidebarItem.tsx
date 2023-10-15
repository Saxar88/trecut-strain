import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
	icon: IconType;
	label: string;
	active?: boolean;
	href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
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
			<Icon size={26} />
			<p className="w-full truncate">{label}</p>
		</Link>
	);
};

export default SidebarItem;
