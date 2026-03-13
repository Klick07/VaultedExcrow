import {
  CheckCircle2,
  Lock,
  FileText,
  ArrowRight,
  BrainCircuit,
  Upload,
  CheckSquare,
  Server,
} from "lucide-react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Center } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import MorphingParticles from "./dot.jsx";

const posts = [
  {
    id: 1,
    title: "Structured Milestones for Transparent Payments",
    href: "#",
    description:
      "No vague promises. Define strict deliverables, acceptance criteria, and out-of-scope items. Clear milestones ensure both parties know exactly what is expected, eliminating ambiguity and fostering trust.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Funds Locked, Work Secured",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Automated Reviews for Unbiased Outcomes",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { title: "Business", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const Hero = (props) => {
  const scrollRef = useRef();
  const sentences = [
    "Milestone contracts",
    "Automated Escrow",
    "Treasure for freelancers",
  ];
  const speed = 70;
  const delay = 1500;
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const i = loopNum % sentences.length;
    const fullText = sentences[i];
    const handleTyping = () => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(speed);
      } else {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(speed / 2);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, sentences, speed, delay]);

  return (
    <>
      {/* 3d model background */}
      <Canvas ref={scrollRef} style={{ width: "100vw", height: "100vh", position: "fixed", top:"0px", left:"0px" }}>
        {/* <Model scale={0.5} position={[0, 0, 0]} /> */}
        <Center>
          <MorphingParticles
            scrollrefgive={scrollRef}
            urlA="/space_station-transformed.glb"
            urlB="/fox_model.glb"
            urlC="/vault.glb"
            color="#00f3ff"
            scale={2}
          />
        </Center>

        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className=" h-screen [background:radial-gradient(ellipse_at_center,_#1a2535_0%,_#080d14_100%)]">
        <div className=" mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Built for Indian Freelancers & Agencies{" "}
              <a href="#" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-[#4169E1] sm:text-7xl">
             VaultedEscrow 
             </h1>
             <h2 className="text-3xl my-8 font-semibold tracking-tight text-pretty text-white sm:text-3xl">
             {text}
             </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              The fair way to work. Funds are held in escrow and released automatically based on objective milestone completion. No bias, no manual admins.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#4169E1] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* how it works section */}
      <section className="bg-[#080d14] py-20 border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-100">How It Works</h2>
            <p className="mt-2 text-gray-300">
              A completely transparent, rule-based workflow.
            </p>
          </div>

          <div className="relative ">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  icon: CheckSquare,
                  title: "1. Define Milestones",
                  desc: "Set strict deliverables & criteria.",
                },
                {
                  icon: Lock,
                  title: "2. Lock Funds",
                  desc: "Client deposits amount safely.",
                },
                {
                  icon: Upload,
                  title: "3. Submit Evidence",
                  desc: "Freelancer uploads proof of work.",
                },
                {
                  icon: Server,
                  title: "4. System Outcome",
                  desc: "Auto-release or report generated.",
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="bg-white border-2 border-blue-50 h-24 w-24 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <step.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System driven test */}
      <div className="bg-[#080d14] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              System-Driven Trust
            </h2>
            <p className="mt-2 text-lg/8 text-gray-300">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
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
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#080d14]">
      <section className="py-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" rounded-3xl p-12 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why TrustVault?</h2>
              <ul className="space-y-4">
                {[
                  "Eliminate scope creep with strict acceptance criteria.",
                  "System-generated dispute reports.",
                  "Bank transfers (NEFT/IMPS) for Indian users.",
                  "Milestone Quality Scores guide better contracts."
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-emerald-400 h-6 w-6 flex-shrink-0" />
                    <span className="text-lg text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
               <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center font-bold">AV</div>
                    <div>
                       <p className="font-medium">Ankit Verma</p>
                       <p className="text-xs text-slate-400">Freelance Developer</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 text-sm font-medium">Funds Released</span>
               </div>
               <p className="text-slate-300 italic">"The automated review report saved me. The system proved my code met the criteria despite the client's subjective complaints."</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Hero;
