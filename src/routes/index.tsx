import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PayKita — Employee Time & Payroll Dashboard" },
      {
        name: "description",
        content:
          "Clock in and out, track rendered hours, follow HR requests, holidays and payroll announcements in one PayKita dashboard.",
      },
      { property: "og:title", content: "PayKita — Employee Time & Payroll Dashboard" },
      {
        property: "og:description",
        content:
          "Clock in and out, track rendered hours, follow HR requests, holidays and payroll announcements in one PayKita dashboard.",
      },
    ],
  }),
  component: Dashboard,
});

const Icon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

const drawerLinks = [
  { icon: "person", label: "My Profile" },
  { icon: "calendar_month", label: "Calendar" },
  { icon: "campaign", label: "Announcement" },
  { icon: "touch_app", label: "Requests" },
  { icon: "payments", label: "Pay Slips" },
  { icon: "history", label: "Time Card" },
];

const requests = [
  { title: "Leave Request", date: "May 9" },
  { title: "Shift Change", date: "May 10" },
];

const upcoming = [
  { month: "May", day: "12", title: "Election Day", sub: "Public Holiday" },
  { month: "May", day: "20", title: "Team Building", sub: "Company Event" },
];

const bottomNav = [
  { icon: "home", label: "Home", active: true },
  { icon: "list_alt", label: "Requests" },
  { icon: "payments", label: "Payslips" },
  { icon: "schedule", label: "Clock" },
  { icon: "account_circle", label: "Profile" },
];

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-surface text-on-background">
      <header className="sticky top-0 z-40 flex h-20 w-full items-center justify-between bg-surface/80 px-6 backdrop-blur-md">
        <button
          aria-label="Open Menu"
          onClick={() => setOpen(true)}
          className="-ml-3 flex items-center justify-center rounded-full p-3 text-on-background transition-colors hover:bg-surface-variant active:scale-95"
        >
          <Icon name="menu" className="text-2xl font-light" />
        </button>
        <h1 className="text-xl font-bold tracking-tight text-on-surface">PayKita</h1>
        <button
          aria-label="Notifications"
          className="-mr-3 relative flex items-center justify-center rounded-full p-3 text-on-background transition-colors hover:bg-surface-variant active:scale-95"
        >
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-vibrant-red" />
          <Icon name="notifications" className="text-2xl font-light" />
        </button>
      </header>

      <nav
        className={`fixed left-0 top-0 z-50 flex h-full w-[85%] max-w-[340px] transform flex-col overflow-y-auto rounded-r-3xl border-r border-outline-variant/30 bg-surface-container-lowest py-10 shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 pb-8">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-primary-container to-brand text-on-secondary shadow-float">
            <Icon name="person" className="text-3xl font-light" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-on-surface">Shinra</span>
            <span className="text-[15px] text-on-surface-variant">The Moonlord</span>
          </div>
        </div>
        <div className="mt-6 flex flex-1 flex-col gap-2 px-4">
          {drawerLinks.map((l) => (
            <a
              key={l.label}
              href="#"
              className="flex items-center gap-6 rounded-2xl px-6 py-3 text-on-surface-variant transition-all duration-200 hover:bg-surface-variant hover:text-on-surface"
            >
              <Icon name={l.icon} className="font-light" />
              <span className="text-[15px] font-medium">{l.label}</span>
            </a>
          ))}
        </div>
        <div className="mt-auto px-4 pt-8">
          <a
            href="#"
            className="flex items-center justify-center gap-6 rounded-2xl bg-vibrant-red/5 px-6 py-3 text-vibrant-red transition-all duration-200 hover:bg-vibrant-red/10"
          >
            <Icon name="logout" className="font-light" />
            <span className="text-[15px] font-medium">Log out</span>
          </a>
        </div>
      </nav>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-on-background/20 backdrop-blur-sm transition-opacity"
        />
      )}

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 pb-[120px] pt-4 md:pb-10">
        <section className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1c1c] to-[#2d3032] p-8 text-center shadow-float">
          <div className="glass-panel pointer-events-none absolute inset-0 opacity-50" />
          <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-white/5 blur-2xl transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-brand/20 blur-2xl transition-transform duration-700 group-hover:scale-110" />
          <div className="relative z-10 mb-2 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/90">
              Currently
            </span>
          </div>
          <p className="relative z-10 mb-1 text-[32px] font-bold leading-10 tracking-tight text-white drop-shadow-sm">
            CLOCKED IN
          </p>
          <p className="relative z-10 mb-8 text-sm font-medium text-white/70">Since 8:30 AM</p>
          <button className="relative z-10 flex w-full max-w-[240px] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-3.5 text-[15px] font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:shadow-xl active:scale-95">
            <Icon name="timer_off" className="text-[20px] font-light" />
            Clock Out
          </button>
        </section>

        <section className="grid grid-cols-2 gap-4">
          {[
            { icon: "schedule", label: "Today", h: "7", m: "55" },
            { icon: "date_range", label: "This Month", h: "38", m: "06" },
          ].map((c) => (
            <div
              key={c.label}
              className="minimal-card flex aspect-[4/3] flex-col justify-between rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-on-surface-variant">
                <Icon name={c.icon} className="text-xl font-light text-brand/70" />
                <h3 className="text-sm font-medium">{c.label}</h3>
              </div>
              <div className="mt-auto">
                <p className="mb-1 font-numeric text-[28px] font-semibold leading-none text-on-surface">
                  {c.h}
                  <span className="ml-0.5 text-lg font-medium text-on-surface-variant/60">h</span>{" "}
                  {c.m}
                  <span className="ml-0.5 text-lg font-medium text-on-surface-variant/60">m</span>
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="minimal-card flex flex-col gap-6 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-surface-variant">
                <Icon name="task" className="font-light text-on-surface" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-vibrant-red text-[9px] font-semibold text-white">
                  2
                </span>
              </div>
              <h3 className="text-base font-semibold text-on-surface">Requests</h3>
            </div>
            <a href="#" className="flex items-center text-brand transition-colors hover:text-brand/80">
              <Icon name="arrow_forward" className="font-light" />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            {requests.map((r) => (
              <div
                key={r.title}
                className="group flex cursor-pointer items-center justify-between rounded-xl p-3 transition-colors hover:bg-surface-variant/50"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-on-surface transition-colors group-hover:text-brand">
                    {r.title}
                  </span>
                  <span className="text-[13px] text-on-surface-variant">{r.date}</span>
                </div>
                <span className="rounded-md bg-surface-variant px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="minimal-card flex flex-col gap-6 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-variant">
                <Icon name="event" className="font-light text-on-surface" />
              </div>
              <h3 className="text-base font-semibold text-on-surface">Upcoming</h3>
            </div>
            <a href="#" className="flex items-center text-brand transition-colors hover:text-brand/80">
              <Icon name="arrow_forward" className="font-light" />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {upcoming.map((e) => (
              <div key={e.title} className="flex items-start gap-3">
                <div className="flex min-w-[40px] flex-col items-center justify-center rounded-lg bg-surface-variant p-1.5 text-center">
                  <span className="text-[10px] font-semibold uppercase text-on-surface-variant">
                    {e.month}
                  </span>
                  <span className="text-base font-semibold leading-none text-on-surface">
                    {e.day}
                  </span>
                </div>
                <div className="flex flex-col justify-center py-1">
                  <span className="font-medium text-on-surface">{e.title}</span>
                  <span className="text-[13px] text-on-surface-variant">{e.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="group relative cursor-pointer overflow-hidden rounded-3xl border border-outline-variant/50 bg-gradient-to-r from-surface-variant/80 to-surface-variant/30 p-6 transition-all hover:shadow-soft">
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface shadow-sm">
              <Icon name="campaign" className="text-[24px] font-light text-brand" />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant">
                Announcement
              </span>
              <p className="text-[15px] font-medium leading-snug text-on-surface">
                New Payroll Schedule Updated!
              </p>
            </div>
            <Icon
              name="chevron_right"
              className="text-on-surface-variant/50 transition-transform group-hover:translate-x-1"
            />
          </div>
        </section>
      </main>

      <div className="pointer-events-none fixed bottom-0 left-0 z-50 w-full bg-gradient-to-t from-surface via-surface to-transparent px-4 pb-6 pt-2 md:hidden">
        <nav className="pointer-events-auto mx-auto flex h-16 max-w-[400px] items-center justify-between rounded-full border border-outline-variant/40 bg-white/90 px-2 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          {bottomNav.map((n) => (
            <a
              key={n.label}
              href="#"
              className={`group relative flex h-full flex-1 flex-col items-center justify-center transition-all duration-300 ${
                n.active ? "text-brand" : "text-on-surface-variant/70 hover:text-on-surface"
              }`}
            >
              {n.active && <div className="absolute inset-0 rounded-full bg-secondary-container" />}
              <Icon
                name={n.icon}
                className={`relative z-10 text-[24px] ${
                  n.active
                    ? "translate-y-1"
                    : "font-light transition-transform duration-300 group-hover:-translate-y-1"
                }`}
              />
              <span
                className={`relative z-10 text-[10px] ${
                  n.active
                    ? "mt-1 font-semibold"
                    : "absolute bottom-2 mt-1 opacity-0 transition-all duration-300 group-hover:opacity-100"
                }`}
              >
                {n.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
