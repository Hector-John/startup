import { FaShoePrints, FaTshirt, FaHandsHelping } from "react-icons/fa";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaCreditCard,
  FaPaintBrush,
  FaBullhorn,
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
    name: "Yvonne",
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

export const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-xl text-blue-400" />,
    description: "Custom web apps tailored to your needs.",
    points: [
      "Modern, scalable stack",
      "Fully responsive designs",
      "Optimized for speed & SEO",
      "Built for growth",
    ],
  },
  {
    title: "Software Development",
    icon: <FaMobileAlt className="text-xl text-blue-400" />,
    description: "Robust backend logic for modern businesses.",
    points: [
      "Full-stack solutions",
      "Secure data architecture",
      "Process automation",
      "Cloud-native builds",
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler className="text-xl text-blue-400" />,
    description: "Interfaces that are beautiful, intuitive, and fast.",
    points: [
      "Figma-based workflows",
      "Component-level UI kits",
      "User journey mapping",
      "Prototyping & testing",
    ],
  },
  {
    title: "Payment Integrations",
    icon: <FaCreditCard className="text-xl text-blue-400" />,
    description: "Seamless, secure payments made simple.",
    points: [
      "Stripe, PayPal, Flutterwave",
      "Recurring billing support",
      "Custom checkout flows",
      "PCI-compliant practices",
    ],
  },
  {
    title: "Visual & Graphic Design",
    icon: <FaPaintBrush className="text-xl text-blue-400" />,
    description: "Brand visuals and creatives that stand out.",
    points: [
      "Logo & identity design",
      "Brand kits & decks",
      "Illustration support",
      "Marketing asset design",
    ],
  },
  {
    title: "Digital Strategy",
    icon: <FaBullhorn className="text-xl text-blue-400" />,
    description: "A clear plan to build presence and traffic.",
    points: [
      "SEO-driven structures",
      "Social campaign support",
      "Analytics-based improvement",
      "Long-term growth systems",
    ],
  },
];

export const developedProjects = [
  {
    id: 1,
    title: "East Side Street Wear",
    category: "Web Apps",
    tech: ["React", "MongoDB", "PayPal", "M-Pesa"],
    img: "/east.png",
    link: "https://east-side-urban-frontend.onrender.com/",
    description:
      "A fully functional fashion e-commerce website offering clothes, shoes, and jewelry. Built using the MERN stack, the platform supports secure payments via PayPal and M-Pesa, providing a smooth and responsive shopping experience for modern streetwear lovers.",
  },
  {
    id: 2,
    title: "Trendify",
    category: "Web Apps",
    tech: ["React", "MongoDB", "Stripe"],
    img: "/trendify.png",
    link: "https://trendi-fy.netlify.app/",
    description:
      "An exclusive footwear delivery platform built with the MERN stack and Stripe for payments. Users can browse trending sneakers, order instantly, and enjoy seamless delivery, built for speed, style, and simplicity.",
  },
  {
    id: 3,
    title: "MERN Authentication",
    category: "Web Apps",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    img: "/auth.png",
    link: "https://volcan-tech.vercel.app/",
    description:
      "A feature-rich authentication system showcasing Kheem Tech’s backend expertise. It includes secure user login, email verification, password reset flows, and demonstrates how we build scalable, secure auth logic for any application.",
  },
  {
    id: 4,
    title: "Milango ya Tumaini",
    category: "Web Apps",
    tech: ["React", "Tailwind CSS"],
    img: "/myto.png",
    link: "https://my-ngo.vercel.app/",
    description:
      "A complete revamp of a non-profit's site: evolved from a basic landing page into a modern, responsive web experience. We integrated essential tools, streamlined the layout, and empowered them to better connect with their community.",
  },
  {
    id: 5,
    title: "Six Point Victoria",
    category: "Brand & Strategy",
    tech: ["UI/UX", "Marketing Strategy"],
    img: "/Homepage.png",
    link: "https://volcan-tech.vercel.app/",
    description:
      "We reimagined Six Point Victoria’s entire brand presence, starting with a modern website redesign and extending to digital marketing strategy. The transformation led to higher conversions and improved guest engagement across digital platforms.",
  },
  {
    id: 6,
    title: "Lablab Studios",
    category: "Brand Identity",
    tech: ["NextJs", "Typescript"],
    img: "/soonn.png",
    link: "https://volcan-tech.vercel.app/",
    description:
      "Our own creative wing focused on high-end brand design, visual storytelling, and creative direction for startups, studios, and visionaries. Currently under development as a dedicated platform.",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Acorn Designs",
    category: "UI/UX",
    tech: ["Figma"],
    img: "/acorn.png",
    link: "/projects/acorn",
    description:
      "A full-scale website design project aimed at building Acorn’s online presence from the ground up. Our UI/UX approach improved their digital footprint, led to stronger brand engagement, and contributed to noticeable growth in user activity.",
  },
  {
    id: 2,
    title: "Step254",
    category: "UI/UX",
    tech: ["Figma"],
    img: "",
    link: "/projects/step-254",
    description:
      "A mobile app design connecting users with curated mitumba shoes online. The experience is being crafted to feel fluid, trustworthy, and fun, tailored to a young Kenyan audience. Mobile app coming soon.",
  },
];
