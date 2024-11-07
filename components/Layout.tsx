import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LayoutProps {
	children: React.ReactNode;
	bgColor?: string;
	homeBanner?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, bgColor, homeBanner }) => {
	return (
		<SafeAreaView
			className={`${
				bgColor ? "bg-[rgba(233,131,32,0.10)]" : homeBanner ? "" : ""
			} `}>
			<View>{homeBanner}</View>
			<ScrollView
				className={`${homeBanner ? "bg-red-500" : ""} h-full bg-red-500`}
				contentContainerStyle={{ height: "100%" }}>
				{children}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Layout;
