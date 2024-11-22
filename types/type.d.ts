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
    carousel?: React.ReactNode;
    bgColor?: string;
}

export interface InputFieldProps extends TextInputProps {
    label: string;
    placeholder: string;
}

export interface UsageProps {
    iconType: any;
    iconName: any;
    total: number;
    current: number;
    label: string;
    unit: string;
}

export interface QuickActionsProps {
    children: any;
}

export interface IconProps {
    iconType: any;
    iconName: any;
    text: string;
    link: RelativePathString;
}

export interface RecentPurchaseProps {
    text: string;
    price: float;
    date: string;
}

export interface AccountsProps {
    text: string;
    icon: any;
    iconSize?: number;
}

export interface AccountSummaryProps {
    device: string;
    accountNumber: string;
    phoneModel: string;
    plan: string;
    mobileNumber: string;
}

export interface AccountExtraProps {
    type: string;
    children: string;
    link: RelativePathString;
    linkText: string;
    icon: any;
}
