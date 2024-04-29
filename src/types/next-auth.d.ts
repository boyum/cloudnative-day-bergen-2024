import { Speaker } from "@/lib/proposal/types";
import NextAuth, { Account } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      picture: string;
    };
    speaker?: Speaker;
    account?: Account;
  }
}
