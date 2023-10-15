"use client";

import { FaBook } from "react-icons/fa";

const Library = () => {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between px-5 pt-4">
				<div className="inline-flex items-center gap-x-2">
					<FaBook size={26} />
					<p className="font-medium text-md">Matricole confesionale</p>
				</div>
			</div>
			<div className="flex flex-col gap-y-2 mt-4 px-3">matricole</div>
		</div>
	);
};

export default Library;
