import React, { useState } from "react";

const data = {
  project_analysis: {
    project_type: "web_application",
    complexity: "high",
    estimated_total_days: 55,
  },
  milestones: [
    {
      id: 1,
      objective: "Discovery & Requirements",
      description:
        "Gather detailed business requirements, define user personas, create user stories, and produce a functional specification document outlining all features, integrations, and acceptance criteria.",
      deliverables: [
        "Requirements Document (PDF)",
        "User Stories backlog (CSV)",
        "Functional Specification (PDF)",
        "Project Plan with timeline (PDF)",
      ],
      acceptance_criteria: [
        "Client signs off on Requirements Document",
        "All user stories reviewed and approved",
        "No open critical questions remain",
        "Project Plan approved with agreed milestones",
      ],
      estimated_days: 5,
      amount_percentage: 5,
    },
    {
      id: 2,
      objective: "UX Design & Prototyping",
      description:
        "Create low\u2011fi wireframes, iterate to high\u2011fi mockups, and build an interactive prototype covering the dashboard, task board, team collaboration views, and analytics pages.",
      deliverables: [
        "Low\u2011fi Wireframes (Figma link)",
        "High\u2011fi Mockups (Figma link)",
        "Interactive Prototype (Figma link)",
        "Design System Documentation (PDF)",
      ],
      acceptance_criteria: [
        "Client approves high\u2011fi mockups for all screens",
        "Design System documented and signed off",
        "Prototype demonstrates navigation flow without errors",
      ],
      estimated_days: 8,
      amount_percentage: 10,
    },
    {
      id: 3,
      objective: "Frontend Development",
      description:
        "Implement the UI in React (or Next.js) using the approved design system, ensuring responsive layout, state management, and integration points for API calls.",
      deliverables: [
        "GitHub repository URL with frontend code",
        "Staging deployment URL for UI",
        "Responsive design verification report (PDF)",
      ],
      acceptance_criteria: [
        "UI matches approved mockups within 5px tolerance on desktop and tablet",
        "All core pages (dashboard, board, analytics) functional",
        "ESLint passes with 0 errors, unit test coverage >= 80%",
        "Performance audit shows LCP < 2.5s on staging",
      ],
      estimated_days: 15,
      amount_percentage: 30,
    },
    {
      id: 4,
      objective: "Backend API & Database",
      description:
        "Develop RESTful (or GraphQL) API services, design the relational database schema, implement authentication/authorization, and expose endpoints for users, teams, boards, tasks, and analytics data.",
      deliverables: [
        "GitHub repository URL with backend code",
        "OpenAPI (Swagger) specification file",
        "Staging API base URL",
        "Database schema diagram (PDF)",
      ],
      acceptance_criteria: [
        "All CRUD endpoints for users, teams, boards, tasks return correct HTTP status codes",
        "Authentication flow conforms to OAuth2/JWT standards",
        "Average response time < 200ms for API calls on staging",
        "Security scan (OWASP ZAP) reports no critical vulnerabilities",
      ],
      estimated_days: 15,
      amount_percentage: 30,
    },
    {
      id: 5,
      objective: "Integration, QA & Analytics",
      description:
        "Integrate frontend with backend, implement analytics visualizations, conduct functional, regression, and performance testing, and fix identified defects.",
      deliverables: [
        "Comprehensive Test Report (PDF)",
        "Bug Tracker export (CSV) with status",
        "Live analytics dashboard URL on staging",
      ],
      acceptance_criteria: [
        "All critical and high severity bugs resolved",
        "Test coverage (unit + integration) >= 80%",
        "Analytics charts display correct data per test scenarios",
        "User Acceptance Testing sign\u2011off from client",
      ],
      estimated_days: 7,
      amount_percentage: 15,
    },
    {
      id: 6,
      objective: "Production Deployment & Documentation",
      description:
        "Deploy the application to production environment, configure DNS and SSL, provide user and admin guides, and conduct final handover.",
      deliverables: [
        "Production URL (HTTPS)",
        "DNS and SSL configuration confirmation (PDF)",
        "User Guide (PDF)",
        "Admin Guide (PDF)",
        "Final project summary report (PDF)",
      ],
      acceptance_criteria: [
        "Application accessible at production URL with 0 downtime during handover",
        "All documentation approved by client",
        "Client confirms successful login, task board usage, and analytics view",
        "Final invoice approved",
      ],
      estimated_days: 5,
      amount_percentage: 10,
    },
  ],
};

function Milestone() {
  const [openId, setOpenId] = useState(1);

  return (
    <div className="min-h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)] p-4 md:p-12 font-sans text-slate-300">
      <header className="max-w-5xl mx-auto mb-12 border-b border-slate-800 pb-8 text-5xl">
        <h1 className="text-xl font-bold text-white mb-6 text-5xl font-semibold tracking-tight text-balance text-white sm:text-3xl">
          {data.project_analysis.project_type.replace("_", " ").toUpperCase()}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm font-medium tracking-wide">
          <span className="bg-slate-800 text-blue-400 px-3 py-1 rounded border border-slate-700">
            COMPLEXITY: {data.project_analysis.complexity.toUpperCase()}
          </span>
          <span className="bg-slate-800 text-emerald-400 px-3 py-1 rounded border border-slate-700">
            DURATION: {data.project_analysis.estimated_total_days} DAYS
          </span>
        </div>
      </header>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-6 text-5xl font-semibold tracking-tight text-balance text-white sm:text-2xl">
          Project Milestones
        </h2>

        <div className="space-y-3">
          {data.milestones.map((milestone) => {
            const isOpen = openId === milestone.id;

            return (
              <div
                key={milestone.id}
                className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden shadow-xl transition-all"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : milestone.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#161e2d] transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/30 text-blue-400 font-bold text-sm border border-blue-800/50">
                      {milestone.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 text-5xl font-semibold tracking-tight text-balance text-white">
                        {milestone.objective}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                        {milestone.amount_percentage}% • Due in{" "}
                        {milestone.estimated_days} days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold border border-blue-500/20 uppercase">
                      Paid
                    </span>
                    {/* SVG Arrow */}
                    <svg
                      className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 pb-8 pt-2 border-t border-slate-800/50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="grid md:grid-cols-2 gap-10 mt-6">
                      {/* Deliverables Column */}
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
                          Deliverables
                        </h4>
                        <div className="space-y-5">
                          {milestone.deliverables.map((item, idx) => (
                            <div key={idx}>
                              <div className="flex items-start gap-3 text-slate-300 mb-2">
                                {/* SVG File Icon */}
                                <svg
                                  className="w-4 h-4 text-blue-500 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                <span className="text-sm font-medium">
                                  {item}
                                </span>
                                <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded uppercase font-bold">
                                  File
                                </span>
                              </div>
                              <div className="ml-7 inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-[11px]">
                                {/* SVG Check Icon */}
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>
                                  Submitted:{" "}
                                  {item.toLowerCase().replace(/ /g, "_")}.pdf
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Acceptance Criteria Column */}
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
                          Acceptance Criteria
                        </h4>
                        <ul className="space-y-3">
                          {milestone.acceptance_criteria.map(
                            (criteria, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                              >
                                {/* SVG Check Circle Icon */}
                                <svg
                                  className="w-4 h-4 text-slate-600 mt-0.5 shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                {criteria}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Milestone;
