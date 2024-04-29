
import { signIn } from "../../auth";

export function SignInComponent() {
  return (
    <form
      action={async () => {
        "use server";
        // await signIn("", ({callbackUrl: '/dashboard', redirect: true}));
        await signIn("", { redirectTo: "/dashboard" })
      }}
      className="flex justify-center my-8"
    >
      <button
        type="submit"
        className="px-8 py-2 border border-slate-300 w-[15rem]"
      >
        Signin
      </button>
    </form>
  );
}