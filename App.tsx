import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ConvexProvider, ConvexReactClient } from "convex/react";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignUpScreen";
import TodoScreen from "./screens/TodoScreen";
import { Id } from "./convex/_generated/dataModel";

// Define the types for your routes so useNavigation works correctly
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Todo: { userId: Id<"users"> };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Signup" 
            component={SignupScreen} 
            options={{ title: "Create Account" }}
          />
          <Stack.Screen 
            name="Todo" 
            component={TodoScreen} 
            options={{ title: "My Tasks" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ConvexProvider>
  );
}