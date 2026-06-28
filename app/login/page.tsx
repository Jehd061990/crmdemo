"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { UserCircle, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40"
      >
        <div className="mb-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-sky-400 shadow-lg shadow-slate-950/20">
            <UserCircle className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold text-white">
            Welcome back
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Sign in to access the Jandoc Software CRM demo.
          </p>
        </div>

        <div className="space-y-5">
          <label className="block text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Email
          </label>
          <div className="flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3">
            <UserCircle className="h-5 w-5 text-slate-400" />
            <input
              type="email"
              placeholder="casey@jandoc.com"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <label className="block text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Password
          </label>
          <div className="flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3">
            <Lock className="h-5 w-5 text-slate-400" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="flex w-full items-center justify-center gap-3 rounded-3xl bg-sky-500 px-5 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-sky-400"
          >
            <span>Sign in</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-center text-sm text-slate-500">
            Demo login only. No credentials required.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
