"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, HeartHandshake, Facebook, MessageCircle, Coffee, Sunrise, Dog } from "lucide-react";
import { mockUsers } from "@/lib/mock";
import { notFound } from "next/navigation";

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const user = mockUsers.find(u => u.id === resolvedParams.id);

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-stone-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Back to Map
          </Link>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-rose-500" />
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Profile Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-100 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0 relative">
              <Image 
                src={user.avatar} 
                alt={user.name} 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-serif font-medium text-stone-900">{user.name}, {user.age}</h1>
                  <div className="flex items-center gap-2 text-stone-500 mt-2">
                    <MapPin className="w-4 h-4" /> {user.location}
                    <span className="w-1 h-1 rounded-full bg-stone-300 mx-1" />
                    <span className="font-medium text-rose-600">Looking for: {user.lookingFor}</span>
                  </div>
                </div>
                
                {/* Social Links - Primary CTA */}
                <div className="flex flex-wrap gap-3">
                  {user.socialLinks.whatsapp && (
                    <a 
                      href={`https://wa.me/${user.socialLinks.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#20bd5a] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-5 h-5" /> WhatsApp
                    </a>
                  )}
                  {user.socialLinks.facebook && (
                    <a 
                      href={`https://facebook.com/${user.socialLinks.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      <Facebook className="w-5 h-5" /> Facebook
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
                {user.bio}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="md:col-span-2 space-y-8">
            {/* Q&A Section */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
              <h2 className="text-2xl font-serif font-medium text-stone-900 mb-6 flex items-center gap-2">
                <Coffee className="w-6 h-6 text-rose-500" /> Get to know me
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-2">Ideal Weekend</h3>
                  <p className="text-stone-800 text-lg leading-relaxed bg-stone-50 p-4 rounded-2xl border border-stone-100">
                    &quot;{user.answers.idealWeekend}&quot;
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                    <h3 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Sunrise className="w-4 h-4" /> Routine
                    </h3>
                    <p className="text-stone-800 font-medium">{user.answers.earlyBirdOrNightOwl}</p>
                  </div>
                  
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                    <h3 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Dog className="w-4 h-4" /> Pets
                    </h3>
                    <p className="text-stone-800 font-medium">{user.answers.pets}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Interests */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
              <h2 className="text-2xl font-serif font-medium text-stone-900 mb-6">Interests</h2>
              <div className="flex flex-wrap gap-3">
                {user.interests.map(interest => (
                  <span 
                    key={interest} 
                    className="px-4 py-2 bg-rose-50 text-rose-900 border border-rose-100 rounded-xl font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Connect CTA */}
            <section className="bg-stone-900 text-stone-50 rounded-3xl p-6 shadow-sm">
              <h2 className="text-xl font-serif font-medium mb-2">Say Hello!</h2>
              <p className="text-stone-400 text-sm mb-6">
                Reach out to {user.name.split(' ')[0]} to introduce yourself and maybe plan a meetup.
              </p>
              
              <div className="space-y-3">
                {user.socialLinks.whatsapp && (
                  <a 
                    href={`https://wa.me/${user.socialLinks.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-medium transition-colors"
                  >
                    <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</span>
                    <ArrowLeft className="w-4 h-4 rotate-135" />
                  </a>
                )}
                {user.socialLinks.facebook && (
                  <a 
                    href={`https://facebook.com/${user.socialLinks.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                  >
                    <span className="flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</span>
                    <ArrowLeft className="w-4 h-4 rotate-135" />
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
