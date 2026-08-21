import { LogOut } from "lucide-react";
import { signOut } from "../auth";

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button
        type="submit"
        className="group flex items-center gap-2 rounded-full border border-[#DDD3CB] bg-white px-4 py-2 text-sm font-medium text-text transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
      >
        <LogOut className="h-4 w-4 text-gray-400 transition-colors group-hover:text-red-500" />
        Sair
      </button>
    </form>
  );
};

export default SignOutButton;
