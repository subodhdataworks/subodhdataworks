import React, { useState } from 'react';
import { 
  Sparkles, 
  Lock, 
  Unlock, 
  Play, 
  CheckCircle2, 
  Code2, 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Star,
  Brain,
  Mic,
  Briefcase,
  ArrowUpRight
} from 'lucide-react';
import { COURSES_CATALOG } from '../../data/coursesCatalog';
import { CourseModule, CourseTopic, LearnerProfile } from '../../types';
import { SoundEffects } from '../../services/soundEffects';

interface CourseCatalogViewProps {
  profile: LearnerProfile;
  onSelectTopic: (course: CourseModule, topic: CourseTopic) => void;
  onOpenSubscription: () => void;
  onOpenDevMode: () => void;
  onOpenRecallWorkout?: () => void;
  onOpenInterviewSim?: () => void;
  onOpenResumeProjects?: () => void;
}

export const CourseCatalogView: React.FC<CourseCatalogViewProps> = ({
  profile,
  onSelectTopic,
  onOpenSubscription,
  onOpenDevMode,
  onOpenRecallWorkout,
  onOpenInterviewSim,
  onOpenResumeProjects,
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('python');

  const activeCourse = COURSES_CATALOG.find((c) => c.id === selectedCourseId) || COURSES_CATALOG[0];
  const isSubscribed = Boolean(profile.isSubscribed || profile.devModeUnlocked);

  const isTopicAccessible = (topic: CourseTopic) => {
    if (topic.isFree) return true;
    if (isSubscribed) return true;
    return false;
  };

  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'python':
        return <Code2 className="w-5 h-5 text-quantum-teal" />;
      case 'sql':
        return <Database className="w-5 h-5 text-future-blue" />;
      case 'excel':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 'powerbi':
        return <BarChart3 className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-quantum-teal" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 text-left animate-fadeIn selection:bg-quantum-teal/20 selection:text-deep-space">
      
      {/* User Welcome & Subscription Hero Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-lab-900/10 shadow-elevated flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-quantum-teal/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-lab-100 text-deep-space border border-lab-900/10 font-bold uppercase">
              2050 DATA ACADEMY
            </span>
            {isSubscribed ? (
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-solar-gold/20 text-deep-space border border-solar-gold/60 font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-solar-gold text-solar-gold" />
                <span>⭐ VIP LIFETIME MASTER PASS (₹999 ACTIVE)</span>
              </span>
            ) : (
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
                <span>FREE TIER (3 Topics/Course Free)</span>
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-deep-space tracking-tight">
            Welcome, {profile.name || 'Future Data Analyst'}
          </h1>
          <p className="text-xs sm:text-sm text-lab-500">
            Registered WhatsApp: <span className="font-mono font-bold text-deep-space">+91 {profile.whatsappNumber || 'Not set'}</span> • Zero Boring Video Lectures
          </p>
        </div>

        {/* Upgrade / Dev Unlock CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full sm:w-auto">
          {!isSubscribed ? (
            <button
              onClick={() => {
                SoundEffects.playDiscovery();
                onOpenSubscription();
              }}
              className="px-6 py-3.5 rounded-full bg-deep-space text-white hover:bg-deep-space/90 text-xs font-bold font-mono shadow-elevated flex items-center justify-center gap-2 transition-transform active:scale-95 border border-solar-gold/40"
            >
              <Sparkles className="w-4 h-4 text-solar-gold" />
              <span>UNLOCK ALL 4 COURSES (₹999)</span>
            </button>
          ) : (
            <div className="px-5 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>All 4 Courses Fully Unlocked</span>
            </div>
          )}
        </div>
      </div>

      {/* 2050 DATA ANALYST ACCELERATOR SUITE (THE 3 BREAKTHROUGH TOOLS) */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-lab-50 via-white to-lab-50 border border-lab-900/10 shadow-subtle space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-lab-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-quantum-teal/15 text-deep-space font-bold uppercase border border-quantum-teal/30">
                ⭐ 2050 JOB ACCELERATOR
              </span>
              <span className="text-xs text-lab-400 font-mono">
                Active Recall Retention • Face-to-Face AI Interview • Proof of Work
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-deep-space mt-1 tracking-tight">
              3 Breakthrough Tools Solving Why Students Forget & Fail Video Courses
            </h3>
          </div>
          <span className="text-xs font-mono text-quantum-teal font-bold hidden sm:inline-block">
            Included in 2050 Ecosystem →
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tool 1: 2-Minute Daily Memory Recall Workout */}
          <div 
            onClick={() => {
              SoundEffects.playDiscovery();
              onOpenRecallWorkout?.();
            }}
            className="p-5 rounded-2xl bg-white border border-quantum-teal/30 hover:border-quantum-teal hover:shadow-elevated transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-quantum-teal/10 flex items-center justify-center text-quantum-teal group-hover:scale-105 transition-transform">
                <Brain className="w-5 h-5 text-quantum-teal" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-quantum-teal tracking-wider">
                  Active Spaced Retrieval
                </span>
                <h4 className="text-sm font-bold text-deep-space mt-0.5 group-hover:text-quantum-teal transition-colors">
                  2-Min Memory Recall Workout
                </h4>
              </div>
              <p className="text-xs text-lab-500 leading-relaxed">
                Daily 15-second timed retrieval drills with Brain Tattoos. Automatically rotates daily based on your completed topics.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-lab-100 flex items-center justify-between text-xs font-mono font-bold text-quantum-teal">
              <span>Start Workout ⚡</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Tool 2: AI Mock Interview Simulator */}
          <div 
            onClick={() => {
              SoundEffects.playDiscovery();
              onOpenInterviewSim?.();
            }}
            className="p-5 rounded-2xl bg-white border border-future-blue/30 hover:border-future-blue hover:shadow-elevated transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-future-blue/10 flex items-center justify-center text-future-blue group-hover:scale-105 transition-transform">
                <Mic className="w-5 h-5 text-future-blue" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-future-blue tracking-wider">
                  Face-to-Face AI Practice
                </span>
                <h4 className="text-sm font-bold text-deep-space mt-0.5 group-hover:text-future-blue transition-colors">
                  AI Mock Interview Simulator
                </h4>
              </div>
              <p className="text-xs text-lab-500 leading-relaxed">
                Speak aloud with AI Director Sophia Vance. Practice real company questions and receive instant 3D scores and model answers.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-lab-100 flex items-center justify-between text-xs font-mono font-bold text-future-blue">
              <span>Launch Simulator 🎙️</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Tool 3: Resume Project Card Generator */}
          <div 
            onClick={() => {
              SoundEffects.playDiscovery();
              onOpenResumeProjects?.();
            }}
            className="p-5 rounded-2xl bg-white border border-emerald-500/30 hover:border-emerald-500 hover:shadow-elevated transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                <Briefcase className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-emerald-700 tracking-wider">
                  Verified Proof of Work
                </span>
                <h4 className="text-sm font-bold text-deep-space mt-0.5 group-hover:text-emerald-700 transition-colors">
                  Resume & LinkedIn Project Cards
                </h4>
              </div>
              <p className="text-xs text-lab-500 leading-relaxed">
                1-Click copy production portfolio projects (Zomato delivery delays, PhonePe UPI reconciliation, FMCG Excel, Swiggy Power BI).
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-lab-100 flex items-center justify-between text-xs font-mono font-bold text-emerald-700">
              <span>Generate Projects 💼</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* THE 4 PILLARS COURSE TABS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-quantum-teal font-bold">
            THE 4 PILLARS OF MODERN DATA ANALYTICS
          </span>
          <span className="text-[11px] font-mono text-lab-400">
            Click any course to inspect topics
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {COURSES_CATALOG.map((course) => {
            const isSelected = course.id === selectedCourseId;
            return (
              <div
                key={course.id}
                onClick={() => {
                  SoundEffects.playDiscovery();
                  setSelectedCourseId(course.id);
                }}
                className={`p-5 rounded-3xl border transition-all cursor-pointer text-left space-y-3 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-white border-quantum-teal shadow-elevated ring-2 ring-quantum-teal/20'
                    : 'bg-white border-lab-900/10 hover:border-quantum-teal/40 shadow-subtle'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-lab-50 border border-lab-900/5 group-hover:scale-105 transition-transform">
                    {getCourseIcon(course.id)}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-lab-100 text-deep-space">
                    {course.totalTopics} Topics
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-deep-space tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-[11px] text-lab-500 mt-1 line-clamp-2 leading-relaxed">
                    {course.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-lab-100 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-emerald-700 font-bold">
                    ✓ First 3 Free
                  </span>
                  <span className={isSelected ? 'text-quantum-teal font-bold' : 'text-lab-400'}>
                    {isSelected ? 'Active Course →' : 'View Syllabus'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ACTIVE COURSE TOPICS SYLLABUS */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-lab-100 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-quantum-teal font-bold">
                FULL CURRICULUM
              </span>
              <span className="text-[10px] font-mono text-lab-400">
                • {activeCourse.duration}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-deep-space tracking-tight">
              {activeCourse.title}
            </h2>
            <p className="text-xs text-lab-500 mt-0.5">
              {activeCourse.description}
            </p>
          </div>

          {!isSubscribed && (
            <button
              onClick={onOpenSubscription}
              className="px-4 py-2 rounded-xl bg-solar-gold/20 hover:bg-solar-gold/30 text-deep-space border border-solar-gold/50 text-xs font-mono font-bold shrink-0 transition-all"
            >
              🔒 Unlock 4–{activeCourse.totalTopics} for ₹999 →
            </button>
          )}
        </div>

        {/* Topic List */}
        <div className="space-y-3">
          {activeCourse.topics.map((topic) => {
            const hasAccess = isTopicAccessible(topic);

            return (
              <div
                key={topic.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  hasAccess
                    ? 'bg-lab-50/70 border-lab-900/10 hover:border-quantum-teal hover:bg-white shadow-subtle'
                    : 'bg-lab-50/30 border-lab-900/5 opacity-80'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      hasAccess ? 'bg-deep-space text-white' : 'bg-lab-200 text-lab-600'
                    }`}>
                      {topic.topicNumber}
                    </div>

                    <div className="space-y-0.5 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-bold text-deep-space">
                          {topic.title}
                        </h4>
                        {topic.isFree ? (
                          <span className="px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                            FREE
                          </span>
                        ) : isSubscribed ? (
                          <span className="px-2 py-0.2 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-semibold">
                            UNLOCKED
                          </span>
                        ) : (
                          <span className="px-2 py-0.2 rounded-full bg-amber-100 text-amber-900 text-[10px] font-mono font-bold flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            <span>₹999 PASS</span>
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-lab-500 leading-relaxed">
                        {topic.tagline}
                      </p>
                      <p className="text-[11px] text-lab-400 italic">
                        💡 Real-World Context: {topic.indianRealLifeMetaphor.substring(0, 85)}...
                      </p>
                    </div>
                  </div>

                  {/* Action button */}
                  <div className="shrink-0 w-full sm:w-auto">
                    {hasAccess ? (
                      <button
                        onClick={() => {
                          SoundEffects.playDiscovery();
                          onSelectTopic(activeCourse, topic);
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-mono font-bold flex items-center justify-center gap-1.5 shadow-subtle transition-transform active:scale-95"
                      >
                        <Play className="w-3.5 h-3.5 fill-quantum-teal text-quantum-teal" />
                        <span>Start Lesson →</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          SoundEffects.playDiscovery();
                          onOpenSubscription();
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-solar-gold/20 hover:bg-solar-gold/30 text-deep-space border border-solar-gold/60 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Lock className="w-3.5 h-3.5 text-deep-space" />
                        <span>Unlock for ₹999</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
