import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";

export default function Home() {
	return (
		<div className="h-full w-full bg-[#aa9a75] overflow-hidden overflow-y-auto rounded-lg">
			<Header>
				<EmptyState />
			</Header>
		</div>
	);
}
