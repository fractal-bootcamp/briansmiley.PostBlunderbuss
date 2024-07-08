import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="flex bg-slate-300 p-2 justify-between">
        <div></div>
        <div className="">
          <SignedOut>
            <div className="bg-blue-400 text-white px-2 py-1 rounded-md w-fit">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      Home
    </div>
  );
}

export default App;
