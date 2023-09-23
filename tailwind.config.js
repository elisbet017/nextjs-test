import test from "./public/images/hero-mob-1x.jpg";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "only-mob": { min: "320px", max: "767px" },
      "only-tab": { min: "768px", max: "1279px" },
      mobile: "320px",
      tablet: "768px",
      desktop: "1280px",
    },
    extend: {
      backgroundImage: {
        "hero-mob-1x": "url('/src/images/hero-mob-1x.jpg')",
      },
    },
    fontFamily: {
      sans: "Inter, sans-serif",
      kar: "Karantina",
    },
    fontSize: {
      "tn-st": ["10px", "16px"],
      "tw-tw": ["12px", "20px"],
      "tw-tt": ["12px", "22px"],
      "tw-tf": ["12px", "24px"],
      "tw-n": ["12px", "normal"],
      "th-tf": ["13px", "24px"],
      "ft-st": ["14px", "16px"],
      "ft-tw": ["14px", "20px"],
      "ft-tf": ["14px", "24px"],
      "ft-n": ["14px", "normal"],
      "et-fe": ["18px", "48px"],
      "et-n": ["18px", "normal"],
      "tw-st": ["20px", "17px"],
      "th-n": ["30px", "normal"],
      "ts-n": ["37px"],
      "ft-fs": ["40px", "56px"],
      "ss-n": ["67px", "normal"],
    },
    letterSpacing: {
      tightest: "-2.68px",
      tighter: "-1.6px",
      tight: "-0.14px",
      tig: "1.26px",
      xxs: "1.4px",
      xs: "1.6px",
      s: "1.8px",
      m: "2.16px",
      l: "9.48px",
      xl: "26px",
      xxl: "36.48px",
    },
  },
  plugins: [],
};

// hero, menu cheched
