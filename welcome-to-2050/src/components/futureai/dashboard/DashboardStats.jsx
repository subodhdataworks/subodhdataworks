import React from "react";
import {
  BookOpen,
  CheckCircle2,
  Code2,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import StatsCard from "./StatsCard";

export default function DashboardStats({ studentStats = {}, onCardClick }) {
  const stats = [
    {
      id: "enrolled",
      title: "Enrolled Courses",
      value: studentStats.enrolled ?? 0,
      change: studentStats.enrolledChange,
      subtitle:
        (studentStats.enrolled ?? 0) > 0
          ? "Active career tracks"
          : "Explore career tracks",
      icon: BookOpen,
      gradient: "from-violet-500 to-indigo-500",
      cardBg: "bg-gradient-to-br from-violet-50/95 via-white to-indigo-100/80",
      borderGlow:
        "border-violet-200/90 hover:border-violet-400 shadow-[0_6px_24px_rgba(139,92,246,0.14)] hover:shadow-[0_12px_30px_rgba(139,92,246,0.24)]",
      topStrip: "from-violet-400 via-purple-400 to-indigo-400",
      titleColor: "text-violet-900/85",
      valueColor: "text-violet-950",
      subtitleColor: "text-violet-600 group-hover:text-violet-700",
      iconGlow: "shadow-[0_6px_16px_rgba(139,92,246,0.32)] ring-2 ring-white/90",
    },
    {
      id: "completed",
      title: "Completed Courses",
      value: studentStats.completed ?? 0,
      change: studentStats.completedChange,
      subtitle:
        (studentStats.completed ?? 0) > 0
          ? "Tracks finished"
          : "Complete topics to unlock",
      icon: CheckCircle2,
      gradient: "from-emerald-500 to-teal-500",
      cardBg: "bg-gradient-to-br from-emerald-50/95 via-white to-teal-100/80",
      borderGlow:
        "border-emerald-200/90 hover:border-emerald-400 shadow-[0_6px_24px_rgba(16,185,129,0.14)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.24)]",
      topStrip: "from-emerald-400 via-teal-400 to-cyan-400",
      titleColor: "text-emerald-900/85",
      valueColor: "text-emerald-950",
      subtitleColor: "text-emerald-600 group-hover:text-emerald-700",
      iconGlow: "shadow-[0_6px_16px_rgba(16,185,129,0.32)] ring-2 ring-white/90",
    },
    {
      id: "dsa",
      title: "DSA Challenges",
      value: studentStats.dsaCompleted ?? 0,
      change: studentStats.dsaChange,
      subtitle:
        (studentStats.dsaCompleted ?? 0) > 0
          ? `${studentStats.dsaTopicsSolved ?? 0} topics practiced`
          : "Start daily coding practice",
      icon: Code2,
      gradient: "from-sky-500 to-cyan-500",
      cardBg: "bg-gradient-to-br from-sky-50/95 via-white to-cyan-100/80",
      borderGlow:
        "border-sky-200/90 hover:border-sky-400 shadow-[0_6px_24px_rgba(14,165,233,0.14)] hover:shadow-[0_12px_30px_rgba(14,165,233,0.24)]",
      topStrip: "from-sky-400 via-cyan-400 to-blue-400",
      titleColor: "text-sky-900/85",
      valueColor: "text-sky-950",
      subtitleColor: "text-sky-600 group-hover:text-sky-700",
      iconGlow: "shadow-[0_6px_16px_rgba(14,165,233,0.32)] ring-2 ring-white/90",
    },
    {
      id: "certificates",
      title: "Certificates Earned",
      value: studentStats.certificates ?? 0,
      change: studentStats.certificateChange,
      subtitle:
        (studentStats.certificates ?? 0) > 0
          ? "Verified credentials"
          : "Finish a track to earn",
      icon: Award,
      gradient: "from-amber-500 to-orange-500",
      cardBg: "bg-gradient-to-br from-amber-50/95 via-white to-orange-100/80",
      borderGlow:
        "border-amber-200/90 hover:border-amber-400 shadow-[0_6px_24px_rgba(245,158,11,0.15)] hover:shadow-[0_12px_30px_rgba(245,158,11,0.25)]",
      topStrip: "from-amber-400 via-orange-400 to-yellow-400",
      titleColor: "text-amber-900/85",
      valueColor: "text-amber-950",
      subtitleColor: "text-amber-700 group-hover:text-amber-800",
      iconGlow: "shadow-[0_6px_16px_rgba(245,158,11,0.32)] ring-2 ring-white/90",
    },
    {
      id: "internship",
      title: "Internship",
      value: studentStats.internship ?? 0,
      subtitle:
        (studentStats.internship ?? 0) > 0
          ? "Active internship"
          : "3-Month Industry Training",
      icon: GraduationCap,
      gradient: "from-fuchsia-500 to-purple-500",
      cardBg: "bg-gradient-to-br from-fuchsia-50/95 via-white to-purple-100/80",
      borderGlow:
        "border-fuchsia-200/90 hover:border-fuchsia-400 shadow-[0_6px_24px_rgba(217,70,239,0.14)] hover:shadow-[0_12px_30px_rgba(217,70,239,0.24)]",
      topStrip: "from-fuchsia-400 via-purple-400 to-pink-400",
      titleColor: "text-fuchsia-900/85",
      valueColor: "text-fuchsia-950",
      subtitleColor: "text-fuchsia-600 group-hover:text-fuchsia-700",
      iconGlow: "shadow-[0_6px_16px_rgba(217,70,239,0.32)] ring-2 ring-white/90",
    },
    {
      id: "job",
      title: "Job & Placement",
      value: studentStats.job ?? 0,
      subtitle:
        (studentStats.job ?? 0) > 0
          ? "Placement unlocked"
          : "Job referrals & drives",
      icon: Briefcase,
      gradient: "from-rose-500 to-pink-500",
      cardBg: "bg-gradient-to-br from-rose-50/95 via-white to-pink-100/80",
      borderGlow:
        "border-rose-200/90 hover:border-rose-400 shadow-[0_6px_24px_rgba(244,63,94,0.14)] hover:shadow-[0_12px_30px_rgba(244,63,94,0.24)]",
      topStrip: "from-rose-400 via-pink-400 to-orange-400",
      titleColor: "text-rose-900/85",
      valueColor: "text-rose-950",
      subtitleColor: "text-rose-600 group-hover:text-rose-700",
      iconGlow: "shadow-[0_6px_16px_rgba(244,63,94,0.32)] ring-2 ring-white/90",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((item) => (
        <StatsCard
          key={item.id}
          {...item}
          onClick={onCardClick ? () => onCardClick(item.id) : undefined}
        />
      ))}
    </div>
  );
}
