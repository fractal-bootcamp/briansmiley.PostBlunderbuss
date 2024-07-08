import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
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
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link
            className="bg-blue-400 text-white px-2 py-1 rounded-md w-fit"
            to="/sign-in"
          >
            Sign In
          </Link>
        </SignedOut>
      </div>
    </header>
  );
};

export default Navbar;
