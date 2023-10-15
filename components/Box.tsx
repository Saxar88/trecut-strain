import { twMerge } from "tailwind-merge";

interface BoxProps {
	children: React.ReactNode;
	className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
	return (
		<div className={twMerge("h-fit w-full bg-[#303b37] rounded-lg", className)}>
			{children}
		</div>
	);
};

export default Box;
