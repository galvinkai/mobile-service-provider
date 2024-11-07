import Logo from "@/assets/icons/account-active.svg";
import Button from "@/components/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
	return (
		<SafeAreaView className="bg-[rgba(233,131,32,0.10)] h-full px-8">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full justify-center items-center h-full">
					<View className="mb-20">
						<Logo width={150} height={150} />
					</View>

					<View className="space-y-4 w-full">
						<Button
							text="Sign in with Mobile Number"
							colour="orange"
							icon={
								<View>
									{Platform.OS === "ios" ? (
										<MaterialIcons
											name="phone-iphone"
											size={24}
											color="white"
										/>
									) : (
										<MaterialIcons
											name="phone-android"
											size={24}
											color="white"
										/>
									)}
								</View>
							}
						/>

						<Button
							text="Sign in with Email"
							colour="blue"
							icon={<View></View>}
						/>
						<Button
							text="Sign in with Google"
							colour="blue"
							icon={<View></View>}
						/>
						<Button
							text="Sign in with Apple"
							colour="blue"
							icon={<View></View>}
						/>

						<View className="flex flex-row space-x-4 items-justify-center w-full">
							<Text className="font-raleway text-lg">
								Don't have an account?
							</Text>
							<Link
								href="/home"
								className="font-raleway-bold text-lg text-orange">
								Sign up
							</Link>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default index;
