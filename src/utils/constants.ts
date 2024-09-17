// Import assets
import hill from "../assets/img/hill.jpg";
import ocean from "../assets/img/ocean.jpg";
import rose from "../assets/img/rose.jpg";
import shoe from "../assets/img/shoe.jpg";
import water from "../assets/img/water.jpg";

// Constant value
export const ABOUT = "/about";

// API endpoint
export const accordionURL = "https://jsonplaceholder.typicode.com";
export const memeURL = "https://meme-api.com";

// Assets
export { default as logo } from "../assets/img/photo.jpg";
export const carouselImages = [
  {
    src: rose,
    alt: "Beautiful Flower",
  },
  {
    src: shoe,
    alt: "Comfortable Shoe",
  },
  {
    src: ocean,
    alt: "Ocean View",
  },
  {
    src: hill,
    alt: "Hill View",
  },
  {
    src: water,
    alt: "Clean Water",
  },
];


// data
export const options = [
  {
    code: "en",
    language: "English",
  },
  {
    code: "hi",
    language: "Hindi",
  },
  {
    code: "ur",
    language: "Urdu",
  },
  {
    code: "bn",
    language: "Bengali",
  },
];

export const menus = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "about",
    text: "About",
  },
  {
    href: "service",
    text: "Service",
  },
  {
    href: "contact",
    text: "Contact",
  },
  {
    href: "accordion",
    text: "Accordion",
  },
  {
    href: "users",
    text: "Users",
  },
  {
    href: "carousel",
    text: "Carousel",
  },
];


