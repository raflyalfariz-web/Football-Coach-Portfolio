/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import profilePic from './assets/images/regenerated_image_1778238868392.png';
import { 
  Trophy, 
  Target, 
  Shield, 
  Zap, 
  Map as MapIcon, 
  ChevronRight, 
  ChevronLeft, 
  User, 
  History, 
  Brain, 
  Focus,
  Activity,
  Layers,
  ArrowRightLeft,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';

// --- Data Structures ---

const MILESTONES = [
  { year: '2020-2021', role: 'Amateur Player', team: 'Voetbalvereniging WIK', location: 'Den Haag, Netherlands', active: false },
  { year: '2021-2022', role: 'Semi-pro Player', team: 'Serpong City FC', location: 'Liga 3 Banten', active: false },
  { year: '2023-2024', role: 'U-13 Head Coach', team: 'TCS Soccer', location: '', active: false },
  { year: '2024-2025', role: 'International School Coach', team: 'Brazilian Soccer School', location: '', active: false },
  { year: '2025-2026', role: 'U-12 Head Coach', team: 'Borussia Mönchengladbach Academy Indonesia', location: '', active: true },
];

const PHILOSOPHY_COACHING = [
  { title: 'Integrity', desc: 'Leading by example and maintaining professional standards on and off the pitch.', tag: 'HONESTY' },
  { title: 'Intellectual', desc: 'Continuous learning and application of modern footballing concepts.', tag: 'STRATEGY' },
  { title: 'Holistic', desc: 'Developing the player as a whole individual: technical, tactical, physical, and mental.', tag: 'PLAYER DEV' },
];

const PHILOSOPHY_FOOTBALL = [
  { title: 'Positional Play', desc: 'Dominating space through structural superiority and player orientation.', icon: Layers },
  { title: 'Progressive Build up', desc: 'Structured advancement from the back utilizing numerical overloads.', icon: Zap },
  { title: 'Structured Defending', desc: 'Coordinated press and block organization to recover possession efficiently.', icon: Shield },
];

const TACTICS = {
  formation: '4-3-3',
  variations: [
    { name: 'Attack (3-4-3)', desc: 'Fullbacks push high as wingbacks to provide width.' },
    { name: 'Defend (4-5-1)', desc: 'Compact mid-to-low block for solidity.' }
  ],
  keyRoles: [
    { title: 'Sweeper Keeper', desc: 'Advanced positioning to sweep behind the high line.', color: 'text-accent' },
    { title: 'Ball Playing Defender', desc: 'Center backs split wide to create passing lanes during build-up.', color: 'text-accent' },
    { title: 'Deep Lying Playmaker', desc: 'CDM drops between CBs to facilitate progression.', color: 'text-accent' },
    { title: 'Attacking Fullback', desc: 'Fullbacks hug touchlines to stretch the opponent horizontally.', color: 'text-accent' },
    { title: 'Box-to-Box Midfielder', desc: 'Dynamic runner connecting phases of play.', color: 'text-accent' },
    { title: 'Advanced Playmaker', desc: 'Creative hub operating in the half-spaces.', color: 'text-accent' },
    { title: 'Complete Forward', desc: 'Drops deep to link play, runs in behind to stretch defense.', color: 'text-accent' }
  ],
  possession: [
    'Triangle Rules: Constant support networks',
    'Zone Overloads: Creating local 2v1 or 3v2 scenarios',
    'High Line: Minimizing space between lines'
  ],
  outOfPossession: [
    'High Block Defending: Pressuring high up the pitch',
    'Quick Transition: Immediate action post-turnover',
    'Counter Press: Aggressive recovery within 5 seconds'
  ]
};

const TRAINING_CORE = [
  { 
    title: 'Attacking', 
    color: 'bg-accent', 
    icon: <Zap size={24} />,
    desc: 'Focus on structural superiority, utilizing width to stretch opponents and penetrating through central "pockets" with deliberate 3rd man runs.',
    intensity: 85
  },
  { 
    title: 'Positive Transition', 
    color: 'bg-accent', 
    icon: <ArrowUpRight size={24} />,
    desc: 'Converting ball recovery into offensive threat within seconds. Prioritizing verticality and immediate exploitation of disorganized defensive lines.',
    intensity: 95
  },
  { 
    title: 'Defending', 
    color: 'bg-blue-500', 
    icon: <Shield size={24} />,
    desc: 'Organized high-block implementation. Denying central progression while forcing play into predictable pressing traps in wide areas.',
    intensity: 90
  },
  { 
    title: 'Negative Transition', 
    color: 'bg-blue-500', 
    icon: <ArrowDownLeft size={24} />,
    desc: 'Instant "5-second rule" counter-press. Aggressive recovery of the ball or tactical fouling to prevent opposition counters and allow shape reset.',
    intensity: 100
  }
];

const TrainingSlide = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center min-h-full py-6 md:py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRAINING_CORE.map((training, i) => (
          <motion.div 
            key={training.title}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedIdx(i)}
            className={`bg-neutral-900 border cursor-pointer rounded-xl p-8 flex flex-col justify-between group transition-all ${selectedIdx === i ? 'border-accent bg-neutral-800/80 shadow-[0_0_20px_rgba(0,255,65,0.1)]' : 'border-neutral-800 hover:bg-neutral-800/50'}`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`font-mono text-[10px] font-bold tracking-[0.2em] transition-colors ${selectedIdx === i ? 'text-accent' : 'text-neutral-600'}`}>WEEK_0{i+1}</span>
                <div className={`${selectedIdx === i ? 'text-accent' : 'text-neutral-700'}`}>
                  {training.icon}
                </div>
              </div>
              <h3 className={`text-xl font-black uppercase tracking-tight leading-tight mb-4 transition-colors ${selectedIdx === i ? 'text-white' : 'text-neutral-300 group-hover:text-accent'}`}>{training.title}</h3>
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-end mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400">Intensity</span>
                <span className="text-[10px] font-mono text-white font-bold uppercase">{training.intensity}%</span>
              </div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                 <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${training.intensity}%` }}
                  className={`h-full ${training.color}`} 
                 />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        layout
        className="mt-6 md:mt-12 p-6 md:p-10 bg-neutral-900 border-x border-neutral-800 text-center relative overflow-hidden min-h-[140px] md:min-h-[160px] flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIdx ?? 'default'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-3xl"
          >
            <p className="text-neutral-400 italic font-light text-2xl tracking-tighter leading-tight px-4">
              {selectedIdx !== null ? TRAINING_CORE[selectedIdx].desc : '"Systemic intelligence over reactive play."'}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent" />
      </motion.div>
    </div>
  );
};

const POSITIONS: Record<string, Record<number, { bottom: string, left: string }>> = {
  '4-3-3': {
    1: { bottom: '5%', left: '50%' },
    5: { bottom: '20%', left: '10%' },
    4: { bottom: '18%', left: '32%' },
    3: { bottom: '18%', left: '68%' },
    2: { bottom: '20%', left: '90%' },
    6: { bottom: '40%', left: '50%' },
    10: { bottom: '58%', left: '25%' },
    8: { bottom: '58%', left: '75%' },
    11: { bottom: '80%', left: '15%' },
    9: { bottom: '88%', left: '50%' },
    7: { bottom: '80%', left: '85%' }
  },
  '3-4-3': {
    1: { bottom: '5%', left: '50%' },
    4: { bottom: '30%', left: '22%' },
    6: { bottom: '25%', left: '50%' },
    3: { bottom: '30%', left: '78%' },
    5: { bottom: '65%', left: '10%' },
    10: { bottom: '55%', left: '35%' },
    8: { bottom: '55%', left: '65%' },
    2: { bottom: '65%', left: '90%' },
    11: { bottom: '85%', left: '25%' },
    9: { bottom: '88%', left: '50%' },
    7: { bottom: '85%', left: '75%' }
  },
  '4-5-1': {
    1: { bottom: '5%', left: '50%' },
    5: { bottom: '15%', left: '15%' },
    4: { bottom: '12%', left: '35%' },
    3: { bottom: '12%', left: '65%' },
    2: { bottom: '15%', left: '85%' },
    11: { bottom: '40%', left: '15%' },
    10: { bottom: '35%', left: '35%' },
    6: { bottom: '30%', left: '50%' },
    8: { bottom: '35%', left: '65%' },
    7: { bottom: '40%', left: '85%' },
    9: { bottom: '60%', left: '50%' }
  }
};

const BlueprintSlide = () => {
  const [activeForm, setActiveForm] = useState<'4-3-3' | '3-4-3' | '4-5-1'>('4-3-3');
  
  return (
    <div className="grid lg:grid-cols-12 gap-8 min-h-full py-6 md:py-0">
      {/* Left Info */}
      <div className="lg:col-span-4 space-y-4">
        <div 
          className={`p-6 rounded-xl border cursor-pointer transition-all ${activeForm === '4-3-3' ? 'bg-neutral-800 border-accent shadow-[0_0_15px_rgba(0,255,65,0.1)]' : 'bg-neutral-900 border-neutral-800 hover:bg-neutral-800/80'}`}
          onClick={() => setActiveForm('4-3-3')}
        >
           <p className="text-[10px] text-neutral-500 font-mono tracking-widest mb-1 uppercase font-bold">Formation Base</p>
           <h3 className="text-6xl font-black text-white leading-none">4-3-3</h3>
        </div>
        <div className="space-y-2">
          {[
            { id: '3-4-3', name: 'Attack (3-4-3)', desc: 'Fullbacks push high as wingbacks to provide width.' },
            { id: '4-5-1', name: 'Defend (4-5-1)', desc: 'Compact mid-to-low block for solidity.' }
          ].map((v, i) => (
            <div 
              key={i} 
              className={`p-4 rounded-xl border cursor-pointer transition-all ${activeForm === v.id ? 'bg-neutral-800 border-accent shadow-[0_0_10px_rgba(0,255,65,0.1)]' : 'bg-neutral-900/50 border-neutral-800 hover:bg-neutral-800/80'}`}
              onClick={() => setActiveForm(v.id as any)}
            >
              <h4 className="font-bold text-accent text-xs uppercase tracking-widest">{v.name}</h4>
              <p className="text-neutral-500 text-xs">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tactical Board Simulation */}
      <div className="lg:col-span-5 bg-pitch rounded-2xl border border-neutral-800 relative flex flex-col p-6 overflow-hidden dots-bg min-h-[400px] lg:min-h-0">
        <h2 className="text-center text-[10px] font-mono text-neutral-500 mb-6 uppercase tracking-[0.3em] relative z-20">Field Visualization</h2>
        <div className="relative flex-grow border border-neutral-800 rounded-lg bg-neutral-900/40">
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-48 h-48 border border-neutral-700 rounded-full" />
              <div className="absolute w-full h-px bg-neutral-700" />
           </div>
           {/* Animated Formation Markers */}
           {[1, 5, 4, 3, 2, 6, 10, 8, 11, 9, 7].map(num => {
             const getPlayerRole = (n: number) => {
               switch (n) {
                 case 1: return TACTICS.keyRoles[0]; // Sweeper Keeper
                 case 3:
                 case 4: return TACTICS.keyRoles[1]; // Ball Playing Defender
                 case 6: return TACTICS.keyRoles[2]; // Deep Lying Playmaker
                 case 2:
                 case 5: return TACTICS.keyRoles[3]; // Attacking Fullback
                 case 8: return TACTICS.keyRoles[4]; // Box-to-Box Midfielder
                 case 10: return TACTICS.keyRoles[5]; // Advanced Playmaker
                 case 9: return TACTICS.keyRoles[6]; // Complete Forward
                 case 7:
                 case 11: return { title: 'Inside Forward', desc: 'Wingers tuck inside to create central overloads in the pockets.' };
                 default: return { title: 'Player', desc: 'Team player' };
               }
             };
             const role = getPlayerRole(num);
             
             return (
             <motion.div
               key={num}
               animate={{ 
                 bottom: POSITIONS[activeForm][num].bottom, 
                 left: POSITIONS[activeForm][num].left,
               }}
               style={{ 
                 x: "-50%", 
                 y: "50%" 
               }}
               transition={{ type: "spring", stiffness: 60, damping: 15 }}
               className="absolute w-6 h-6 rounded-full border shadow-lg flex items-center justify-center text-[8px] font-bold z-10 cursor-help group/marker bg-accent border-dark text-dark"
             >
               {num}
               
               {/* Tooltip */}
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-neutral-900 border border-neutral-700 p-3 rounded-lg shadow-2xl opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none z-50">
                 <p className="text-[10px] font-bold text-accent uppercase mb-1">{role?.title}</p>
                 <p className="text-[10px] text-neutral-400 leading-tight font-normal normal-case text-left">{role?.desc}</p>
                 <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-neutral-700" />
               </div>
             </motion.div>
           )})}
        </div>
      </div>

      {/* Right Details */}
      <div className="lg:col-span-3 space-y-2">
         <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest font-black mb-3">Role Specifications</p>
         {TACTICS.keyRoles.map((role, i) => (
          <div key={i} className="group pb-3 border-b border-neutral-900 last:border-0">
            <h5 className={`text-sm font-bold tracking-tight ${role.color} transition-colors uppercase`}>{role.title}</h5>
            <p className="text-neutral-500 text-[11px] leading-snug">{role.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Components ---

const SlideWrapper = ({ children, title, slideId }: { children: React.ReactNode, title: string, slideId: string, key?: React.Key }) => {
  let scrollClass = 'overflow-y-auto overflow-x-hidden custom-scrollbar pr-1 md:pr-2 pb-12 md:pb-0';
  if (slideId === 'intro') {
    // Scrollable on mobile portrait, but not on desktop or landscape tablet
    scrollClass = 'overflow-y-auto md:landscape:overflow-hidden lg:overflow-hidden overflow-x-hidden custom-scrollbar pr-1 md:pr-0 pb-12 md:pb-0';
  } else if (slideId !== 'career') {
    // Keep others scrollable on mobile, and optionally on tablet if they overflow
    scrollClass = 'overflow-y-auto xl:overflow-hidden overflow-x-hidden custom-scrollbar pr-1 xl:pr-0 pb-12 md:pb-0';
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full h-full flex flex-col p-4 md:px-10 md:py-6 max-w-7xl mx-auto"
    >
      <div className="mb-4 flex items-end justify-between border-b border-neutral-800 pb-4 shrink-0">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="h-4 md:h-6 w-1 bg-accent rounded-full" />
          <h2 className="text-lg md:text-xl font-mono uppercase tracking-[0.2em] text-accent font-bold">{title}</h2>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-[10px] text-neutral-500 font-mono tracking-widest">SEASON 2025/2026</p>
          <p className="text-sm font-light text-neutral-400">PROFESSIONAL PERFORMANCE PROFILE</p>
        </div>
      </div>
      <div className={`flex-1 ${scrollClass}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 'intro', title: 'Home', render: () => (
      <div className="min-h-full flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 py-6 md:py-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-60 md:w-64 md:h-[360px] lg:w-72 lg:h-[420px] bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group shrink-0"
        >
          <img 
            src={profilePic} 
            alt="Rafly Alfariz" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <div className="w-6 md:w-8 h-1 bg-accent mb-2" />
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/50">Football Coach</p>
          </div>
        </motion.div>
        
        <div className="flex flex-col items-center md:items-start max-w-xl text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-extrabold mb-4 lg:mb-8 leading-none tracking-tighter"
          >
            RAFLY <br className="hidden md:block" />
            <span className="text-white opacity-40 italic font-thin md:ml-4">ALFARIZ</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-neutral-900/50 border border-neutral-800 p-5 lg:p-8 rounded-xl w-full flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-8 text-center md:text-left"
          >
            <div className="flex flex-col gap-1 items-center md:items-start">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Qualifications</p>
              <p className="text-accent text-lg lg:text-xl font-black uppercase tracking-tight leading-tight">FA & PSSI</p>
              <p className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase mt-1">Licensed Coach</p>
            </div>
            <div className="h-px w-full md:h-12 md:w-px bg-neutral-800" />
            <div className="flex flex-col items-center md:items-start">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Current Role</p>
              <p className="text-white text-base lg:text-lg font-medium">U-12 Head Coach</p>
              <p className="text-neutral-500 text-[10px] lg:text-xs text-balance">Borussia Mönchengladbach Academy Indonesia</p>
            </div>
          </motion.div>
        </div>
      </div>
    )},
    { id: 'career', title: 'Milestones', render: () => (
      <div className="max-w-2xl mx-auto py-6 md:py-10 relative">
        <div className="absolute left-[31px] top-0 bottom-0 w-px bg-neutral-800" />
        <div className="space-y-12">
          {MILESTONES.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-16 group"
            >
              <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-dark z-10 transition-colors ${item.active ? 'bg-accent shadow-[0_0_15px_rgba(0,255,65,0.5)]' : 'bg-neutral-700'}`} />
              <div className="flex flex-col">
                <span className="font-mono text-accent text-xs font-bold tracking-widest mb-1">{item.year}</span>
                <h3 className={`text-2xl font-black tracking-tight ${item.active ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'} transition-colors uppercase`}>{item.role}</h3>
                <p className="text-neutral-500 font-medium">{item.team}</p>
                {item.location && (
                  <p className="text-neutral-600 text-xs uppercase tracking-widest mt-2">{item.location}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )},
    { id: 'coaching-philosophy', title: 'Pillars', render: () => (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-full items-center py-6 md:py-0">
        {PHILOSOPHY_COACHING.map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl flex flex-col items-start gap-6 hover:border-accent transition-all group h-full"
          >
            <div className="flex justify-between w-full items-start">
               <h3 className="text-3xl font-black italic tracking-tighter uppercase group-hover:text-accent transition-colors">{item.title}</h3>
               <span className="text-[10px] font-mono text-neutral-600 tracking-tighter border border-neutral-800 px-2 py-1 rounded">{item.tag}</span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    )},
    { id: 'football-philosophy', title: 'Philosophy', render: () => (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-full items-center py-6 md:py-0">
        {PHILOSOPHY_FOOTBALL.map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl flex flex-col items-start gap-4 hover:border-accent transition-all group h-full shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <item.icon size={80} />
            </div>
            <div className="p-4 bg-neutral-800 text-neutral-400 rounded-xl group-hover:bg-accent group-hover:text-dark transition-all">
              <item.icon size={24} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter">{item.title}</h3>
            <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    )},
    { id: 'tactics-formation', title: 'Blueprint', render: () => (
      <BlueprintSlide />
    )},
    { id: 'tactics-execution', title: 'Execution', render: () => (
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 min-h-full py-6 md:py-0">
        <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-xl space-y-6 flex flex-col">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <div className="bg-accent w-2 h-2 rounded-full shadow-[0_0_8px_#00FF41]" />
            <h3 className="text-xl font-black uppercase tracking-widest">In Possession</h3>
          </div>
          <div className="space-y-3 flex-1">
            {TACTICS.possession.map((item, i) => (
              <div key={i} className="flex gap-4 items-center group">
                <span className="text-accent font-mono text-xs opacity-40">0{i+1}</span>
                <span className="text-neutral-400 group-hover:text-white transition-colors py-2 text-sm uppercase tracking-wide font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-accent/5 p-4 rounded border border-accent/10 mt-auto">
             <p className="text-[10px] text-accent/60 font-mono tracking-tighter leading-none italic">Structural priority: Area wide and central pockets</p>
          </div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-xl space-y-6 flex flex-col">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <div className="bg-blue-500 w-2 h-2 rounded-full shadow-[0_0_8px_#3b82f6]" />
            <h3 className="text-xl font-black uppercase tracking-widest">Out of Possession</h3>
          </div>
          <div className="space-y-3 flex-1">
            {TACTICS.outOfPossession.map((item, i) => (
              <div key={i} className="flex gap-4 items-center group">
                <span className="text-blue-500 font-mono text-xs opacity-40">0{i+1}</span>
                <span className="text-neutral-400 group-hover:text-white transition-colors py-2 text-sm uppercase tracking-wide font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-blue-500/5 p-4 rounded border border-blue-500/10 mt-auto">
             <p className="text-[10px] text-blue-400/60 font-mono tracking-tighter leading-none italic">Defensive priority: Half-spaces and lane denial</p>
          </div>
        </div>
      </div>
    )},
    { id: 'training', title: 'Core Training', render: () => (
      <TrainingSlide />
    )}
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-screen bg-dark text-zinc-100 font-sans selection:bg-accent/30 flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-full bg-accent/5 blur-[120px] pointer-events-none -mr-[300px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-full bg-blue-500/5 blur-[120px] pointer-events-none -ml-[200px]" />
      
      {/* Header */}
      <header className="px-4 md:px-8 py-4 md:py-6 flex justify-between items-center relative z-20 border-b border-neutral-900/50 backdrop-blur-sm shrink-0">
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 90 }}
            className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded flex items-center justify-center font-black text-dark text-base md:text-xl shrink-0"
          >
            RA
          </motion.div>
          <div>
            <h1 className="text-base md:text-xl font-black uppercase tracking-tighter leading-none">Rafly Alfariz</h1>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2 items-center overflow-x-auto custom-scrollbar md:pb-0 px-2 shrink-0">
          {slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-500 rounded-full shrink-0 ${currentSlide === idx ? 'w-8 md:w-10 bg-accent' : 'w-2 bg-neutral-800 hover:bg-neutral-700'}`}
            />
          ))}
        </div>
      </header>

      {/* Slide Content */}
      <main className="flex-1 relative z-10 h-full overflow-hidden flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <SlideWrapper key={slides[currentSlide].id} title={slides[currentSlide].title} slideId={slides[currentSlide].id}>
            {slides[currentSlide].render()}
          </SlideWrapper>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="px-4 md:px-8 py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center relative z-20 border-t border-neutral-900/50 backdrop-blur-sm shrink-0 gap-4 sm:gap-0">
        <div className="flex gap-4 md:gap-6 text-[9px] md:text-[10px] font-mono text-neutral-600 font-bold uppercase tracking-[0.2em] w-full sm:w-auto justify-center sm:justify-start hidden md:flex">
          <span>Positional Play</span>
          <span>Progressive Build-up</span>
          <span>Structured Defending</span>
        </div>
        <div className="flex gap-3 md:gap-4 w-full sm:w-auto justify-between sm:justify-end shrink-0">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-12 h-12 rounded border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 transition-colors disabled:opacity-10 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform text-neutral-400" />
          </button>
          <button 
            onClick={nextSlide}
            className="px-6 md:px-8 h-12 rounded bg-accent text-dark flex items-center justify-center gap-3 hover:opacity-90 transition-all group font-black tracking-tighter w-full sm:w-auto"
          >
            <span className="text-xs uppercase">
              {currentSlide === slides.length - 1 ? 'Home' : 'Next'}
            </span>
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
      
      {/* Footer System Info */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-neutral-800 font-mono tracking-[0.4em] uppercase pointer-events-none">
        CONFIDENTIAL • SECTION_{String(currentSlide + 1).padStart(2, '0')} • ACADEMY_CORE_SYSTEM
      </div>
    </div>
  );
}
