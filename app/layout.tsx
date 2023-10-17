import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
	return (
		<html lang="en">
			<body className={notoSerif.className}>
				<Sidebar>{children}</Sidebar>
			</body>
		</html>
	);
}
