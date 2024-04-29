import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      // credentials here shows the structure of the fields to be passed through
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log(credentials.email, credentials.password);
        // hash the password

        // verify if user exists in the database

        if (
          credentials.email === "test@gmail.com" &&
          credentials.password === "qwertyui"
        ) {
          return {
            email: "test@gmail.com",
          };
        }
        throw new Error("Invalid credentials");
      },
    }),
  ],
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     // Allows relative callback URLs

  //     console.log("yyyyeyyeyey", baseUrl)
  //     // if (url.startsWith("/dashboard")) return `${baseUrl}${url}`
   
  //     // Allows callback URLs on the same origin
  //     // if (new URL(url).origin === baseUrl) return url
   
  //     return "/dashboard"
  //   }
  // }

  // callbacks: {
  //   authorized({ auth, request: { nextUrl } }){
  //     const isLoggedIn = !!auth?.user
  //     const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

  //     console.log("isLoggedIn", isLoggedIn)
  //     if(isOnDashboard) {
  //       if(isLoggedIn) return true;
  //       return false;
  //     } else if(isLoggedIn) {
  //       return Response.redirect(new URL("/dashboard", nextUrl))
  //     }
  //     return true;

      
  //   }
    
  // }
  
}
);
