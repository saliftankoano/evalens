import { BadgeCheck } from "lucide-react";
export default function Confirm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <BadgeCheck className="w-16 h-16 text-green-500" />
      <h1 className="text-2xl font-bold text-white">Confirm your email</h1>
      <p className="text-gray-500 dark:text-purple-500">
        We've sent you an email to confirm your account. Please check your inbox
        and click the link to confirm your email.
      </p>
    </div>
  );
}
