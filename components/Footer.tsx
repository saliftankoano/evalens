import { Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="container flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <Link href="#" className="hover:text-gray-300">
            Documentation
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Support
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
        <div className="text-sm text-gray-400">
          © 2025 Evalens. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
