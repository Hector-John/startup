import { FaShoePrints, FaTshirt, FaHandsHelping } from "react-icons/fa";
import {
  FaSearch,
  FaMapSigns,
  FaPalette,
  FaCode,
  FaRocket,
  FaLifeRing,
} from "react-icons/fa";

export const companyName = "Kheem Tech";

export const testimonialData = [
  {
    name: "Travis",
    role: "Owner",
    company: "Trendify",
    icon: <FaShoePrints />,
    image: "/profile1.png",
    review: `Kheem Tech gave our shoe store the kind of web presence that sells. The design is sleek, the user flow is intuitive, and our bounce rate dropped significantly. Within the first week, we saw a noticeable uptick in both traffic and sales. It's exactly what we needed to stand out in a crowded space.`,
    rating: 5,
  },
  {
    name: "Cynthia Yonga",
    role: "Founder",
    company: "Blaze na Yonga",
    icon: <FaTshirt />,
    image: "/profile2.png",
    review: `From brand to build, Kheem Tech nailed it. Our website finally feels like a real digital extension of who we are, vibrant, fast, and engaging. Since launch, user interaction is up and customers are sticking around longer. The mobile app design is also complete and looks stunning. We can’t wait for phase two.`,
    rating: 5,
  },
  {
    name: "Yvonne Dion",
    role: "Coordinator",
    company: "M.Y.T.O",
    icon: <FaHandsHelping />,
    image: "/profile6.png",
   review: `Kheem Tech helped us reimagine how our organization connects online. They transformed our outdated site into a modern, user-friendly platform and integrated a donation system that works seamlessly. Since the launch, we’ve seen a real boost in donor trust, smoother internal processes, and a measurable increase in contributions and engagement.`,
    rating: 5,
  },
];

export const faqData = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on scope, but most projects take 2–6 weeks. We’ll give you a clear timeline after understanding your needs and always keep you in the loop throughout the process.",
  },
  {
    question: "How can AxionTech help my business?",
    answer:
      "We analyze your business needs and implement cutting-edge tech solutions that streamline operations, increase customer engagement, and drive growth. Our expertise ensures that your digital assets are efficient, scalable, and future-proof.",
  },
  {
    question: "How involved will I be in the process?",
    answer:
      "Your involvement is key to the success of the project. We believe in collaboration and will involve you at every step, from initial brainstorming sessions to final reviews of the deliverables.",
  },
  {
    question: "Can you work with my existing brand?",
    answer:
      "Absolutely. We can build around your current brand identity, or help refine and elevate it. Whether you need to stay consistent or evolve visually, we adapt to your direction.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We provide post-launch support, maintenance, and even retainer-based partnerships if you need continued design or development assistance.",
  },
];

export const processSteps = [
  {
    title: "Discovery",
    color: "from-blue-500 to-blue-700",
    icon: FaSearch,
    description:
      "We'll start by understanding your goals, challenges, and audience, the foundation of everything built afterward.",
    bullets: [
      "Clarifying vision and objectives",
      "Reviewing competitors & inspiration",
    ],
    outcome: "Clarity & Alignment",
  },
  {
    title: "Planning",
    color: "from-purple-500 to-purple-700",
    icon: FaMapSigns,
    description:
      "Then define the roadmap: tech stack, architecture, deliverables, and timelines. All structured for clarity.",
    bullets: [
      "Project breakdown and milestones",
      "Selecting tools & approaches",
    ],
    outcome: "Structured Execution Plan",
  },
  {
    title: "Design",
    color: "from-teal-500 to-teal-700",
    icon: FaPalette,
    description:
      "Then translate ideas into sleek, intuitive designs, interfaces that not only look good, but feel great.",
    bullets: [
      "Wireframes & prototyping",
      "Design systems & visual language",
    ],
    outcome: "Visual Direction",
  },
  {
    title: "Development",
    color: "from-indigo-500 to-indigo-700",
    icon: FaCode,
    description:
      "We then craft clean, scalable code built for performance, responsiveness, and seamless integration.",
    bullets: [
      "Frontend + backend logic",
      "API integrations & automation",
    ],
    outcome: "Working Product",
  },
  {
    title: "Launch",
    color: "from-orange-500 to-orange-700",
    icon: FaRocket,
    description:
      "Deploy with precision, ensuring stability, performance, and peace of mind from day one.",
    bullets: ["Pre-launch testing", "Zero-downtime deployment"],
    outcome: "Live Deployment",
  },
  {
    title: "Support",
    color: "from-pink-500 to-pink-700",
    icon: FaLifeRing,
    description:
      "Tech evolves. Stay ahead with continuous maintenance, feature upgrades, and ongoing improvements.",
    bullets: ["Bug fixes & quick turnarounds", "New features & optimizations"],
    outcome: "Ongoing Growth",
  },
];