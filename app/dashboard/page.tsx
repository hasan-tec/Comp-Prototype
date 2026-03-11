"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Search, MapPin, Users, Filter, HeartHandshake, Map as MapIcon, List } from "lucide-react";
import { mockUsers, mockActivities } from "@/lib/mock";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"people" | "activities">("people");
  const [viewMode, setViewMode] = useState<"list" | "map">("map");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-rose-500" />
            <span className="font-serif font-bold text-xl tracking-tight text-stone-900">Companions</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/profile/1">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-stone-200 hover:border-rose-300 transition-colors">
                <Image src="https://picsum.photos/seed/robert/100/100" alt="Profile" width={36} height={36} />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header & Search */}
        <div className="mb-8 space-y-6">
          <h1 className="text-4xl font-serif font-medium text-stone-900">Discover nearby</h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
              <input 
                type="text" 
                placeholder="Search by name or interest..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 bg-white shadow-sm text-lg"
              />
            </div>
            <button className="px-6 py-3 bg-white border border-stone-200 rounded-2xl flex items-center justify-center gap-2 font-medium text-stone-700 hover:bg-stone-50 transition-colors shadow-sm">
              <Filter className="w-5 h-5" /> Filters
            </button>
          </div>
        </div>

        {/* Tabs & View Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 mb-8">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setActiveTab("people")}
              className={`pb-4 text-lg font-medium transition-colors relative ${
                activeTab === "people" ? "text-stone-900" : "text-stone-400 hover:text-stone-600"
              }`}
            >
              People
              {activeTab === "people" && (
                <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab("activities")}
              className={`pb-4 text-lg font-medium transition-colors relative ${
                activeTab === "activities" ? "text-stone-900" : "text-stone-400 hover:text-stone-600"
              }`}
            >
              Meetups
              {activeTab === "activities" && (
                <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500" />
              )}
            </button>
          </div>

          <div className="flex items-center bg-stone-100 p-1 rounded-xl mb-4 sm:mb-0 self-start sm:self-auto">
            <button 
              onClick={() => setViewMode("map")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === "map" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"
              }`}
            >
              <MapIcon className="w-4 h-4" /> Map
            </button>
            <button 
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === "list" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"
              }`}
            >
              <List className="w-4 h-4" /> List
            </button>
          </div>
        </div>

        {/* Map View */}
        {viewMode === "map" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full h-[600px] bg-stone-200 rounded-3xl overflow-hidden border border-stone-300 shadow-sm"
          >
            {/* Fake Map Background */}
            <Image 
              src="https://picsum.photos/seed/citymap/1600/1200?grayscale" 
              alt="Map Background" 
              fill 
              className="object-cover opacity-60 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            
            {/* Map Overlay to make it look more like a map */}
            <div className="absolute inset-0 bg-amber-50/30" />

            {/* Pins */}
            {(activeTab === "people" ? mockUsers : mockActivities).map((item: any) => (
              <div 
                key={item.id} 
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${item.coordinates.x}%`, top: `${item.coordinates.y}%` }}
              >
                <div className="relative group cursor-pointer">
                  {/* Pin Icon */}
                  <div className="relative flex items-center justify-center">
                    <MapPin className={`w-10 h-10 drop-shadow-md ${activeTab === 'people' ? 'text-rose-600' : 'text-amber-600'}`} fill="currentColor" />
                    {activeTab === 'people' && (
                      <div className="absolute top-1.5 w-5 h-5 rounded-full overflow-hidden">
                        <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                      </div>
                    )}
                  </div>

                  {/* Tooltip / Popover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden z-50">
                    {activeTab === "people" ? (
                      <Link href={`/profile/${item.id}`} className="block">
                        <div className="h-24 relative">
                          <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif font-medium text-lg text-stone-900">{item.name}, {item.age}</h3>
                          <p className="text-sm text-stone-500 mb-2">{item.lookingFor}</p>
                          <p className="text-sm text-stone-600 line-clamp-2">{item.bio}</p>
                        </div>
                      </Link>
                    ) : (
                      <div className="p-4">
                        <h3 className="font-serif font-medium text-lg text-stone-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-rose-600 font-medium mb-2">{item.date}</p>
                        <p className="text-sm text-stone-600 line-clamp-2 mb-3">{item.description}</p>
                        <div className="text-xs text-stone-500 flex items-center gap-1">
                          <Users className="w-3 h-3" /> {item.attendees} attending
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Fake Map Controls */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-stone-600 hover:text-stone-900 font-medium text-xl">+</button>
              <button className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-stone-600 hover:text-stone-900 font-medium text-xl">-</button>
            </div>
          </motion.div>
        )}

        {/* List View */}
        {viewMode === "list" && activeTab === "people" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockUsers.map((user) => (
              <Link href={`/profile/${user.id}`} key={user.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer h-full flex flex-col"
                >
                  <div className="h-56 relative overflow-hidden">
                    <Image 
                      src={user.avatar} 
                      alt={user.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-700">
                      Looking for: {user.lookingFor}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-medium text-stone-900">{user.name}, {user.age}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-stone-500 text-sm mb-4">
                      <MapPin className="w-4 h-4" /> {user.location}
                    </div>
                    <p className="text-stone-600 text-sm line-clamp-2 mb-4 flex-1">
                      {user.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {user.interests.slice(0, 3).map(interest => (
                        <span key={interest} className="px-2.5 py-1 bg-rose-50 text-rose-700 rounded-lg text-xs font-medium">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}

        {viewMode === "list" && activeTab === "activities" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockActivities.map((activity) => (
              <motion.div 
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-medium text-stone-900">{activity.title}</h3>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium whitespace-nowrap">
                    {activity.date}
                  </span>
                </div>
                
                <p className="text-stone-600 text-sm mb-6 line-clamp-2">
                  {activity.description}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-100">
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {activity.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {activity.attendees}/{activity.maxAttendees}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-xs text-stone-500 text-right">
                      Hosted by<br/>
                      <Link href={`/profile/${activity.hostId}`} className="font-medium text-stone-900 hover:text-rose-600">
                        {activity.host}
                      </Link>
                    </div>
                    <Link href={`/profile/${activity.hostId}`}>
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-200">
                        <Image src={`https://picsum.photos/seed/${activity.host.split(' ')[0].toLowerCase()}/100/100`} alt={activity.host} width={40} height={40} />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
