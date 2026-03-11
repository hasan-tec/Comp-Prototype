"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, Check, Camera } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LOOKING_FOR = ["Friendship", "Romance", "Activity Partner", "Just Chatting"];
const INTERESTS = [
  "Gardening", "Reading", "Theater", "Walking", "History", 
  "Fine Dining", "Golf", "Travel", "Cooking", "Classic Cars",
  "Art Galleries", "Painting", "Classical Music", "Yoga", "Wine Tasting"
];

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    age: "",
    lookingFor: "",
    interests: [] as string[],
    idealWeekend: "",
    earlyBirdOrNightOwl: "",
    pets: "",
    whatsapp: "",
    facebook: "",
  });

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else router.push("/dashboard");
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header & Progress */}
      <header className="p-6 md:p-8 flex items-center justify-between">
        <div className="font-serif font-bold text-xl text-stone-900">Companions</div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium text-stone-500">Step {step} of {totalSteps}</div>
          <div className="w-32 h-2 bg-stone-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-rose-500 transition-all duration-300 ease-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Form Area */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100"
            >
              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-serif font-medium mb-2">Let&apos;s get to know you</h2>
                    <p className="text-stone-500 text-lg">What should we call you and where are you based?</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                        placeholder="e.g. Robert Davis"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">Neighborhood or City</label>
                      <input 
                        type="text" 
                        value={formData.location}
                        onChange={(e) => updateForm("location", e.target.value)}
                        placeholder="e.g. Downtown Area"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-lg"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-serif font-medium mb-2">What brings you here?</h2>
                    <p className="text-stone-500 text-lg">Tell us a bit about what you are looking for.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">Age</label>
                      <input 
                        type="number" 
                        value={formData.age}
                        onChange={(e) => updateForm("age", e.target.value)}
                        placeholder="e.g. 62"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-lg"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-stone-700">I am primarily looking for...</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {LOOKING_FOR.map(style => (
                          <button
                            key={style}
                            onClick={() => updateForm("lookingFor", style)}
                            className={`px-4 py-4 rounded-xl border text-left transition-colors text-lg ${
                              formData.lookingFor === style 
                                ? "border-rose-500 bg-rose-50 text-rose-900 font-medium" 
                                : "border-stone-200 hover:border-stone-300 text-stone-700"
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-serif font-medium mb-2">What do you enjoy?</h2>
                    <p className="text-stone-500 text-lg">Select your interests to find people who share them.</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {INTERESTS.map(interest => {
                      const isSelected = formData.interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          onClick={() => toggleInterest(interest)}
                          className={`px-5 py-3 rounded-full border transition-all text-lg ${
                            isSelected 
                              ? "border-rose-500 bg-rose-500 text-white font-medium shadow-sm" 
                              : "border-stone-200 bg-white hover:border-stone-300 text-stone-700"
                          }`}
                        >
                          {isSelected && <Check className="w-5 h-5 inline-block mr-2 -ml-1" />}
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-serif font-medium mb-2">A bit more detail</h2>
                    <p className="text-stone-500 text-lg">Help others understand your personality.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">Describe your ideal weekend</label>
                      <textarea 
                        value={formData.idealWeekend}
                        onChange={(e) => updateForm("idealWeekend", e.target.value)}
                        placeholder="A long walk in the park followed by reading..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 resize-none text-lg"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-stone-700">Are you an early bird or night owl?</label>
                      <div className="flex flex-col sm:flex-row gap-4">
                        {["Early Bird", "Night Owl", "A bit of both"].map(opt => (
                          <button
                            key={opt}
                            onClick={() => updateForm("earlyBirdOrNightOwl", opt)}
                            className={`flex-1 py-3 px-4 rounded-xl border transition-colors text-lg ${
                              formData.earlyBirdOrNightOwl === opt
                                ? "border-rose-500 bg-rose-50 text-rose-900 font-medium" 
                                : "border-stone-200 hover:border-stone-300 text-stone-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">Do you have any pets?</label>
                      <input 
                        type="text" 
                        value={formData.pets}
                        onChange={(e) => updateForm("pets", e.target.value)}
                        placeholder="e.g. I have a golden retriever named Max."
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-lg"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-serif font-medium mb-2">How should people reach you?</h2>
                    <p className="text-stone-500 text-lg">Add your contact info so matches can message you.</p>
                  </div>
                  
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full bg-stone-100 border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 cursor-pointer hover:bg-stone-50 hover:border-rose-400 transition-colors">
                      <Camera className="w-8 h-8 mb-2" />
                      <span className="text-sm font-medium">Add Photo</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">WhatsApp Number (Optional)</label>
                      <input 
                        type="tel" 
                        value={formData.whatsapp}
                        onChange={(e) => updateForm("whatsapp", e.target.value)}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-lg"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-stone-700">Facebook Profile Link (Optional)</label>
                      <input 
                        type="text" 
                        value={formData.facebook}
                        onChange={(e) => updateForm("facebook", e.target.value)}
                        placeholder="facebook.com/yourname"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-lg"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-10 flex items-center justify-between pt-6 border-t border-stone-100">
                <button 
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`flex items-center gap-2 px-4 py-3 text-lg font-medium transition-opacity ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-stone-500 hover:text-stone-900'}`}
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                
                <button 
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-lg font-medium transition-colors"
                >
                  {step === totalSteps ? "Complete Profile" : "Continue"} 
                  {step !== totalSteps && <ArrowRight className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
