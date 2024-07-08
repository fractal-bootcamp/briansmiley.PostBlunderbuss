import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton
} from "@clerk/clerk-react";
import Blunderbuss from "../assets/blunderbuss.svg";
import { Send, SendHorizonal } from "lucide-react";
const Navbar = () => {
  return (
    <header className="flex items-center bg-slate-300 p-2 justify-between">
      <div className="flex items-center">
        <img src={Blunderbuss} className="w-20" alt="blunderbuss" />
        <Send size={40} />
        <SendHorizonal size={40} />
        <Send size={40} />
        <SendHorizonal size={40} />
        <Send size={40} />
        <SendHorizonal size={40} />
        <Send size={40} />
        <SendHorizonal size={40} />
      </div>
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
  );
};

export default Navbar;
