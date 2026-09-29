"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Activity,
  Clock,
  LogOut,
  User,
  Bell,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: FolderKanban, label: "Projects", active: false },
  { icon: FileText, label: "Documents", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
];

const statsCards = [
  { label: "Active Projects", value: "3", icon: FolderKanban, trend: "+1 this month", color: "text-primary-light" },
  { label: "Total Investment", value: "$2.4M", icon: DollarSign, trend: "+12% YoY", color: "text-success" },
  { label: "Portfolio Performance", value: "+18.5%", icon: TrendingUp, trend: "Outperforming", color: "text-accent" },
  { label: "Pending Actions", value: "5", icon: Activity, trend: "2 urgent", color: "text-warning" },
];

const recentProjects = [
  { name: "PharmaTech Vietnam Joint Venture", status: "Active", progress: 75, date: "Sep 2026" },
  { name: "Melbourne Cosmeceutical Export Program", status: "In Review", progress: 45, date: "Aug 2026" },
  { name: "AgriTech Distribution Partnership", status: "Active", progress: 60, date: "Jul 2026" },
];

export default function DashboardPage() {
  const t = useTranslations("portal.dashboard");

  return (
    <section className="relative pt-24 pb-16 min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 shrink-0"
          >
            <div className="glass-card p-6 sticky top-28">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User size={20} className="text-primary-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Demo User
                  </p>
                  <p className="text-xs text-text-muted">Investor</p>
                </div>
              </div>

              <nav className="space-y-1">
                {sidebarItems.map(({ icon: Icon, label, active }) => (
                  <button
                    key={label}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? "bg-primary/10 text-primary-light border border-primary/20"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  href="/"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-text-muted hover:text-accent-red hover:bg-surface-hover transition-all"
                >
                  <LogOut size={18} />
                  Sign Out
                </Link>
              </div>
            </div>
          </motion.aside>

          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between"
            >
              <div>
                <h1 className="text-2xl font-bold text-text-primary">
                  {t("title")}
                </h1>
                <p className="text-text-secondary text-sm mt-1">
                  {t("welcome")}, Demo User
                </p>
              </div>
              <button className="relative p-3 rounded-xl glass-light hover:bg-surface-hover transition-all">
                <Bell size={20} className="text-text-secondary" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-red" />
              </button>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {statsCards.map(({ label, value, icon: Icon, trend, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-text-muted text-xs font-medium">
                      {label}
                    </span>
                    <Icon size={18} className={color} />
                  </div>
                  <p className={`text-2xl font-bold ${color}`}>{value}</p>
                  <p className="text-text-muted text-xs mt-1">{trend}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-text-primary">
                  {t("projects")}
                </h3>
                <button className="text-xs text-primary-light hover:underline flex items-center gap-1">
                  View All <ChevronRight size={14} />
                </button>
              </div>

              <div className="space-y-4">
                {recentProjects.map((project, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-surface-hover border border-border transition-all cursor-pointer group"
                  >
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary-light transition-colors">
                        {project.name}
                      </h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            project.status === "Active"
                              ? "bg-success/10 text-success"
                              : "bg-warning/10 text-warning"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-text-muted text-xs flex items-center gap-1">
                          <Clock size={10} />
                          {project.date}
                        </span>
                      </div>
                    </div>

                    <div className="w-24 ml-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-text-muted">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {t("documents")}
                </h3>
                <div className="space-y-3">
                  {[
                    "Q3 2026 Portfolio Report",
                    "Investment Agreement - PharmaTech",
                    "Market Analysis - Vietnam Q2",
                  ].map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border transition-all cursor-pointer"
                    >
                      <FileText size={16} className="text-primary-light shrink-0" />
                      <span className="text-sm text-text-secondary">{doc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {t("messages")}
                </h3>
                <div className="space-y-3">
                  {[
                    { from: "VIAUS Team", msg: "Your Q3 report is ready for review", time: "2h ago" },
                    { from: "Project Manager", msg: "Meeting scheduled for Tuesday", time: "1d ago" },
                    { from: "Legal Team", msg: "Agreement updated - action required", time: "3d ago" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border transition-all cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <User size={14} className="text-primary-light" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-text-primary">
                            {item.from}
                          </span>
                          <span className="text-[10px] text-text-muted">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary truncate mt-0.5">
                          {item.msg}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
