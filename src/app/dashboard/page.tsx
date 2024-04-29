import { auth, signOut } from "../../../auth";

type Props = {};

export default async function Page({}: Props) {
  const session = await auth()
  if (!session) return <h2>Not authenticated</h2>

  return (
    <main>
      <h1 className="text-2xl">{session?.user?.email}</h1>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit" className="m-4 text-red-500">Sign Out</button>
      </form>
    </main>
  );
}
