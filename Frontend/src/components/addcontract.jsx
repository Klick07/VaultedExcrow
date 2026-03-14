 import { useState, useEffect } from "react";
import useStore from "../store";

export default function Example() {
  const closeModal = useStore((state) => state.closeModal);
  const addContract = useStore((state) => state.addContract);

  const [Name, setName] = useState("");
  const [Job, setJob] = useState("");
  const [number, setNumber] = useState("High");
  const [timeline, setTimeline] = useState("");
  const [contractId] = useState(`contract-${Date.now()}`); // ADDED — fixed on mount

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  function handleSubmit() {
    const newContract = {
      id: contractId, 
      project_analysis: {
        project_type: Name || "untitled_contract",
        complexity: number,
        estimated_total_days: timeline || "TBD",
      },
    };
    addContract(newContract);
    closeModal();
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50"
        onClick={(e) => e.target === e.currentTarget}
      >
        <button
          className="absolute top-30 right-109 z-10 text-[#9b9b9b] text-3xl cursor-pointer leading-none"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        >
          ×
        </button>

        <div className="relative w-full max-w-2xl max-h-[90vh] rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-12 shadow-2xl">

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Contact sales
            </h2>
            <p className="mt-2 text-lg/8 text-gray-400">
              Who is this contract for and what is it about?
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="job-name"
                className="block text-sm/6 font-semibold text-white"
              >
                Job-Name
              </label>
              <div className="mt-2.5">
                <input
                  id="job-name"
                  name="job-name"
                  type="text"
                  autoComplete="off"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="job-desc"
                className="block text-sm/6 font-semibold text-white"
              >
                Job Description
              </label>
              <div className="mt-2.5">
                <input
                  id="job-desc"
                  name="job-desc"
                  type="text"
                  autoComplete="off"
                  value={Job}
                  onChange={(e) => setJob(e.target.value)}
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-white"
              >
                Priority & Timeline
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    >
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="Timeline..."
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2"></div>
            <div className="flex gap-x-4 sm:col-span-2"></div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              onClick={handleSubmit}
              className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Let's talk rubbit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
