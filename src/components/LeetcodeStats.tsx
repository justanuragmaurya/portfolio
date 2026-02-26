"use client";

import { useCallback, useEffect, useState } from "react";
import { Activity, ActivityCalendar } from "react-activity-calendar";
import { leetcodeActivity } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LeetcodeProfile {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  submissionCalendar: Record<string, number>;
}

const DIFFICULTY_CONFIG = [
  { label: "Easy", color: "#22c55e", key: "easy" as const },
  { label: "Medium", color: "#f59e0b", key: "medium" as const },
  { label: "Hard", color: "#ef4444", key: "hard" as const },
];

function parseSubmissionCalendar(
  calendar: Record<string, number>
): Activity[] {
  const entries = Object.entries(calendar).map(([timestamp, count]) => ({
    date: new Date(Number(timestamp) * 1000).toISOString().split("T")[0],
    count,
  }));

  if (entries.length === 0) {
    const today = new Date().toISOString().split("T")[0];
    return [{ date: today, count: 0, level: 0 }];
  }

  entries.sort((a, b) => a.date.localeCompare(b.date));

  const maxCount = Math.max(...entries.map((e) => e.count));

  const dateMap = new Map(entries.map((e) => [e.date, e.count]));
  const startDate = new Date(entries[0].date);
  const endDate = new Date(entries[entries.length - 1].date);
  const activities: Activity[] = [];

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    const count = dateMap.get(dateStr) || 0;
    let level: 0 | 1 | 2 | 3 | 4 = 0;
    if (count > 0 && maxCount > 0) {
      const ratio = count / maxCount;
      if (ratio <= 0.25) level = 1;
      else if (ratio <= 0.5) level = 2;
      else if (ratio <= 0.75) level = 3;
      else level = 4;
    }
    activities.push({ date: dateStr, count, level });
  }

  return activities;
}

function StatBar({
  label,
  solved,
  total,
  color,
}: {
  label: string;
  solved: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? (solved / total) * 100 : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="mono-text text-xs" style={{ color }}>
          {label}
        </span>
        <span className="mono-text text-xs text-[#737373]">
          {solved}/{total}
        </span>
      </div>
      <div className="w-full h-1.5 bg-[#171717] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function LeetcodeStats() {
  const [profile, setProfile] = useState<LeetcodeProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `https://alfa-leetcode-api.onrender.com/userProfile/${leetcodeActivity.username}`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: LeetcodeProfile = await res.json();
      setProfile(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const calendarData = profile
    ? parseSubmissionCalendar(profile.submissionCalendar)
    : [];

  return (
    <section className="w-full py-6 md:py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">LeetCode</span>
          <div className="flex-1 divider-dashed" />
          <Link
            href={leetcodeActivity.profileUrl}
            target="_blank"
            className="flex items-center gap-1 mono-text text-xs text-[#525252] hover:text-[#a3a3a3] transition-colors"
          >
            @{leetcodeActivity.username}
            <ArrowUpRight size={12} />
          </Link>
        </div>

        {error ? (
          <div className="solid-border p-6 text-center">
            <p className="mono-text text-xs text-[#525252]">
              Could not load LeetCode stats
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="solid-border p-4 text-center">
                <div className="text-2xl font-light tracking-tight">
                  {loading ? (
                    <span className="inline-block w-8 h-7 bg-[#171717] animate-pulse rounded" />
                  ) : (
                    profile?.totalSolved
                  )}
                </div>
                <div className="mono-text text-[10px] text-[#525252] mt-1 uppercase tracking-wider">
                  Solved
                </div>
              </div>
              {DIFFICULTY_CONFIG.map(({ label, color, key }) => (
                <div key={key} className="solid-border p-4 text-center">
                  <div className="text-2xl font-light tracking-tight" style={{ color }}>
                    {loading ? (
                      <span className="inline-block w-8 h-7 bg-[#171717] animate-pulse rounded" />
                    ) : (
                      profile?.[`${key}Solved` as keyof LeetcodeProfile] as number
                    )}
                  </div>
                  <div className="mono-text text-[10px] text-[#525252] mt-1 uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="solid-border p-4 space-y-3">
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between">
                        <span className="inline-block w-12 h-3 bg-[#171717] animate-pulse rounded" />
                        <span className="inline-block w-10 h-3 bg-[#171717] animate-pulse rounded" />
                      </div>
                      <div className="w-full h-1.5 bg-[#171717] rounded-full" />
                    </div>
                  ))}
                </div>
              ) : (
                profile &&
                DIFFICULTY_CONFIG.map(({ label, color, key }) => (
                  <StatBar
                    key={key}
                    label={label}
                    solved={profile[`${key}Solved` as keyof LeetcodeProfile] as number}
                    total={profile[`total${label}` as keyof LeetcodeProfile] as number}
                    color={color}
                  />
                ))
              )}
            </div>

            <div className="solid-border p-4 overflow-x-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="mono-text text-xs text-[#525252]">
                  Submission Activity
                </span>
                {!loading && profile && (
                  <span className="mono-text text-xs text-[#525252]">
                    Rank #{profile.ranking.toLocaleString()}
                  </span>
                )}
              </div>
              {loading ? (
                <div className="h-[120px] bg-[#171717] animate-pulse rounded" />
              ) : (
                <ActivityCalendar
                  data={calendarData}
                  maxLevel={4}
                  blockMargin={3}
                  theme={{
                    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                  colorScheme="dark"
                  labels={{
                    totalCount: "{{count}} submissions in the last year",
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
