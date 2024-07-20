import FormLogin from "@/app/ui/form/form-login";
import { Card } from "antd";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  async function handleSuccess() {
    "use server";

    cookies().set("access-token", "example-access-token");
    redirect("/");
  }

  return (
    <Card title="Login" className="max-w-[360px]">
      <FormLogin onSuccess={handleSuccess} />
    </Card>
  );
}
