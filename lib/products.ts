export type Product = {
  id: string
  name: string
  title: string
  description: string
  image: string
  features: string[]
}

export const products: Product[] = [
  {
    id: "erp",
    name: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Unify every aspect of your organization from procurement and production to distribution and finance. Scoop ERP gives you a single source of truth for all operational data.",
    image: "/undraw_report_k55w.svg",
    features: [
      "Centralized data management",
      "Real-time operational dashboards",
      "Automated procurement workflows",
      "Production planning and scheduling",
      "Multi-entity support",
      "Custom reporting engine",
    ],
  },
  {
    id: "hrm",
    name: "HRM",
    title: "Human Resource Management",
    description:
      "Manage the entire employee lifecycle from recruitment to retirement. Automate payroll, track performance, and build a thriving workplace culture.",
    image: "/undraw_project-completed_ug9i.svg",
    features: [
      "Applicant tracking system",
      "Automated payroll processing",
      "Performance management",
      "Time and attendance tracking",
      "Employee self-service portal",
      "Learning management system",
    ],
  },
  {
    id: "crm",
    name: "CRM",
    title: "Customer Relationship Management",
    description:
      "Build deeper customer connections with intelligent sales pipelines, marketing automation, and comprehensive customer analytics.",
    image: "/undraw_informed-decision_2jwi.svg",
    features: [
      "Visual sales pipeline",
      "Lead scoring and qualification",
      "Marketing automation",
      "Customer analytics and insights",
      "Email campaign management",
      "Service ticket management",
    ],
  },
  {
    id: "scm",
    name: "SCM",
    title: "Supply Chain Management",
    description:
      "Gain end-to-end visibility into your supply chain. Optimize logistics, manage suppliers, and ensure timely delivery of goods across the globe.",
    image: "/undraw_folder_8dxv.svg",
    features: [
      "Supplier relationship management",
      "Demand forecasting",
      "Logistics and route optimization",
      "Warehouse management",
      "Order fulfillment tracking",
      "Compliance management",
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    title: "Financial Management",
    description:
      "Take complete control of your finances with real-time reporting, multi-currency support, and automated reconciliation that keeps you audit-ready.",
    image: "/undraw_revenue-analysis_fjh2.svg",
    features: [
      "General ledger management",
      "Accounts payable and receivable",
      "Multi-currency transactions",
      "Automated bank reconciliation",
      "Tax compliance and reporting",
      "Financial forecasting",
    ],
  },
  {
    id: "project",
    name: "Project Management",
    title: "Plan, Track and Deliver",
    description:
      "From small tasks to large-scale programs, manage every project with clarity. Gantt charts, resource allocation, and milestone tracking keep teams aligned.",
    image: "/undraw_data_25jw.svg",
    features: [
      "Gantt chart visualization",
      "Resource allocation and planning",
      "Milestone and deadline tracking",
      "Team collaboration tools",
      "Budget and expense tracking",
      "Time logging and reports",
    ],
  },
  {
    id: "inventory",
    name: "Inventory",
    title: "Inventory Management",
    description:
      "Track stock levels across multiple warehouses in real time. Automated reordering, batch tracking, and barcode integration keep your inventory optimized.",
    image: "/undraw_all-the-data_ijgn.svg",
    features: [
      "Real-time stock tracking",
      "Multi-warehouse management",
      "Automated reorder points",
      "Batch and serial number tracking",
      "Barcode and QR integration",
      "Stock valuation reports",
    ],
  },
]

export const productsById = Object.fromEntries(
  products.map((product) => [product.id, product])
) as Record<string, Product>
