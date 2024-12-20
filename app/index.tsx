import { Redirect } from "expo-router";
import React from "react";

const Home = () => {
    const isSignedIn = false;
    if (!isSignedIn) {
        return <Redirect href="/(auth)/welcome" />;
    }

    return <Redirect href="/(root)/(tabs)/home" />;
};

export default Home;
