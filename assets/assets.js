import about_profile_pic from "../public/profile_pic.png"
import { FaBriefcase, FaBuildingColumns, FaCode } from "react-icons/fa6"

export const assets = {
    about_profile_pic,
}

export const infoList = [
    {
        icon: <FaCode size={20} />,
        title: 'Languages',
        description: 'HTML, CSS, JavaScript, Kotlin, Swift, Dart',
    },
    {
        icon: <FaBuildingColumns size={20} />,
        title: 'Education',
        description: 'Bachelor Degree of Computer Engineering',
    },
    {
        icon: <FaBriefcase size={20} />,
        title: 'Projects',
        description: 'Built more than 5 projects',
    },
];

export const workData = [
    {
        title: 'Telemedicine',
        description: 'UI/UX, Android, Backend',
        bgImage: '/portofolio/porto_telemedicine.jpg',
    },
    {
        title: 'Tandur',
        description: 'UI/UX, Android, Backend',
        bgImage: '/portofolio/porto_tandur.jpg',
    },
    {
        title: 'Watchdis & GameON',
        description: 'UI/UX, Android, iOS',
        bgImage: '/portofolio/porto_watchdis_gameon.jpg',
    },
    {
        title: 'Direc',
        description: 'UI/UX, Android, Backend',
        bgImage: '/portofolio/porto_direc.jpg',
    },
    {
        title: 'KRESNA',
        description: 'Android (Edu Games)',
        bgImage: '/portofolio/porto_kresna.jpg',
    },
    {
        title: 'SIAP',
        description: 'UI/UX, Android (Flutter)',
        bgImage: '/portofolio/porto_siap.jpg',
    },
    {
        title: 'ValorantPEEK',
        description: 'UI/UX (Design)',
        bgImage: '/portofolio/porto_valorantpeek.jpg',
    },
    {
        title: 'ViuiT Driver & Merchant',
        description: 'Android',
        bgImage: '/portofolio/porto_siap.jpg',
    },
    {
        title: 'SiDOMPUL',
        description: 'Android',
        bgImage: '/portofolio/porto_siap.jpg',
    },
];

export const testimonialData = [
    {
        quote: "Atharian helped us build a telemedicine app from scratch, including backend integration and real-time features. The app runs smoothly and is ready for production use.",
        name: "Product Owner",
        role: "HealthTech Project",
        date: "Oct 2025"
    },
    {
        quote: "The Android app Atharian developed for our agriculture platform (Tandur) is stable and user-friendly. Farmers can easily use it without technical difficulties.",
        name: "Project Manager",
        role: "AgriTech Startup",
        date: "Dec 2025"
    },
    {
        quote: "Atharian delivered both Android and iOS solutions for our platform. The code quality is clean, and the performance optimization significantly improved our app experience.",
        name: "Tech Lead",
        role: "Watchdis & GameON",
        date: "Jan 2026"
    },
    {
        quote: "We implemented an OCR-based verification feature with Atharian, and the accuracy and speed exceeded our expectations. Integration was smooth and reliable.",
        name: "Engineering Manager",
        role: "SiDOMPUL - XL Axiata",
        date: "Feb 2026"
    },
    {
        quote: "Atharian is strong in both frontend and backend. From UI/UX to API integration, everything was handled professionally and delivered on time.",
        name: "Startup Founder",
        role: "Multi-platform Project",
        date: "Mar 2026"
    }
];