export const aboutData = {
  en: {
    personalInfo: {
      name: "Saddam Hussain",
      phone: "6201004593",
      email: "mshussain5073@gmail.com",
      github: "https://github.com/yourprofile",
      portfolio: "https://yourportfolio.com",
      linkedin: "https://linkedin.com/in/yourprofile",
    },
    careerSummary: `Experienced Senior Frontend Developer with over 5.8+ years specializing in modern web development,
      primarily using the MERN stack. Proven track record of building scalable, high-performance web solutions,
      leading frontend teams, and driving business growth through innovative UI/UX design and frontend technologies.`,
    technicalSkills: {
      frontend: "React, Redux, HTML5, CSS3, SASS, Tailwind CSS",
      backend: "Node.js, Express.js, MongoDB (Basic Knowledge)",
      tools:
        "Git, Webpack, Babel, Jest, React Testing Library (RTL), PWAs, Service Workers, Apollo Client",
      concepts:
        "SOLID and DRY Principles, Atomic Design, Micro Frontend Architecture, CI/CD pipelines",
      systemDesign:
        "HLD, LLD, Networking, Performance Optimization, Security Best Practices",
    },
    experience: [
      {
        company: "Classic Informatics Pvt Ltd",
        role: "Senior Frontend Developer",
        period: "April 2021–Present",
        location: "Gurugram, Haryana",
        achievements: [
          "Led the frontend development of multiple high-visibility projects...",
          "Built robust, reusable, and scalable UI components...",
          "Streamlined development workflows with CI/CD...",
        ],
      },
      {
        company: "Al Khaleej Modern Light",
        role: "System Engineer",
        period: "Oct 2018–Nov 2020",
        location: "Doha, Qatar",
        achievements: [
          "Enhanced the frontend user experience...",
          "Collaborated with designers and developers...",
        ],
      },
    ],
    projects: [
      {
        name: "ShowRoom360",
        techStack: "TypeScript, React, Redux, GraphQL, Apollo Client...",
        details: [
          "Spearheaded the development of a vehicle sales e-commerce platform...",
          "Reduced page load times by 30%...",
        ],
      },
      {
        name: "TMCA-Hydrogen",
        techStack: "TypeScript, React.js, Next.js, Redux...",
        details: [
          "Led the frontend development of a next-generation platform...",
        ],
      },
    ],
    education: {
      degree:
        "Bachelor of Technology in Electronics & Communication Engineering",
      institution: "Maulana Abul Kalam Azad University of Technology",
      graduation: "May 2018",
    },
  },
  hi: {
    personalInfo: {
      name: "सद्दाम हुसैन",
      phone: "6201004593",
      email: "mshussain5073@gmail.com",
      github: "https://github.com/yourprofile",
      portfolio: "https://yourportfolio.com",
      linkedin: "https://linkedin.com/in/yourprofile",
    },
    careerSummary: `5.8+ साल के अनुभव के साथ एक वरिष्ठ फ्रंटएंड डेवलपर, जो आधुनिक वेब विकास में विशेषज्ञता रखते हैं,
      मुख्य रूप से MERN स्टैक का उपयोग करते हुए। स्केलेबल, उच्च-प्रदर्शन वेब समाधानों का निर्माण करने, फ्रंटएंड टीमों का नेतृत्व करने,
      और UI/UX डिज़ाइन और फ्रंटएंड तकनीकों के माध्यम से व्यवसाय की वृद्धि को बढ़ावा देने का सिद्ध ट्रैक रिकॉर्ड।`,
    technicalSkills: {
      frontend: "React, Redux, HTML5, CSS3, SASS, Tailwind CSS",
      backend: "Node.js, Express.js, MongoDB (मूलभूत ज्ञान)",
      tools:
        "Git, Webpack, Babel, Jest, React Testing Library (RTL), PWAs, Service Workers, Apollo Client",
      concepts:
        "SOLID और DRY सिद्धांत, परमाणु डिज़ाइन, माइक्रो फ्रंटेंड आर्किटेक्चर, CI/CD पाइपलाइन्स",
      systemDesign:
        "HLD, LLD, नेटवर्किंग, प्रदर्शन अनुकूलन, सुरक्षा सर्वोत्तम प्रथाएँ",
    },
    experience: [
      {
        company: "Classic Informatics Pvt Ltd",
        role: "वरिष्ठ फ्रंटएंड डेवलपर",
        period: "अप्रैल 2021–वर्तमान",
        location: "गुरुग्राम, हरियाणा",
        achievements: [
          "कई उच्च दृश्यता वाले प्रोजेक्ट्स के फ्रंटएंड विकास का नेतृत्व किया...",
          "मजबूत, पुन: प्रयोज्य और स्केलेबल UI घटक बनाए...",
          "CI/CD के साथ विकास कार्यप्रवाह को सुव्यवस्थित किया...",
        ],
      },
      {
        company: "Al Khaleej Modern Light",
        role: "सिस्टम इंजीनियर",
        period: "अक्टूबर 2018–नवंबर 2020",
        location: "दोहा, कतर",
        achievements: [
          "फ्रंटएंड उपयोगकर्ता अनुभव को बढ़ाया...",
          "डिजाइनरों और डेवलपर्स के साथ सहयोग किया...",
        ],
      },
    ],
    projects: [
      {
        name: "ShowRoom360",
        techStack: "TypeScript, React, Redux, GraphQL, Apollo Client...",
        details: [
          "एक वाहन बिक्री ई-कॉमर्स प्लेटफ़ॉर्म का नेतृत्व किया...",
          "पृष्ठ लोड समय को 30% तक कम किया...",
        ],
      },
      {
        name: "TMCA-Hydrogen",
        techStack: "TypeScript, React.js, Next.js, Redux...",
        details: ["अगली पीढ़ी के प्लेटफ़ॉर्म का फ्रंटएंड विकास किया..."],
      },
    ],
    education: {
      degree: "इलेक्ट्रॉनिक्स और संचार इंजीनियरिंग में बैचलर ऑफ टेक्नोलॉजी",
      institution: "मौलाना अबुल कलाम आजाद प्रौद्योगिकी विश्वविद्यालय",
      graduation: "मई 2018",
    },
  },
  ur: {
    personalInfo: {
      name: "سدام حسین",
      phone: "6201004593",
      email: "mshussain5073@gmail.com",
      github: "https://github.com/yourprofile",
      portfolio: "https://yourportfolio.com",
      linkedin: "https://linkedin.com/in/yourprofile",
    },
    careerSummary: `5.8+ سال کے تجربے کے ساتھ ایک سینئر فرنٹ اینڈ ڈویلپر جو جدید ویب ترقی میں مہارت رکھتے ہیں،
      بنیادی طور پر MERN اسٹیک کا استعمال کرتے ہوئے۔ اسکیل ایبل، ہائی پرفارمنس ویب حل بنانے، فرنٹ اینڈ ٹیموں کی قیادت کرنے،
      اور UI/UX ڈیزائن اور فرنٹ اینڈ ٹیکنالوجیز کے ذریعے کاروباری ترقی کو فروغ دینے کا ثابت شدہ ٹریک ریکارڈ۔`,
    technicalSkills: {
      frontend: "React, Redux, HTML5, CSS3, SASS, Tailwind CSS",
      backend: "Node.js, Express.js, MongoDB (بنیادی علم)",
      tools:
        "Git, Webpack, Babel, Jest, React Testing Library (RTL), PWAs, Service Workers, Apollo Client",
      concepts:
        "SOLID اور DRY اصول، ایٹومک ڈیزائن، مائیکرو فرنٹ اینڈ آرکیٹیکچر، CI/CD پائپ لائنز",
      systemDesign:
        "HLD, LLD, نیٹ ورکنگ، پرفارمنس آپٹیمائزیشن، سیکیورٹی بہترین طریقے",
    },
    experience: [
      {
        company: "Classic Informatics Pvt Ltd",
        role: "سینئر فرنٹ اینڈ ڈویلپر",
        period: "اپریل 2021–موجودہ",
        location: "گروگرام، ہریانہ",
        achievements: [
          "متعدد ہائی ویژبل پروجیکٹس کی فرنٹ اینڈ ڈویلپمنٹ کی قیادت کی...",
          "مضبوط، دوبارہ استعمال کے قابل، اور اسکیل ایبل UI کمپوننٹس بنائے...",
          "CI/CD کے ساتھ ترقیاتی ورک فلو کو ہموار کیا...",
        ],
      },
      {
        company: "Al Khaleej Modern Light",
        role: "سسٹم انجینئر",
        period: "اکتوبر 2018–نومبر 2020",
        location: "دوحہ، قطر",
        achievements: [
          "فرنٹ اینڈ صارف کے تجربے کو بہتر بنایا...",
          "ڈیزائنرز اور ڈویلپرز کے ساتھ مل کر کام کیا...",
        ],
      },
    ],
    projects: [
      {
        name: "ShowRoom360",
        techStack: "TypeScript, React, Redux, GraphQL, Apollo Client...",
        details: [
          "ایک گاڑی کی فروخت ای کامرس پلیٹ فارم کی قیادت کی...",
          "صفحات کے لوڈ کا وقت 30% تک کم کیا...",
        ],
      },
      {
        name: "TMCA-Hydrogen",
        techStack: "TypeScript, React.js, Next.js, Redux...",
        details: ["اگلی نسل کے پلیٹ فارم کی فرنٹ اینڈ ڈویلپمنٹ کی قیادت کی..."],
      },
    ],
    education: {
      degree: "الیکٹرانکس اور کمیونیکیشن انجینئرنگ میں بیچلر آف ٹیکنالوجی",
      institution: "مولانا ابوالکلام آزاد یونیورسٹی آف ٹیکنالوجی",
      graduation: "مئی 2018",
    },
  },
  bn: {
    personalInfo: {
      name: "সাদ্দাম হোসেন",
      phone: "6201004593",
      email: "mshussain5073@gmail.com",
      github: "https://github.com/yourprofile",
      portfolio: "https://yourportfolio.com",
      linkedin: "https://linkedin.com/in/yourprofile",
    },
    careerSummary: `৫.৮+ বছরের অভিজ্ঞতার সাথে একজন সিনিয়র ফ্রন্টএন্ড ডেভেলপার যিনি আধুনিক ওয়েব উন্নয়নে দক্ষ,
      প্রধানত MERN স্ট্যাক ব্যবহার করে। স্কেলযোগ্য, উচ্চ-পারফরম্যান্স ওয়েব সমাধান তৈরি করা, ফ্রন্টএন্ড দলের নেতৃত্ব দেওয়া,
      এবং UI/UX ডিজাইন এবং ফ্রন্টএন্ড প্রযুক্তির মাধ্যমে ব্যবসায়িক বৃদ্ধিকে উত্সাহিত করার প্রমাণিত ট্র্যাক রেকর্ড।`,
    technicalSkills: {
      frontend: "React, Redux, HTML5, CSS3, SASS, Tailwind CSS",
      backend: "Node.js, Express.js, MongoDB (বেসিক জ্ঞান)",
      tools:
        "Git, Webpack, Babel, Jest, React Testing Library (RTL), PWAs, Service Workers, Apollo Client",
      concepts:
        "SOLID এবং DRY নীতি, এটমিক ডিজাইন, মাইক্রো ফ্রন্টএন্ড আর্কিটেকচার, CI/CD পাইপলাইন",
      systemDesign:
        "HLD, LLD, নেটওয়ার্কিং, পারফরম্যান্স অপ্টিমাইজেশন, সিকিউরিটি সেরা অনুশীলন",
    },
    experience: [
      {
        company: "Classic Informatics Pvt Ltd",
        role: "সিনিয়র ফ্রন্টএন্ড ডেভেলপার",
        period: "এপ্রিল 2021–বর্তমান",
        location: "গুরুগ্রাম, হরিয়ানা",
        achievements: [
          "একাধিক উচ্চ দৃশ্যমান প্রকল্পের ফ্রন্টএন্ড উন্নয়নের নেতৃত্ব দিয়েছেন...",
          "মজবুত, পুনরায় ব্যবহারযোগ্য এবং স্কেলযোগ্য UI উপাদান তৈরি করেছেন...",
          "CI/CD এর সাথে উন্নয়ন কর্মপ্রবাহকে স্বাভাবিক করা...",
        ],
      },
      {
        company: "Al Khaleej Modern Light",
        role: "সিস্টেম ইঞ্জিনিয়ার",
        period: "অক্টোবর 2018–নভেম্বর 2020",
        location: "দোহা, কাতার",
        achievements: [
          "ফ্রন্টএন্ড ব্যবহারকারীর অভিজ্ঞতা উন্নত করেছেন...",
          "ডিজাইনার এবং ডেভেলপারদের সাথে সহযোগিতা করেছেন...",
        ],
      },
    ],
    projects: [
      {
        name: "ShowRoom360",
        techStack: "TypeScript, React, Redux, GraphQL, Apollo Client...",
        details: [
          "একটি গাড়ি বিক্রয় ই-কমার্স প্ল্যাটফর্মের উন্নয়ন পরিচালনা করেছেন...",
          "পৃষ্ঠা লোড সময় 30% কমিয়েছে...",
        ],
      },
      {
        name: "TMCA-Hydrogen",
        techStack: "TypeScript, React.js, Next.js, Redux...",
        details: [
          "একটি পরবর্তী প্রজন্মের প্ল্যাটফর্মের ফ্রন্টএন্ড উন্নয়নের নেতৃত্ব দিয়েছেন...",
        ],
      },
    ],
    education: {
      degree:
        "ইলেকট্রনিক্স এবং কমিউনিকেশন ইঞ্জিনিয়ারিংয়ে ব্যাচেলর অফ টেকনোলজি",
      institution: "মাওলানা আবুল কালাম আজাদ প্রযুক্তি বিশ্ববিদ্যালয়",
      graduation: "মে 2018",
    },
  },
};
