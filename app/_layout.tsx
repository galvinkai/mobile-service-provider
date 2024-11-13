import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        // Raleway
        Raleway: require("../assets/fonts/Raleway/Raleway-Regular.ttf"),
        "Raleway-Bold": require("../assets/fonts/Raleway/Raleway-Bold.ttf"),
        "Raleway-Italic": require("../assets/fonts/Raleway/Raleway-Italic.ttf"),
        "Raleway-BoldItalic": require("../assets/fonts/Raleway/Raleway-BoldItalic.ttf"),
        "Raleway-Thin": require("../assets/fonts/Raleway/Raleway-Thin.ttf"),
        "Raleway-ThinItalic": require("../assets/fonts/Raleway/Raleway-ThinItalic.ttf"),
        "Raleway-Light": require("../assets/fonts/Raleway/Raleway-Light.ttf"),
        "Raleway-LightItalic": require("../assets/fonts/Raleway/Raleway-LightItalic.ttf"),
        "Raleway-ExtraLight": require("../assets/fonts/Raleway/Raleway-ExtraLight.ttf"),
        "Raleway-ExtraLightItalic": require("../assets/fonts/Raleway/Raleway-ExtraLightItalic.ttf"),
        "Raleway-Medium": require("../assets/fonts/Raleway/Raleway-Medium.ttf"),
        "Raleway-MediumItalic": require("../assets/fonts/Raleway/Raleway-MediumItalic.ttf"),
        "Raleway-SemiBold": require("../assets/fonts/Raleway/Raleway-SemiBold.ttf"),
        "Raleway-SemiBoldItalic": require("../assets/fonts/Raleway/Raleway-SemiBoldItalic.ttf"),
        "Raleway-ExtraBold": require("../assets/fonts/Raleway/Raleway-ExtraBold.ttf"),
        "Raleway-ExtraBoldItalic": require("../assets/fonts/Raleway/Raleway-ExtraBoldItalic.ttf"),
        "Raleway-Black": require("../assets/fonts/Raleway/Raleway-Black.ttf"),
        "Raleway-BlackItalic": require("../assets/fonts/Raleway/Raleway-BlackItalic.ttf"),

        // REM
        Rem: require("../assets/fonts/REM/REM-Regular.ttf"),
        "Rem-Bold": require("../assets/fonts/REM/REM-Bold.ttf"),
        "Rem-Italic": require("../assets/fonts/REM/REM-Italic.ttf"),
        "Rem-BoldItalic": require("../assets/fonts/REM/REM-BoldItalic.ttf"),
        "Rem-Thin": require("../assets/fonts/REM/REM-Thin.ttf"),
        "Rem-ThinItalic": require("../assets/fonts/REM/REM-ThinItalic.ttf"),
        "Rem-Light": require("../assets/fonts/REM/REM-Light.ttf"),
        "Rem-LightItalic": require("../assets/fonts/REM/REM-LightItalic.ttf"),
        "Rem-ExtraLight": require("../assets/fonts/REM/REM-ExtraLight.ttf"),
        "Rem-ExtraLightItalic": require("../assets/fonts/REM/REM-ExtraLightItalic.ttf"),
        "Rem-Medium": require("../assets/fonts/REM/REM-Medium.ttf"),
        "Rem-MediumItalic": require("../assets/fonts/REM/REM-MediumItalic.ttf"),
        "Rem-SemiBold": require("../assets/fonts/REM/REM-SemiBold.ttf"),
        "Rem-SemiBoldItalic": require("../assets/fonts/REM/REM-SemiBoldItalic.ttf"),
        "Rem-ExtraBold": require("../assets/fonts/REM/REM-ExtraBold.ttf"),
        "Rem-ExtraBoldItalic": require("../assets/fonts/REM/REM-ExtraBoldItalic.ttf"),
        "Rem-Black": require("../assets/fonts/REM/REM-Black.ttf"),
        "Rem-BlackItalic": require("../assets/fonts/REM/REM-BlackItalic.ttf"),
    });

    useEffect(() => {
        if (error) {
            throw new Error("Fonts failed to load");
        }

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(root)" />
            <Stack.Screen name="+not-found" options={{ headerShown: true }} />
        </Stack>
    );
}
