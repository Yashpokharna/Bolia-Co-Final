import Image from "next/image";
import React, { useState } from "react";
import { FileText, Download, BookOpen, Video } from "lucide-react";

const ResourcesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources = [
    {
      category: "guide",
      title: "GST Compliance Guide 2025",
      description:
        "Complete handbook covering all aspects of GST filing, input tax credit, and compliance requirements.",
      icon: FileText,
      downloads: "2.4k",
      pages: "45 pages",
      color: "from-blue-500 to-cyan-500",
      link: "https://cleartax.in/s/gst-compliance" // ✅ External link
    },
    {
      category: "template",
      title: "Financial Planning Template",
      description:
        "Excel templates for cash flow forecasting, budget planning, and financial projections.",
      icon: Download,
      downloads: "1.8k",
      pages: "Excel",
      color: "from-green-500 to-emerald-500",
      link: "https://blog.taxrobo.in/tax-planning-strategies-for-startups/" // ✅ External link
    },
    {
      category: "article",
      title: "Tax Saving Strategies for Startups",
      description:
        "Comprehensive article on legitimate tax deductions and planning strategies for new businesses.",
      icon: BookOpen,
      downloads: "3.2k",
      pages: "12 min read",
      color: "from-purple-500 to-pink-500",
      link: "https://blog.taxrobo.in/tax-planning-strategies-for-startups/" // ✅ External link
    },
    {
      category: "video",
      title: "Understanding Company Registration",
      description:
        "Video tutorial walking through the complete process of registering a private limited company.",
      icon: Video,
      downloads: "5.1k",
      pages: "25 min",
      color: "from-orange-500 to-red-500",
      link: "https://pgaca.in/tax-benefits-startups-msmes-india-2025/" // ✅ External link
    },
    {
      category: "guide",
      title: "Export-Import Documentation",
      description:
        "Step-by-step guide for documentation requirements in international trade and EXIM procedures.",
      icon: FileText,
      downloads: "1.5k",
      pages: "38 pages",
      color: "from-indigo-500 to-blue-500",
      link: "https://www.india-briefing.com/news/import-export-procedures-india-19125.html/" // ✅ External link
    },
    {
      category: "template",
      title: "Bookkeeping Checklist",
      description:
        "Monthly, quarterly, and annual bookkeeping checklists to stay compliant and organized.",
      icon: Download,
      downloads: "2.9k",
      pages: "PDF",
      color: "from-cyan-500 to-teal-500",
      link: "https://www.freshbooks.com/en-in/hub/accounting/bookkeeping-checklist" // ✅ External link
    }
  ];

  const categories = [
    { id: "all", label: "All Resources", count: resources.length },
    { id: "guide", label: "Guides", count: resources.filter(r => r.category === "guide").length },
    { id: "template", label: "Templates", count: resources.filter(r => r.category === "template").length },
    { id: "article", label: "Articles", count: resources.filter(r => r.category === "article").length },
    { id: "video", label: "Videos", count: resources.filter(r => r.category === "video").length }
  ];

  const filteredResources =
    selectedCategory === "all"
      ? resources
      : resources.filter(r => r.category === selectedCategory);

  return (
    <section
      id="resources"
      className="relative px-5 py-24 overflow-hidden md:px-16 bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-purple-700 bg-purple-100 border border-purple-300 rounded-full">
            <BookOpen className="w-4 h-4" />
            FREE RESOURCES
          </div>

          <h2 className="mb-6 text-5xl font-black text-gray-900 sm:text-6xl">
            Knowledge Hub
            <span className="block mt-2 text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text">
              Learn & Grow
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Access our library of guides, templates, and resources designed to help your business thrive
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
              }`}
            >
              {cat.label}
              <span
                className={`ml-2 text-sm ${
                  selectedCategory === cat.id ? "text-purple-100" : "text-gray-500"
                }`}
              >
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <div
                key={idx}
                className="relative p-6 transition-all duration-300 bg-white border-2 border-gray-200 group rounded-2xl hover:border-purple-300 hover:shadow-2xl"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">{resource.title}</h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">{resource.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {resource.downloads}
                  </span>
                  <span>{resource.pages}</span>
                </div>

                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full gap-2 px-4 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Read Now
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
