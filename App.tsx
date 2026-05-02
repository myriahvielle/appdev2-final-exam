import { ConvexProvider, ConvexReactClient } from "convex/react";
import TodoScreen from "./screens/TodoScreen";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";

import { Id } from "./convex/_generated/dataModel";


const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
@@ -14,11 +15,12 @@ export default function App() {

  return (
    <ConvexProvider client={convex}>
      {userId ? (
      {/* {userId ? (
        <TodoScreen userId={userId} />
      ) : (
        <LoginScreen onLogin={(id: Id<"users">) => setUserId(id)} />
      )}
      )} */}
      <SignupScreen/>
    </ConvexProvider>
  );
}
