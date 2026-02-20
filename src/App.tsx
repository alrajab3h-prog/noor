/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trees, Ship, Castle, Waves, HeartPulse, Sun, Shield, Flower, 
  Handshake, Flag, BookOpen, GraduationCap, FlaskConical, 
  Smile, Bird, Sparkles, Cloud, Leaf, Globe, ChevronRight, 
  Book, Star, Heart, Lightbulb, Activity as ActivityIcon,
  X
} from 'lucide-react';
import { prophets, infallibles, Person } from './data';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const iconMap: Record<string, React.ReactNode> = {
  Trees: <Trees className="w-8 h-8" />,
  Ship: <Ship className="w-8 h-8" />,
  Castle: <Castle className="w-8 h-8" />,
  Waves: <Waves className="w-8 h-8" />,
  HeartPulse: <HeartPulse className="w-8 h-8" />,
  Sun: <Sun className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Flower: <Flower className="w-8 h-8" />,
  Handshake: <Handshake className="w-8 h-8" />,
  Flag: <Flag className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
  GraduationCap: <GraduationCap className="w-8 h-8" />,
  FlaskConical: <FlaskConical className="w-8 h-8" />,
  Smile: <Smile className="w-8 h-8" />,
  Bird: <Bird className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  Leaf: <Leaf className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'prophets' | 'infallibles'>('prophets');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const currentData = activeTab === 'prophets' ? prophets : infallibles;

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-slate-800 font-sans selection:bg-amber-200" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-amber-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-amber-400 p-2 rounded-2xl shadow-lg shadow-amber-200">
              <Star className="text-white w-6 h-6 fill-white" />
            </div>
            <h1 className="text-2xl font-bold text-amber-900 tracking-tight">نور الهدى</h1>
          </div>
          
          <nav className="flex bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('prophets')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200",
                activeTab === 'prophets' 
                  ? "bg-white text-amber-600 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              الأنبياء
            </button>
            <button
              onClick={() => setActiveTab('infallibles')}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200",
                activeTab === 'infallibles' 
                  ? "bg-white text-amber-600 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              المعصومون
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Intro Section */}
        <section className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
          >
            {activeTab === 'prophets' ? 'قصص الأنبياء العظماء' : 'سيرة المعصومين الأربعة عشر'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            هيا بنا نتعلم من قصصهم الجميلة ونقتدي بأخلاقهم الرائعة!
          </motion.p>
        </section>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {currentData.map((person, index) => (
              <motion.div
                key={person.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                onClick={() => setSelectedPerson(person)}
                className={cn(
                  "cursor-pointer group relative overflow-hidden rounded-3xl border-2 p-6 transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95",
                  person.color
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/50 rounded-2xl group-hover:scale-110 transition-transform">
                    {iconMap[person.icon]}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-60 bg-white/30 px-3 py-1 rounded-full">
                    {person.title}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-sm line-clamp-2 opacity-80 leading-relaxed">
                  {person.bio}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>اقرأ المزيد</span>
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPerson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPerson(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className={cn("p-8 flex items-center justify-between", selectedPerson.color)}>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/50 rounded-2xl shadow-inner">
                    {iconMap[selectedPerson.icon]}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black">{selectedPerson.name}</h2>
                    <p className="font-bold opacity-70">{selectedPerson.title}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPerson(null)}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto custom-scrollbar space-y-8">
                {/* Bio */}
                <section>
                  <div className="flex items-center gap-2 mb-3 text-amber-600">
                    <Book className="w-5 h-5" />
                    <h4 className="font-bold text-lg">السيرة</h4>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {selectedPerson.bio}
                  </p>
                </section>

                {/* Wisdom */}
                <section className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                  <div className="flex items-center gap-2 mb-3 text-amber-700">
                    <Lightbulb className="w-5 h-5" />
                    <h4 className="font-bold text-lg">الحكمة والدرس</h4>
                  </div>
                  <p className="text-amber-900 leading-relaxed italic">
                    "{selectedPerson.wisdom}"
                  </p>
                </section>

                {/* Activity */}
                <section className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <div className="flex items-center gap-2 mb-3 text-emerald-700">
                    <ActivityIcon className="w-5 h-5" />
                    <h4 className="font-bold text-lg">نشاط مقترح</h4>
                  </div>
                  <p className="text-emerald-900 leading-relaxed">
                    {selectedPerson.activity}
                  </p>
                </section>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-100 flex justify-center">
                <button
                  onClick={() => setSelectedPerson(null)}
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                >
                  فهمت، شكراً!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-12 text-center border-t border-slate-100 mt-12">
        <p className="text-slate-400 text-sm">
          تطبيق تعليمي للأطفال - {new Date().getFullYear()}
        </p>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}
