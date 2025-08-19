import { auth } from "@/auth.config";
import { Title } from "@/components";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaShieldAlt } from "react-icons/fa";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) redirect("/");

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "moderator":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "user":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center p-6">
      <Title title="Profile" />
      <div className="rounded-lg shadow-lg max-w-lg mt-10 w-full">
        <div className="text-center p-6 pb-4">
          <div className="flex justify-center mb-4">
            <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-700">
              {session.user.image ? (
                <Image
                  src={session.user.image || "/placeholder.svg"}
                  alt={session.user.name}
                  width={30}
                  height={30}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-4xl font-semibold text-gray-300">
                  {getInitials(session.user.name)}
                </div>
              )}
            </div>
          </div>
          <h2 className="text-2xl font-bold">
            {session.user.name}
          </h2>
          <div className="flex justify-center mt-2">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getRoleColor(
                session.user.role
              )}`}
            >
              {session.user.role}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold">
            Profile Information
          </h3>
          <div className="mt-4">
            <p className="">
              <strong>Email:</strong> {session.user.email}
            </p>
            <p className="">
              <strong>Account Status:</strong>{" "}
              {session.user.emailVerified ? "Verified" : "Unverified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
