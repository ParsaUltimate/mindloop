export interface TranslationSchema {
  nav: {
    home: string;
    howItWorks: string;
    philosophy: string;
    cases: string;
  };
  hero: {
    subscribers: string;
    headingPrefix: string;
    headingItalic: string;
    headingSuffix: string;
    subtitle: string;
    placeholder: string;
    subscribe: string;
    subscribed: string;
    successMessage: string;
    errorMessage: string;
  };
  search: {
    titlePrefix: string;
    titleItalic: string;
    titleSuffix: string;
    subtitle: string;
    chatgptTitle: string;
    chatgptDesc: string;
    perplexityTitle: string;
    perplexityDesc: string;
    googleTitle: string;
    googleDesc: string;
    footerText: string;
  };
  mission: {
    p1: string;
    p2: string;
    highlights: string[];
    loadingVideo: string;
  };
  solution: {
    tag: string;
    titlePrefix: string;
    titleItalic: string;
    titleSuffix: string;
    loadingVideo: string;
    curatedTitle: string;
    curatedDesc: string;
    writerTitle: string;
    writerDesc: string;
    communityTitle: string;
    communityDesc: string;
    distTitle: string;
    distDesc: string;
  };
  cta: {
    headingPrefix: string;
    headingItalic: string;
    headingSuffix: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  footer: {
    rights: string;
    builtBy: string;
    privacy: string;
    terms: string;
    contact: string;
  };
  loading: {
    init: string;
    typo: string;
    network: string;
    handshake: string;
    bufferedHero: string;
    bufferedMission: string;
    bufferedCases: string;
    ready: string;
    preload: string;
    loadingVideo: string;
  };
}

export const translations: Record<"en" | "fa", TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      philosophy: "Philosophy",
      cases: "Use Cases",
    },
    hero: {
      subscribers: "7,000+ people already subscribed",
      headingPrefix: "Get ",
      headingItalic: "Inspired",
      headingSuffix: " with Us",
      subtitle: "Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.",
      placeholder: "Your email address...",
      subscribe: "SUBSCRIBE",
      subscribed: "SUBSCRIBED",
      successMessage: "Successfully subscribed to Mindloop.",
      errorMessage: "Please enter a valid email address.",
    },
    search: {
      titlePrefix: "Search has ",
      titleItalic: "changed.",
      titleSuffix: " Have you?",
      subtitle: "We are shifting from links to answers. The platforms that serve us are evolving rapidly. Understanding them is your new advantage.",
      chatgptTitle: "ChatGPT",
      chatgptDesc: "Conversational reasoning and generative intelligence pushing the boundary of personal assistance and creative ideation.",
      perplexityTitle: "Perplexity",
      perplexityDesc: "The answer engine. Blending deep search with synthesized summaries to replace the traditional endless link scrolling.",
      googleTitle: "Google AI",
      googleDesc: "The world’s information catalog gets generative. Rich overviews restructuring how context is absorbed globally.",
      footerText: "If you don't answer the questions, someone else will.",
    },
    mission: {
      p1: "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.",
      p2: "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.",
      highlights: ["curiosity", "meets", "clarity"],
      loadingVideo: "LOADING VIDEO",
    },
    solution: {
      tag: "SOLUTION",
      titlePrefix: "The platform for ",
      titleItalic: "meaningful",
      titleSuffix: " content",
      loadingVideo: "LOADING VIDEO",
      curatedTitle: "Curated Feed",
      curatedDesc: "Algorithm-free curation ensuring only the highest signal-to-noise ratio in your daily reading.",
      writerTitle: "Writer Tools",
      writerDesc: "A distraction-free editor with integrated publishing, SEO, and audience metrics built-in.",
      communityTitle: "Community",
      communityDesc: "Threaded, meaningful discussions attached directly to the content, not lost in social timelines.",
      distTitle: "Distribution",
      distDesc: "Native reach features designed to get your essays in front of readers looking for depth.",
    },
    cta: {
      headingPrefix: "Start Your ",
      headingItalic: "Journey",
      headingSuffix: "",
      subtitle: "Join thousands of readers and writers focusing on clarity and substance over algorithmic noise.",
      primaryBtn: "Subscribe Now",
      secondaryBtn: "Start Writing",
    },
    footer: {
      rights: "© 2026 Mindloop. All rights reserved.",
      builtBy: "Designed & Built by",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
    },
    loading: {
      init: "Initializing systems",
      typo: "Optimizing typography & layout",
      network: "Connecting to asset delivery network",
      handshake: "Establishing handshakes",
      bufferedHero: "Buffered: Hero stream",
      bufferedMission: "Buffered: Mission stream",
      bufferedCases: "Buffered: Interactive cases",
      ready: "Ready to loop",
      preload: "PRELOADING STREAMS",
      loadingVideo: "LOADING VIDEO",
    },
  },
  fa: {
    nav: {
      home: "خانه",
      howItWorks: "نحوه کارکرد",
      philosophy: "فلسفه ما",
      cases: "کاربردها",
    },
    hero: {
      subscribers: "بیش از ۷,۰۰۰ نفر مشترک شده‌اند",
      headingPrefix: "با ما، ",
      headingItalic: "ژرفای اندیشه",
      headingSuffix: " را بیابید",
      subtitle: "به جریان ما بپیوندید؛ برای دریافت به‌روزرسانی‌های معنادار، اخبار حوزه فناوری و سفری مشترک به سوی عمق و هدایت ذهنی.",
      placeholder: "نشانی ایمیل شما...",
      subscribe: "عضویت",
      subscribed: "عضو شدید!",
      successMessage: "عضویت شما در مایندلوپ با موفقیت انجام شد.",
      errorMessage: "لطفاً یک نشانی ایمیل معتبر وارد کنید.",
    },
    search: {
      titlePrefix: "جستجو ",
      titleItalic: "دگرگون شده است.",
      titleSuffix: " شما چطور؟",
      subtitle: "ما در حال گذار از «پیوندها» به «پاسخ‌ها» هستیم. پلتفرم‌های ارائه‌دهنده با شتابی بی‌سابقه تکامل می‌یابند؛ درک این تغییر، برگ برنده جدید شماست.",
      chatgptTitle: "ChatGPT",
      chatgptDesc: "تفکر گفتگومحور و هوش مولد که مرزهای دستیار شخصی و ایده‌پردازی خلاقانه را جابجا می‌کند.",
      perplexityTitle: "Perplexity",
      perplexityDesc: "موتور جستجوی پاسخ‌محور؛ تلفیقی از کاوش عمیق و چکیده‌های هوشمند به جای اسکرول بی‌انتهای لینک‌ها.",
      googleTitle: "Google AI",
      googleDesc: "کاتالوگ اطلاعات جهان، مولد می‌شود. مرورهای جامع و ساختارمند که روش جذب دانش را بازتعریف می‌کنند.",
      footerText: "اگر شما به پرسش‌ها پاسخ ندهید، دیگران خواهند داد.",
    },
    mission: {
      p1: "ما در حال ساخت فضایی هستیم که در آن کنجکاوی با شفافیت پیوند می‌خورد — جایی که خوانندگان ژرفا را می‌یابند، نویسندگان مخاطب خود را، و هر خبرنامه به گفتگویی ارزشمند بدل می‌شود.",
      p2: "بستری که در آن محتوا، جامعه و بینش در کنار هم جریان می‌یابند — با هیاهوی کمتر، اصطکاک ناچیز و معنای بیشتر برای هر آن‌کس که همراه ماست.",
      highlights: ["کنجکاوی", "شفافیت", "پیوند"],
      loadingVideo: "در حال بارگذاری ویدیو...",
    },
    solution: {
      tag: "راهکار ما",
      titlePrefix: "بستری اختصاصی برای محتوای ",
      titleItalic: "معنادار",
      titleSuffix: "",
      loadingVideo: "در حال بارگذاری ویدیو...",
      curatedTitle: "خوراک گلچین‌شده",
      curatedDesc: "انتخاب هوشمندانه و عاری از الگوریتم‌های مزاحم، برای تضمین بالاترین نسبت سیگنال به نویز در خواندنی‌های روزانه شما.",
      writerTitle: "ابزارهای نویسندگی",
      writerDesc: "ویرایشگری بدون حواس‌پرتی با قابلیت‌های انتشار یکپارچه، بهینه‌سازی موتورهای جستجو و تحلیل رفتار مخاطبان.",
      communityTitle: "اجتماع گفتگو محور",
      communityDesc: "بحث‌های نخی و هدفمند متصل به خود محتوا، به دور از شلوغی و گم‌شدن در تایم‌لاین شبکه‌های اجتماعی.",
      distTitle: "توزیع هوشمند",
      distDesc: "سیستم‌های توزیع و دسترسی بومی برای نمایش مستقیم مقالات شما به مخاطبانی که تشنه درک عمیق هستند.",
    },
    cta: {
      headingPrefix: "آغاز ",
      headingItalic: "سفرتان",
      headingSuffix: " با ما",
      subtitle: "به هزاران نویسنده و خواننده‌ای بپیوندید که بر شفافیت و اصالت محتوا، فراتر از هیاهوی الگوریتم‌ها، تمرکز دارند.",
      primaryBtn: "عضویت در خبرنامه",
      secondaryBtn: "شروع به نوشتن",
    },
    footer: {
      rights: "© ۲۰۲۶ مایندلوپ. تمامی حقوق محفوظ است.",
      builtBy: "طراحی و توسعه توسط",
      privacy: "حریم خصوصی",
      terms: "شرایط استفاده",
      contact: "تماس با ما",
    },
    loading: {
      init: "در حال راه‌اندازی سامانه‌ها",
      typo: "بهینه‌سازی قلم‌ها و چیدمان",
      network: "اتصال به شبکه توزیع محتوا",
      handshake: "برقراری ارتباطات اولیه",
      bufferedHero: "بافر شد: ویدیوی اصلی",
      bufferedMission: "بافر شد: داستان ما",
      bufferedCases: "بافر شد: موارد تعاملی",
      ready: "آماده برای اجرا",
      preload: "بارگیری اولیه ویدیوها",
      loadingVideo: "در حال بارگذاری ویدیو...",
    },
  },
};
