export const workspaceName = "Jandoc Software CRM";

export const kpiCards = [
  { title: "Total Leads", value: "128", delta: "+12%", label: "vs last month" },
  { title: "Open Deals", value: "43", delta: "+8%", label: "pipeline growth" },
  {
    title: "Revenue",
    value: "$124,000",
    delta: "+18%",
    label: "monthly bookings",
  },
  {
    title: "Conversion Rate",
    value: "23%",
    delta: "+2%",
    label: "lead to deal",
  },
];

export const salesChartData = [
  { month: "Jan", revenue: 42, leads: 22 },
  { month: "Feb", revenue: 58, leads: 28 },
  { month: "Mar", revenue: 67, leads: 34 },
  { month: "Apr", revenue: 79, leads: 40 },
  { month: "May", revenue: 88, leads: 46 },
  { month: "Jun", revenue: 106, leads: 52 },
  { month: "Jul", revenue: 124, leads: 59 },
  { month: "Aug", revenue: 114, leads: 55 },
  { month: "Sep", revenue: 128, leads: 60 },
  { month: "Oct", revenue: 138, leads: 67 },
  { month: "Nov", revenue: 146, leads: 72 },
  { month: "Dec", revenue: 158, leads: 78 },
];

export const pipelineColumns = [
  {
    title: "New Lead",
    color: "bg-sky-500/10 border-sky-500/20",
    deals: [
      {
        company: "ABC Restaurant",
        contact: "Maya Lin",
        value: "$8.2k",
        priority: "High",
      },
      {
        company: "Metro Logistics",
        contact: "Jason Cole",
        value: "$5.4k",
        priority: "Medium",
      },
    ],
  },
  {
    title: "Qualified",
    color: "bg-emerald-500/10 border-emerald-500/20",
    deals: [
      {
        company: "Prime Realty",
        contact: "Olivia Hart",
        value: "$12.1k",
        priority: "High",
      },
      {
        company: "Northwind Trading",
        contact: "Adam Chen",
        value: "$6.0k",
        priority: "Low",
      },
    ],
  },
  {
    title: "Proposal",
    color: "bg-violet-500/10 border-violet-500/20",
    deals: [
      {
        company: "GreenTech Solutions",
        contact: "Nina Patel",
        value: "$23.8k",
        priority: "High",
      },
      {
        company: "Velocity Transport",
        contact: "Ethan Ross",
        value: "$14.7k",
        priority: "Medium",
      },
    ],
  },
  {
    title: "Negotiation",
    color: "bg-amber-500/10 border-amber-500/20",
    deals: [
      {
        company: "Sunrise Medical",
        contact: "Paula Grant",
        value: "$31.4k",
        priority: "High",
      },
    ],
  },
  {
    title: "Won",
    color: "bg-slate-900/10 border-slate-900/20",
    deals: [
      {
        company: "BluePeak Construction",
        contact: "Oliver Banks",
        value: "$42.9k",
        priority: "High",
      },
    ],
  },
];

export const recentLeads = [
  {
    company: "ABC Restaurant",
    contact: "Maya Lin",
    industry: "Hospitality",
    budget: "$18k",
    status: "Contacted",
    assigned: "Chris Gomez",
  },
  {
    company: "Metro Logistics",
    contact: "Jason Cole",
    industry: "Transport",
    budget: "$12k",
    status: "Qualified",
    assigned: "Dana Kim",
  },
  {
    company: "Prime Realty",
    contact: "Olivia Hart",
    industry: "Real Estate",
    budget: "$27k",
    status: "Proposal",
    assigned: "Sam Reed",
  },
  {
    company: "GreenTech Solutions",
    contact: "Nina Patel",
    industry: "Energy",
    budget: "$34k",
    status: "Negotiation",
    assigned: "Mia Park",
  },
  {
    company: "Velocity Transport",
    contact: "Ethan Ross",
    industry: "Logistics",
    budget: "$22k",
    status: "New",
    assigned: "Lucas Ford",
  },
];

export const taskList = [
  {
    title: "Prepare proposal for Sunrise Medical",
    due: "Today",
    priority: "High",
    completed: false,
  },
  {
    title: "Review Q4 pipeline with sales team",
    due: "Today",
    priority: "Medium",
    completed: false,
  },
  {
    title: "Call Prime Realty about contract terms",
    due: "Tomorrow",
    priority: "High",
    completed: false,
  },
  {
    title: "Update lead score model",
    due: "Thu",
    priority: "Low",
    completed: false,
  },
];

export const activityFeed = [
  {
    time: "09:10",
    title: "Lead Created",
    detail: "New opportunity added for ABC Restaurant.",
  },
  {
    time: "10:40",
    title: "Proposal Sent",
    detail: "Proposal delivered to Prime Realty for CRM upgrade.",
  },
  {
    time: "13:05",
    title: "Meeting Scheduled",
    detail: "Call booked with GreenTech Solutions.",
  },
  {
    time: "15:20",
    title: "Payment Received",
    detail: "Partial retainer paid by BluePeak Construction.",
  },
];

export const projectCards = [
  {
    name: "CRM Upgrade",
    status: "66%",
    description: "Enterprise workflow automation for sales teams.",
    progress: 66,
    accent: "from-sky-500 to-cyan-500",
  },
  {
    name: "POS Development",
    status: "88%",
    description:
      "Retail checkout and inventory sync for multi-location brands.",
    progress: 88,
    accent: "from-emerald-500 to-lime-500",
  },
  {
    name: "Inventory System",
    status: "53%",
    description: "Real-time stock control and order management.",
    progress: 53,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Restaurant Dashboard",
    status: "72%",
    description: "Kitchen operations and guest analytics in one view.",
    progress: 72,
    accent: "from-amber-500 to-orange-500",
  },
  {
    name: "AI Automation",
    status: "49%",
    description: "Workflow AI assistants for lead qualification.",
    progress: 49,
    accent: "from-slate-900 to-slate-500",
  },
];

export const clientLocations = [
  { label: "United States", region: "USA", x: 24, y: 28 },
  { label: "Australia", region: "Australia", x: 72, y: 72 },
  { label: "Philippines", region: "Philippines", x: 64, y: 46 },
  { label: "Canada", region: "Canada", x: 18, y: 18 },
];

export const reportsData = {
  revenue: [
    { label: "Jan", value: 42 },
    { label: "Feb", value: 58 },
    { label: "Mar", value: 67 },
    { label: "Apr", value: 79 },
    { label: "May", value: 88 },
    { label: "Jun", value: 106 },
  ],
  leads: [
    { label: "Jan", value: 22 },
    { label: "Feb", value: 28 },
    { label: "Mar", value: 34 },
    { label: "Apr", value: 40 },
    { label: "May", value: 46 },
    { label: "Jun", value: 52 },
  ],
  conversion: [
    { label: "Jan", value: 15 },
    { label: "Feb", value: 17 },
    { label: "Mar", value: 18 },
    { label: "Apr", value: 20 },
    { label: "May", value: 21 },
    { label: "Jun", value: 23 },
  ],
};

export const reportColumns = [
  { title: "Revenue", value: "$124k", delta: "+18%", tone: "sky" },
  { title: "Leads", value: "128", delta: "+12%", tone: "emerald" },
  { title: "Conversion", value: "23%", delta: "+2%", tone: "violet" },
  { title: "Sales", value: "$98k", delta: "+11%", tone: "amber" },
];
