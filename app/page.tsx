"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, MapPin, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-stone-50 text-stone-900">
      {/* Left side - Image & Branding */}
      <div className="md:w-1/2 relative hidden md:flex flex-col justify-between p-12 overflow-hidden bg-stone-900 text-stone-50">
        <Image
          src="https://picsum.photos/seed/mature/1200/1600"
          alt="Mature couple laughing"
          fill
          className="object-cover opacity-50"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-stone-900/30" />
        
        <div className="relative z-10 flex items-center gap-2">
          <HeartHandshake className="w-8 h-8 text-rose-500" />
          <span className="text-2xl font-serif font-bold tracking-tight">Companions</span>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-5xl font-serif font-medium leading-tight mb-6">
            Meaningful connections for your next chapter.
          </h1>
          <p className="text-lg text-stone-300 mb-8">
            Whether you&apos;re looking for romance, a golf partner, or someone to share a coffee with, find like-minded people in your area.
          </p>
          
          <div className="flex items-center gap-4 text-sm font-medium text-stone-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Local to you
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" /> 50+ Community
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="md:hidden flex items-center gap-2 mb-8">
            <HeartHandshake className="w-8 h-8 text-rose-500" />
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900">Companions</span>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-medium mb-2">Welcome back</h2>
            <p className="text-stone-500">Sign in to see who&apos;s nearby.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-stone-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="hello@example.com"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-colors"
              />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-stone-700">Password</label>
                <a href="#" className="text-sm font-medium text-rose-600 hover:text-rose-700">Forgot password?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-colors"
              />
            </div>

            <Link href="/dashboard" className="block">
              <button type="button" className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
                Sign In <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-stone-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="py-2.5 px-4 border border-stone-200 rounded-xl hover:bg-stone-50 font-medium text-stone-700 transition-colors">
                Facebook
              </button>
              <button type="button" className="py-2.5 px-4 border border-stone-200 rounded-xl hover:bg-stone-50 font-medium text-stone-700 transition-colors">
                Google
              </button>
            </div>
          </form>

          <p className="text-center text-stone-500 text-sm mt-8">
            New here?{' '}
            <Link href="/onboarding" className="font-medium text-rose-600 hover:text-rose-700">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
