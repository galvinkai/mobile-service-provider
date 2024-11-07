import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
	text: string;
	icon?: any;
	colour: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, colour }) => {
	return (
		<Pressable
			className={`bg-${colour}flex flex-row  justify-center items-center w-full py-4 rounded-full`}>
			{icon}

			<Text className="text-white ml-2 text-xl font-raleway-semibold">
				{text}
			</Text>
		</Pressable>
	);
};

export default Button;
