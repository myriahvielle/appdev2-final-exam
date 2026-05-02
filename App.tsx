import { ConvexProvider, ConvexReactClient } from "convex/react";
import TodoScreen from "./screens/TodoScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignUpScreen";
import { useState } from "react";
import { Id } from "./convex/_generated/dataModel";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

type Screen = "login" | "signup" | "todo";

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [userId, setUserId] = useState<Id<"users"> | null>(null);

  const handleLogin = (id: Id<"users">) => {
    setUserId(id);
    setScreen("todo");
  };

  const handleSignUp = (id: Id<"users">) => {
    setUserId(id);
    setScreen("todo");
  };

  return (
    <ConvexProvider client={convex}>
      {screen === "todo" && userId ? (
        <TodoScreen userId={userId} />
      ) : screen === "signup" ? (
        <SignupScreen
          onSignUp={handleSignUp}
          onNavigateLogin={() => setScreen("login")}
        />
      ) : (
        <LoginScreen
          onLogin={handleLogin}
          onNavigateSignUp={() => setScreen("signup")}
        />
      )}
    </ConvexProvider>
  );
}

