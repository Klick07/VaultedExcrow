import { Link } from "react-router-dom";
import useStore from "../Store";


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
    Freelancer: "Ankit Verma",
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
    freelancer: "Freelancer: Utkarsh Chauhan",
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

const stats = [
  { id: 1, Detail: "Total fund Locked", value: "2545000" },
  { id: 2, Detail: "Active Contracts", value: "5" },
  { id: 3, Detail: "Action Required", value: "2" },
];

export default function ClientDashboard() {
  const showmodal = useStore((state) => state.showmodal);
  const setShowmodal = useStore((state) => state.setShowmodal);
  const closeModal = useStore((state) => state.closeModal);
  const openModal = useStore((state)=>state.openModal)
  return (
    <div className="[background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Hello{"Name"}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-300">
            Analyse your contracts in detail.
          </p>
        </div>

        <div className=" py-24 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4 border-gray-100 "
                >
                  <div className="text-base/7 text-gray-100">{stat.Detail}</div>
                  <div className=" text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex place-content-between pb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-pretty text-white sm:text-2xl">
            Active & Ongoing Contracts
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 ">
            <button
            onClick={openModal}
              className="flex-1 flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg text-gray-100 hover:bg-gray-800 text-l font-medium"
            > Add Contract
            </button>
          </div>
        </div>

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
