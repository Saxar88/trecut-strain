"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const router = useRouter();

	return (
		<div className={twMerge("h-fit", className)}>
			<div className="flex items-center justify-between w-full mb-4">
				<div className="hidden md:flex items-center gap-x-2">
					<button
						onClick={() => router.back()}
						className="relative w-0 h-0 hover:border-none border-b-[70px] border-l-[70px] border-b-[#c8bea6] border-l-[#29302d] border-solid shadow-md"></button>
				</div>
				<div className="flex md:hidden items-center gap-x-2 p-2">
					<button className="flex items-center justify-center py-1 bg-[#033d8c] text-[#c7c5c4]">
						<div className="px-2 py-1 border-t-[2px] border-b-[2px] border-[#c7c5c4]">
							<HiHome size={20} className="hover:opacity-75 transition" />
						</div>
						<div className="px-2 py-1 border-t-[2px] border-b-[2px] border-[#c7c5c4]">
							<BiSearch size={20} className="hover:opacity-75 transition" />
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
