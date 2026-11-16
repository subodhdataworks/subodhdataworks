import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatsCard({
  title,
  value,
  change,
  subtitle,
  icon: Icon,
  gradient = "from-violet-500 to-indigo-500",
  cardBg = "bg-gradient-to-br from-violet-50/95 via-white to-indigo-50/90",
  borderGlow = "border-violet-200/90 hover:border-violet-400 shadow-[0_6px_24px_rgba(124,58,237,0.12)] hover:shadow-[0_12px_30px_rgba(124,58,237,0.22)]",
  topStrip = "from-violet-400 via-purple-500 to-indigo-400",
  titleColor = "text-violet-900/80",
  valueColor = "text-violet-950",
  subtitleColor = "text-violet-600/90 group-hover:text-violet-700",
  iconGlow = "shadow-[0_6px_16px_rgba(124,58,237,0.30)] ring-2 ring-white/90",
  onClick,
}) {
  const hasChange = typeof change === "number" && Number.isFinite(change);
  const isNegative = hasChange && change < 0;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 ${cardBg} ${borderGlow} ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {/* Top luminous glowing accent bar */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${topStrip} opacity-90`}
      />

      {/* Ambient top-right & bottom-left light glowing orbs */}
      <div
        className={`pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-gradient-to-br ${gradient} opacity-[0.18] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.28]`}
      />
      <div
        className={`pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-gradient-to-tr ${gradient} opacity-[0.10] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.18]`}
      />

      <div className="relative z-10 flex items-start justify-between gap-2.5">
        <div className="min-w-0 flex-1">
          <p className={`truncate text-[12px] font-bold tracking-tight ${titleColor}`}>
            {title}
          </p>

          <h3 className={`mt-1.5 text-xl font-black tracking-tight sm:text-2xl ${valueColor}`}>
            {value ?? 0}
          </h3>

          {hasChange ? (
            <div
              className={`mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                isNegative
                  ? "bg-rose-50 text-rose-600 border border-rose-200/60"
                  : "bg-emerald-50 text-emerald-600 border border-emerald-200/60"
              }`}
            >
              {isNegative ? (
                <ArrowDownRight className="h-3 w-3" />
              ) : (
                <ArrowUpRight className="h-3 w-3" />
              )}
              <span>{change > 0 ? `+${change}%` : `${change}%`}</span>
            </div>
          ) : subtitle ? (
            <p className={`mt-1.5 truncate text-[11px] font-semibold transition-colors ${subtitleColor}`}>
              {subtitle}
            </p>
          ) : null}
        </div>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white transition-transform duration-200 group-hover:scale-110 ${iconGlow}`}
        >
          {Icon && <Icon className="h-4.5 w-4.5" />}
        </div>
      </div>
    </motion.div>
  );
}
