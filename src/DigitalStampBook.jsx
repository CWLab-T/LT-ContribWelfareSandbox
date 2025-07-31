import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";

/**
 * GOV.UK-styled digital National Insurance stamp book (single-user demo)
 * ---------------------------------------------------------------------
 * User profile: age 37, SPA 66. Shows dynamic entitlement logic.
 */
export default function DigitalStampBook() {
  /* ────────────────────────────── DEMO VARIABLES ───────────────────────── */
  const currentAge = 37; // user’s age
  const yearsQualified = 15; // lifetime qualifying years
  const paidWeeksThisQuarter = 5; // stamps paid in the current 12-week quarter
  const stampsLast36 = 18; // stamps in the last 36 weeks

  /* ────────────────────────────── GRID DATA ─────────────────────────────── */
  const [weeks] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      start: new Date(2024, 0, 1 + i * 7).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      }),
      paid: i < paidWeeksThisQuarter,
    }))
  );

  /* ────────────────────────────── DERIVED STATS ─────────────────────────── */
  const paidCount = weeks.filter((w) => w.paid).length;
  const progress = Math.round((paidCount / weeks.length) * 100);
  const quarterMsg =
    paidCount === 12
      ? "Quarter complete · 12 stamps credited toward your record."
      : `${12 - paidCount} more stamps this quarter for a full record.`;
  const yearsUntilCareStart = Math.max(40 - currentAge, 0);

  /* ────────────────────────────── RENDER ────────────────────────────────── */
  return (
    <div
      style={{ fontFamily: "'Arial', 'Helvetica', sans-serif" }}
      className="min-h-screen bg-white"
    >
      {/* GOV.UK header */}
      <header className="bg-[#1d70b8] text-white">
        <div className="mx-auto max-w-6xl flex items-center gap-4 px-4 py-3">
          <span className="text-2xl font-bold tracking-tight">GOV.UK</span>
          <span className="text-sm">Wallet (beta)</span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl p-6 space-y-6">
        {/* Title */}
        <section className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Your National Insurance stamp book
          </h1>
          <p className="text-lg text-gray-700">Pay it. See it. Get it.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stamp grid */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Weekly contribution stamps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-3">
                {weeks.map((week) => (
                  <div
                    key={week.id}
                    className={`relative flex flex-col items-center justify-center h-24 rounded border-2 shadow-sm ${
                      week.paid
                        ? "bg-[#1d70b8] text-white border-[#145ea3]"
                        : "border-dashed border-gray-400 text-gray-600"
                    }`}
                  >
                    {week.paid ? (
                      <>
                        <CheckCircle className="absolute top-1 right-1 h-4 w-4" />
                        <span className="text-xl font-semibold">PAID</span>
                        <span className="text-xs">Week {week.id}</span>
                      </>
                    ) : (
                      <>
                        <Circle className="absolute top-1 right-1 h-4 w-4" />
                        <span className="text-sm">Week {week.id}</span>
                        <span className="text-xs">{week.start}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{quarterMsg}</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#1d70b8] h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Entitlements panel */}
          <Card>
            <CardHeader>
              <CardTitle>Your contribution entitlements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* STATE PENSION */}
              <div>
                <h3 className="font-medium text-gray-900">State Pension</h3>
                <p className="text-sm text-gray-700">
                  {yearsQualified} / 35 qualifying years ·{" "}
                  {yearsQualified >= 35 ? (
                    <span className="font-semibold">
                      Full rate secured at 66
                    </span>
                  ) : (
                    <span>
                      {35 - yearsQualified} more to qualify for full rate.
                    </span>
                  )}
                </p>
              </div>

              {/* UNEMPLOYMENT INSURANCE */}
              <div>
                <h3 className="font-medium text-gray-900">
                  Unemployment Insurance
                </h3>
                <p className="text-sm text-gray-700">
                  {stampsLast36 >= 24 ? (
                    <span className="font-semibold">
                      Eligible · up to 6 months
                    </span>
                  ) : stampsLast36 >= 10 ? (
                    <>
                      You are{" "}
                      <span className="font-semibold">partially covered</span> ·{" "}
                      {stampsLast36} / 24 stamps in the last 36 weeks.
                    </>
                  ) : (
                    <span>{stampsLast36} / 24 stamps in last 36 weeks.</span>
                  )}
                </p>
              </div>

              {/* SOCIAL CARE COVER */}
              <div>
                <h3 className="font-medium text-gray-900">Social Care Cover</h3>
                <p className="text-sm text-gray-700">
                  {yearsUntilCareStart > 0 ? (
                    <>
                      Contributions begin at age 40 ·{" "}
                      <span className="font-semibold">
                        {yearsUntilCareStart} years
                      </span>{" "}
                      to go.
                    </>
                  ) : (
                    <>
                      Contributing{" "}
                      <span className="font-semibold">1% NNI care levy</span>
                    </>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500">
          Updated 12 Mar 2025 · GOV.UK Wallet beta
        </footer>
      </main>
    </div>
  );
}
