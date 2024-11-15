import { Pressable, TextInputProps } from "react-native";

export interface ButtonProps extends Pressable {
    text: string;
    textColour?: string;
    border?: string;
    icon?: any;
    colour: string;
    link?: RelativePathString;
    resetRoute?: boolean;
    onPress?: () => void;
}

export interface TabIconProps {
    icon: any;
    color?: string;
}

export interface LayoutProps {
    children: React.ReactNode;
    homeBanner?: React.ReactNode;
    bgColor?: string;
}

export interface InputFieldProps extends TextInputProps {
    label: string;
    placeholder: string;
}

export interface StatusProps {
    icon: any;
    total: number;
    current: number;
    label: string;
    unit: string;
}
