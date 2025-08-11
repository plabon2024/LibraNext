import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: " " },
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email" },
      },
     async authorize(credentials) {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    if (!res.ok) {
      // Login failed
      return null;
    }
        const user = await res.json();
        console.log(user);
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
      callbacks: {
        async signIn({ user, account, profile }) {
          console.log("form callback", user);
          console.log(account);
          console.log(profile);

          const userCollection = dbConnect("users");
          const exitstingUser = await userCollection.findOne({
            email: user.email,
          });
          if (!exitstingUser) {
            await userCollection.insertOne({
              name: user.name,
              email: user.email,
              role: "user", // default role
              image: user.image || "",
              createdAt: new Date(),
              isVerified: profile.email_verified,
              status: "active", // or "pending"
              provider: account.provider,
            });
          }
          return true;
        },
        async jwt({ token, user }) {
          if (user) {
            if (user.provider && user.provider !== "credentials") {
              const fullUser = await dbConnect("users").findOne({
                email: user.email,
              });
              if (fullUser) {
                token.user = fullUser;
              }
            } else {
              token.user = user;
            }
          }
          return token;
        },
        async session({ session, token }) {
          session.user = token.user;
          return session;
        },
      },
      pages: {
        signIn: "/signin",
      },
      session: {
        strategy: "jwt",
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
