import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function GET() {
  cookies().delete("access-token");
  redirect("/login");
}
