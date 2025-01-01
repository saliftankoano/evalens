"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { BrainLogo } from "@/components/brain-logo";
import { signIn } from "@/app/actions";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-[#1a1d21] flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[900px] grid md:grid-cols-2 items-stretch min-h-[600px]">
          {/* Left side - Brain visualization */}
          <div className="hidden md:block relative h-full">
            <Image
              src="/brain.png"
              alt="Neural network visualization"
              fill
              className="object-cover rounded-l-2xl"
              priority
            />
          </div>

          {/* Right side - Auth form */}
          <div className="w-full max-w-md mx-auto space-y-6 p-6 rounded-r-2xl bg-[#22262b]">
            <div className="flex items-center gap-2 mb-8">
              <BrainLogo />
              <span className="text-white text-xl font-semibold">Evalens</span>
            </div>

            <div className="flex gap-4 border-b border-gray-800 mb-6">
              <button
                onClick={() => setIsSignIn(true)}
                className={`pb-2 px-1 ${
                  isSignIn
                    ? "text-purple-500 border-b-2 border-purple-500"
                    : "text-gray-400"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignIn(false)}
                className={`pb-2 px-1 ${
                  !isSignIn
                    ? "text-purple-500 border-b-2 border-purple-500"
                    : "text-gray-400"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Sign in form */}
            <form className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-gray-200">Email Address</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#2b3035] border-0 text-gray-200 placeholder:text-gray-500"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-gray-200">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-[#2b3035] border-0 text-gray-200 placeholder:text-gray-500"
                />
              </div>
              {/* Remember me and forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    className="border-gray-600 data-[state=checked]:bg-purple-500"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-400">
                    Remember me
                  </label>
                </div>
                <Link
                  href="#"
                  className="text-sm text-purple-500 hover:text-purple-400"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                formAction={signIn}
              >
                Sign In
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-400 bg-[#22262b]">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="bg-[#2b3035] border-0 text-gray-200 hover:bg-[#343a40]"
                >
                  <Image
                    src="/google.png"
                    alt="Google"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Button>
                <Button
                  variant="outline"
                  className="bg-[#2b3035] border-0 text-gray-200 hover:bg-[#343a40]"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-[#2b3035] border-0 text-gray-200 hover:bg-[#343a40]"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="p-4 flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <BrainLogo />
          <span>© 2025 Evalens. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-gray-300">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </svg>
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
