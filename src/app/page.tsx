import { SignInComponent } from "@/components/SignInComponent";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="text-center text-2xl font-semibold mt-20">
        Auth.js demo Next.js application
      </h1>
      <SignInComponent />
    </main>
  );
}
