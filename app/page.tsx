import Header from "@/components/Header";

export default function Home() {
	return (
		<div className="h-full w-full bg-[#aa9a75] overflow-hidden overflow-y-auto rounded-lg">
			<Header>
				<div className="mb-2">
					<h1 className="text-3xl font-semibold text-[#31271c]">Matricola</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4"></div>
				</div>
			</Header>
		</div>
	);
}
