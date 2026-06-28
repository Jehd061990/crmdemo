"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Search,
  Bell,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  UserCircle,
  CircleDashed,
  LayoutDashboard,
  Users,
  Building2,
  DollarSign,
  ClipboardList,
  BarChart3,
  Settings,
  CheckCircle2,
  Moon,
  ArrowRight,
} from "lucide-react";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { PipelineCard } from "@/components/ui/pipeline-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { PriorityBadge } from "@/components/ui/priority-badge";
import { ReportCard } from "@/components/ui/report-card";
import {
  activityFeed,
  clientLocations,
  kpiCards,
  pipelineColumns,
  projectCards,
  recentLeads,
  reportsData,
  reportColumns,
  salesChartData,
  taskList,
  workspaceName,
} from "../lib/mock-data";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Leads", icon: CircleDashed },
  { label: "Contacts", icon: Users },
  { label: "Companies", icon: Building2 },
  { label: "Deals", icon: DollarSign },
  { label: "Tasks", icon: ClipboardList },
  { label: "Projects", icon: BarChart3 },
  { label: "Reports", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const tableHeaders = [
  "Company",
  "Contact",
  "Industry",
  "Budget",
  "Status",
  "Assigned",
  "Actions",
];

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [tasks, setTasks] = useState(taskList);

  const filteredLeads = useMemo(() => {
    return recentLeads.filter((lead) => {
      const matchesSearch = [
        lead.company,
        lead.contact,
        lead.industry,
        lead.budget,
        lead.assigned,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || lead.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const pageCount = Math.max(1, Math.ceil(filteredLeads.length / 5));

  const visibleLeads = filteredLeads.slice((page - 1) * 5, page * 5);

  const toggleTask = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-[1400px] gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <aside
          className={`flex h-full flex-col rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-5 text-slate-100 shadow-2xl shadow-slate-900/10 transition-all duration-300 ${
            sidebarOpen ? "w-72" : "w-20"
          }`}
        >
          <div className="mb-8 flex items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Brand
              </p>
              <h1 className="text-lg font-semibold uppercase tracking-[0.18em] text-white">
                JANDOC SOFTWARE
              </h1>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNavItem === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveNavItem(item.label)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-900/90 text-white shadow-sm shadow-slate-900/10"
                      : "text-slate-200 hover:bg-slate-900/70 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {sidebarOpen && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto space-y-4 pt-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-800 text-sky-300">
                  <UserCircle className="h-5 w-5" />
                </div>
                {sidebarOpen && (
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Casey Sterling
                    </p>
                    <p className="text-xs text-slate-400">Founder, Jandoc</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <Bell className="h-4 w-4 text-slate-300" />
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-800 text-slate-300 transition hover:bg-slate-700">
                <span className="sr-only">Notifications</span>
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              </button>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300 transition hover:bg-slate-800">
              <Moon className="h-4 w-4" />
              {sidebarOpen ? "Dark mode" : ""}
            </button>
          </div>
        </aside>

        <main className="flex-1">
          <header className="mb-6 flex flex-col gap-6 rounded-[2rem] border border-slate-200/80 bg-white px-6 py-5 shadow-sm shadow-slate-900/5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-sky-700">
                Workspace
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">
                {workspaceName}
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex w-full items-center rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 sm:max-w-md">
                <Search className="mr-3 h-4 w-4 text-slate-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search leads, companies, deals"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100">
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100">
                  <Bell className="h-5 w-5" />
                </button>
                <button
                  onClick={() => router.push("/login")}
                  className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  <ArrowRight className="h-4 w-4" />
                  Sign out
                </button>
                <div className="inline-flex h-12 items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <UserCircle className="h-5 w-5" />
                  </div>
                  <div className="hidden flex-col text-left sm:flex">
                    <p className="text-sm font-semibold text-slate-950">
                      Casey S.
                    </p>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Main office
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="grid gap-6 xl:grid-cols-[1.9fr_1fr]">
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {kpiCards.map((card) => (
                  <DashboardCard key={card.title} title={card.title}>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-3xl font-semibold text-slate-950">
                          {card.value}
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                          {card.label}
                        </p>
                      </div>
                      <span className="rounded-3xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-800">
                        {card.delta}
                      </span>
                    </div>
                  </DashboardCard>
                ))}
              </div>

              <DashboardCard title="Sales Performance">
                <div className="h-[380px] rounded-[2rem] border border-slate-200/90 bg-slate-950/5 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={salesChartData}
                      margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="revenueGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#0ea5e9"
                            stopOpacity={0.45}
                          />
                          <stop
                            offset="95%"
                            stopColor="#0ea5e9"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="leadsGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#38bdf8"
                            stopOpacity={0.35}
                          />
                          <stop
                            offset="95%"
                            stopColor="#38bdf8"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        stroke="#e2e8f0"
                        strokeDasharray="4 4"
                        vertical={false}
                        opacity={0.35}
                      />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#94a3b8" }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#94a3b8" }}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: 24,
                          borderColor: "#e2e8f0",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#0ea5e9"
                        fill="url(#revenueGradient)"
                        strokeWidth={3}
                      />
                      <Area
                        type="monotone"
                        dataKey="leads"
                        stroke="#38bdf8"
                        fill="url(#leadsGradient)"
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </DashboardCard>

              <DashboardCard title="Pipeline Overview">
                <div className="space-y-4">
                  <div className="grid gap-4 lg:grid-cols-3">
                    {pipelineColumns.map((column) => (
                      <div
                        key={column.title}
                        className={`rounded-[1.75rem] border ${column.color} p-4`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm font-semibold text-slate-900">
                            {column.title}
                          </p>
                          <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                            {column.deals.length}
                          </span>
                        </div>
                        <div className="mt-4 space-y-4">
                          {column.deals.map((deal) => (
                            <PipelineCard key={deal.company} {...deal} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DashboardCard>
            </div>

            <div className="space-y-6">
              <DashboardCard title="Recent Leads">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <Search className="h-4 w-4 text-slate-400" />
                      <input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search company or contact"
                        className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </div>
                    <select
                      value={statusFilter}
                      onChange={(event) => setStatusFilter(event.target.value)}
                      className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
                    >
                      <option>All</option>
                      <option>Contacted</option>
                      <option>Qualified</option>
                      <option>Proposal</option>
                      <option>Negotiation</option>
                      <option>New</option>
                    </select>
                  </div>

                  <div className="overflow-hidden rounded-[1.75rem] border border-slate-200">
                    <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
                      <thead className="bg-slate-50 text-slate-500">
                        <tr>
                          {tableHeaders.map((header) => (
                            <th
                              key={header}
                              className="px-5 py-4 font-semibold uppercase tracking-[0.24em]"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {visibleLeads.map((lead) => (
                          <tr
                            key={lead.company}
                            className="transition hover:bg-slate-50"
                          >
                            <td className="px-5 py-4 font-semibold text-slate-900">
                              {lead.company}
                            </td>
                            <td className="px-5 py-4">{lead.contact}</td>
                            <td className="px-5 py-4">{lead.industry}</td>
                            <td className="px-5 py-4">{lead.budget}</td>
                            <td className="px-5 py-4">
                              <StatusBadge status={lead.status} />
                            </td>
                            <td className="px-5 py-4">{lead.assigned}</td>
                            <td className="px-5 py-4">
                              <button className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 transition hover:bg-slate-200">
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <span>
                      Showing {visibleLeads.length} of {filteredLeads.length}{" "}
                      leads
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        disabled={page === 1}
                        onClick={() =>
                          setPage((value) => Math.max(1, value - 1))
                        }
                        className="inline-flex h-10 w-10 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        disabled={page === pageCount}
                        onClick={() =>
                          setPage((value) => Math.min(pageCount, value + 1))
                        }
                        className="inline-flex h-10 w-10 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </DashboardCard>

              <DashboardCard title="Today's Tasks">
                <div className="space-y-4">
                  {tasks.map((task, index) => (
                    <button
                      key={task.title}
                      onClick={() => toggleTask(index)}
                      className={`flex w-full items-center justify-between gap-4 rounded-[1.75rem] border px-4 py-4 text-left transition ${
                        task.completed
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-2xl border ${
                            task.completed
                              ? "border-emerald-500 bg-emerald-500 text-white"
                              : "border-slate-300 bg-white text-slate-300"
                          }`}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p
                            className={`text-sm font-semibold ${
                              task.completed
                                ? "text-slate-400 line-through"
                                : "text-slate-900"
                            }`}
                          >
                            {task.title}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                            Due {task.due} · {task.priority}
                          </p>
                        </div>
                      </div>
                      <PriorityBadge priority={task.priority} />
                    </button>
                  ))}
                </div>
              </DashboardCard>

              <DashboardCard title="Recent Activity">
                <div className="space-y-5">
                  {activityFeed.map((item) => (
                    <div key={item.time} className="flex items-start gap-4">
                      <div className="mt-1 h-3 w-3 rounded-full bg-sky-500" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {item.detail}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>
            </div>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-6">
              <DashboardCard title="Active Projects">
                <div className="grid gap-5 sm:grid-cols-2">
                  {projectCards.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {project.name}
                          </p>
                          <p className="mt-2 text-sm text-slate-500">
                            {project.description}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-slate-500">
                          {project.status}
                        </span>
                      </div>
                      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${project.accent}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>

              <DashboardCard title="Client Locations">
                <div className="rounded-[2rem] border border-slate-200 bg-slate-950/5 p-5">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-900 text-slate-50">
                    <svg viewBox="0 0 360 200" className="h-full w-full">
                      <rect width="360" height="200" fill="#0f172a" />
                      <path
                        d="M20 30 C80 15 140 35 200 20 C260 5 320 35 340 72"
                        stroke="#334155"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M16 148 C72 130 144 142 212 130 C280 118 332 154 344 180"
                        stroke="#334155"
                        strokeWidth="2"
                        fill="none"
                      />
                      {clientLocations.map((location) => (
                        <g key={location.label}>
                          <circle
                            cx={location.x * 1.1 + 10}
                            cy={location.y * 0.9 + 16}
                            r="6"
                            fill="#0ea5e9"
                          />
                          <text
                            x={location.x * 1.1 + 18}
                            y={location.y * 0.9 + 18}
                            fill="#e2e8f0"
                            fontSize="10"
                          >
                            {location.region}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {clientLocations.map((location) => (
                      <div
                        key={location.region}
                        className="rounded-3xl border border-slate-200 bg-white p-4"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {location.region}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Global client base
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </DashboardCard>
            </div>

            <div className="space-y-6">
              <div className="grid gap-6">
                {reportColumns.map((report) => (
                  <ReportCard key={report.title} {...report} />
                ))}
              </div>

              <DashboardCard title="Reports Overview">
                <div className="space-y-5">
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Revenue Trend
                    </p>
                    <div className="mt-4 h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={reportsData.revenue}
                          margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="revGrad"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#0ea5e9"
                                stopOpacity={0.35}
                              />
                              <stop
                                offset="95%"
                                stopColor="#0ea5e9"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            stroke="#e2e8f0"
                            strokeDasharray="3 3"
                            vertical={false}
                          />
                          <XAxis
                            dataKey="label"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8" }}
                          />
                          <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8" }}
                          />
                          <Tooltip
                            contentStyle={{
                              borderRadius: 20,
                              borderColor: "#e2e8f0",
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#0ea5e9"
                            fill="url(#revGrad)"
                            strokeWidth={3}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Conversion Performance
                    </p>
                    <div className="mt-4 h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={reportsData.conversion}
                          margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
                        >
                          <CartesianGrid
                            stroke="#e2e8f0"
                            strokeDasharray="3 3"
                            vertical={false}
                          />
                          <XAxis
                            dataKey="label"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8" }}
                          />
                          <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8" }}
                          />
                          <Tooltip
                            contentStyle={{
                              borderRadius: 20,
                              borderColor: "#e2e8f0",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#8b5cf6"
                            strokeWidth={3}
                            dot={{ r: 5, fill: "#a855f7" }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </DashboardCard>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
