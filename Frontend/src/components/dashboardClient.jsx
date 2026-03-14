import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";
import Example from "./addcontract";

const posts = [
  {
    id: 1,
    title: "Social Media Marketing",
    href: "/",
    freelancer: "Shivam Rawat",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "1/04/2024",
    value: 30000,
    milestone: 3,
    stats: "In Progress",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    title: "Marketing Video Production",
    href: "/",
    freelancer: "PixelPerfect Agency",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "1/09/2025",
    value: 40000,
    milestone: 4,
    stats: "In Progress",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "Logistics App GPS Module",
    href: "/",
    freelancer: "Ankit Verma",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "01/09/2023",
    value: 45000,
    milestone: 2,
    stats: "Completed",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    title: "E-commerce Platform Redesign",
    href: "/",
    freelancer: "Utkarsh Chauhan",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    value: 70000,
    milestone: 2,
    stats: "In Progress",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    title: "Social Media Marketing",
    href: "/",
    freelancer: "Shivam Rawat",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    value: 120000,
    milestone: 3,
    stats: "Attention Required",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function ClientDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const openModal = useStore((state) => state.openModal);
  const showmodal = useStore((state) => state.showmodal);
  const contracts = useStore((state) => state.contracts);

  useEffect(() => {
    fetch("http://localhost:5001/projectData")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#080d14] flex items-center justify-center">
        <div className="text-blue-400 font-bold tracking-widest animate-pulse uppercase">
          Initializing Dashboard...
        </div>
      </div>
    );
  }

  const stats = [
    { id: 1, Detail: "Total Earning", value: "25,45,000" },
    { id: 2, Detail: "Active Projects", value: "5" },
    { id: 3, Detail: "Completed", value: "15" },
  ];

  const allActiveProjects = [...data, ...contracts];

  return (
    <div className="min-h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)] py-24 sm:py-32 font-sans">
      {showmodal && <Example />}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Hello {"Suraj"}
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Analyse your projects in detail.
          </p>
        </div>

        <div className="py-24 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4 border-gray-100"
                >
                  <div className="text-base/7 text-gray-100">{stat.Detail}</div>
                  <div className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex justify-between items-center pb-6 border-b border-slate-800 mt-16">
          <h1 className="text-2xl font-semibold text-white">
            Active & Ongoing Contracts
          </h1>
          <button
            className="px-4 py-2 border border-slate-700 rounded-lg text-white hover:bg-slate-800 transition-all text-sm"
            onClick={openModal}
          >
            Add Contract
          </button>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allActiveProjects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="flex max-w-xl mt-16 flex-col items-start justify-between bg-slate-800/60 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 hover:bg-slate-800/80 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.4)] cursor-pointer border-t-2 border-t-blue-500/60"
            >
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                {project.id}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white capitalize">
                {project.project_analysis.project_type.replace(/_/g, " ")}
              </h3>
              <div className="flex gap-3 mt-6">
                <div className="bg-slate-900/60 border border-slate-600 p-3 rounded-xl">
                  <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">
                    Complexity
                  </p>
                  <p className="text-orange-400 text-sm font-semibold uppercase">
                    {project.project_analysis.complexity}
                  </p>
                </div>
                <div className="bg-slate-900/60 border border-slate-600 p-3 rounded-xl">
                  <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">
                    Timeline
                  </p>
                  <p className="text-emerald-400 text-sm font-semibold">
                    {project.project_analysis.estimated_total_days} Days
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-pretty text-white sm:text-2xl mt-10">
          Completed Projects
        </h1>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 border-t border-gray-700 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl mt-16 flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-400">
                  {post.date}
                </time>
                <div className="text-gray-400 p-1 rounded-full border">
                  {post.stats}
                </div>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="size-10 rounded-full bg-gray-800"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-white">
                    <span className="absolute inset-0" />
                    {post.freelancer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
