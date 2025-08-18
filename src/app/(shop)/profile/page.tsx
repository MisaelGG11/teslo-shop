import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage(){
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div>
      <Title title="Profile" />
      <p>Welcome, {session.user.name}!</p>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
