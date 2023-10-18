import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import useRecord from "./hooks/useRecord";
import RecordList from "@/components/RecordList";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Trecutu-i o țară streină",
	description: "Matricole confesionale din nordul Ardealului",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const records = useRecord();

	return (
		<html lang="en">
			<body className={notoSerif.className}>
				<Sidebar>
					<RecordList />
					{children}
				</Sidebar>
			</body>
		</html>
	);
}
