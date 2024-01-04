// import {
//   SignOutButton,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   useClerk,
// } from "@clerk/clerk-react";
// import KeyPressMenu from "./KeyPressMenu";
// interface SignOutButtonProps {
//   afterSignOutUrl?: string;
// }
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import HomeComp from "./HomeComp";
import Menu from "./Menu";

function App() {
  const user = useUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        {user.isSignedIn && <Route path="/menu" element={<Menu />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
