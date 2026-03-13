import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router-dom";

const tiers = [
  {
    id: "freelancer",
    name: "Freelancer",
    path: "/signup",
    priceMonthly: "I am a Freelancer",
    description:
      "A fair ecosystem where skills are evaluated objectively and payments are secure.",
    features: [
      "Instant milestone payouts",
      "Secure, automated billing",
      "AI-driven quality checks",
      "Access to a global pool of clients and freelancers",
    ],
    featured: false,
    buttonText: "Join as Freelancer",
  },
  {
    id: "client",
    name: "Client",
    // 1. Add the path for the client component here
    path: "/signupClient",
    priceMonthly: "I am a Client",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "AI-driven project scoping",
      "Auto-generated milestones",
      "Secure, milestone-based billing",
      "Instant refund protection",
      "Zero manual project management",
      "Frictionless dispute resolution",
    ],
    featured: true,
    buttonText: "Hire Top Talent",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative isolate min-h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-3xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Welcome to VaultedEscrow
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
        Log in to your secure portal. Whether you're hiring top-tier freelancers
        or building your next big project, your escrow and milestones are
        protected here.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-gray-800"
                : "bg-white/2.5 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-white/10 sm:p-10",
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-indigo-400" : "text-indigo-400",
                "text-base/7 font-semibold",
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-white",
                  "text-4xl font-semibold tracking-tight",
                )}
              >
                {tier.priceMonthly}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-300",
                "mt-6 text-base/7",
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-300",
                "mt-8 space-y-3 text-sm/6 sm:mt-10",
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-indigo-400" : "text-indigo-400",
                      "h-6 w-5 flex-none",
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              // 2. Change `to="/login"` to `to={tier.path}`
              to={tier.path}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500"
                  : "bg-white/10 text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10",
              )}
            >
              {tier.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}