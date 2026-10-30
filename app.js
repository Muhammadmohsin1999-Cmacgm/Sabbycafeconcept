/* ==========================================================================
   SABBY’S | سابيز — EDITION II (HIGH-THINKING ENGINE)
   - Dual-Atmosphere Switcher (Midnight Espresso Lounge ⇄ Morning Warm Ivory)
   - Live Hero Cinema Reel Switcher (All 3 Authentic SABBY'S Videos)
   - Interactive Single-Origin Coffee & Adeni Tea Tasting Explorer
   - Interactive Digital Menu + WhatsApp Pre-Order / Tasting Tray (0557609880)
   - 18 Verbatim Google Maps Reviews with Sentiment Category Filter
   - Accessible Lightbox, Bilingual EN/AR RTL & GSAP ScrollTrigger
   Concept by Muhammadmohsin.webstudio
   ========================================================================== */

const SABBYS_MENU_ITEMS = [
  {
    id: "pecan-cinnamon-roll",
    category: "cinnamon-rolls",
    category_label_en: "Signature Cinnamon Rolls",
    category_label_ar: "سينامون رولز المميزة",
    name_en: "Signature Pecan Cinnamon Roll",
    name_ar: "سينامون رول بالبيكان والكراميل",
    desc_en: "Freshly baked daily with cotton-light, fluffy dough, layered with cream cheese frosting, rich caramel drizzle, and roasted pecan pieces.",
    desc_ar: "تُخبز طازجة يومياً بعجينة قطنية خفيفة وهشة، مغطاة بكريمة الجبن الغنية وصوص الكراميل وقطع البيكان المحمص.",
    price_en: "SAR 20–40 Café Range · Owner Confirmation",
    price_ar: "فئة ٢٠–٤٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/single-pecan-cinnamon-roll.jpg"
  },
  {
    id: "classic-cinnamon-roll",
    category: "cinnamon-rolls",
    category_label_en: "Signature Cinnamon Rolls",
    category_label_ar: "سينامون رولز المميزة",
    name_en: "Classic Cinnamon Roll",
    name_ar: "سينامون رول كلاسيك",
    desc_en: "Soft, warm, freshly baked classic cinnamon roll finished with smooth signature cream frosting.",
    desc_ar: "سينامون رول كلاسيكي دافئ وهش يُخبز يومياً ويُقدم مع تغليفة الكريمة الغنية.",
    price_en: "SAR 20–40 Café Range · Owner Confirmation",
    price_ar: "فئة ٢٠–٤٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/cinnamon-rolls-cream-cheese.jpg"
  },
  {
    id: "v60-pour-over",
    category: "specialty-coffee",
    category_label_en: "Specialty Coffee",
    category_label_ar: "القهوة المختصة",
    name_en: "Specialty V60 Pour-Over (Hot / Iced)",
    name_ar: "قهوة مختصة مقطرة V60 (حار / بارد)",
    desc_en: "Precision hand-poured V60 brewed to order using curated Ethiopian, Brazilian, or fruity Indonesian single-origin beans over crystal-clear ice or served hot.",
    desc_ar: "قهوة مقطرة تُحضّر بعناية فائقة باستخدام محاصيل مختارة من إثيوبيا أو البرازيل أو إندونيسيا، تُقدم حارة أو باردة.",
    price_en: "SAR 20–40 Café Range · Owner Confirmation",
    price_ar: "فئة ٢٠–٤٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/iced-v60-pour.jpg"
  },
  {
    id: "coffee-of-the-day",
    category: "specialty-coffee",
    category_label_en: "Specialty Coffee",
    category_label_ar: "القهوة المختصة",
    name_en: "Coffee of the Day (Brazilian Roast)",
    name_ar: "قهوة اليوم (محصول برازيلي)",
    desc_en: "Smooth, balanced daily batch brew featuring low-acidity Brazilian specialty coffee beans.",
    desc_ar: "قهوة اليوم المتوازنة والناعمة المحضرة من البن البرازيلي المختص.",
    price_en: "SAR 1–20 Visit Bracket · Owner Confirmation",
    price_ar: "فئة ١–٢٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/coffee-grinders-v60.jpg"
  },
  {
    id: "adeni-eidrousi-tea",
    category: "teas-karak",
    category_label_en: "Signature Teas & Karak",
    category_label_ar: "الشاي والكرك المميز",
    name_en: "Adeni Eidrousi Tea & Yemeni Karak",
    name_ar: "شاي عدني العيدروسي وكرك يمني",
    desc_en: "Masterfully brewed authentic Adeni Eidrousi tea and rich, velvety Yemeni Karak — aromatic, deeply comforting, and perfectly balanced.",
    desc_ar: "شاي عدني العيدروسي الأصيل وكرك يمني غني ومتوازن بعناية فائقة ومذاق لا يُنسى.",
    price_en: "SAR 1–20 Visit Bracket · Owner Confirmation",
    price_ar: "فئة ١–٢٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/branded-cup-rinse.jpg"
  },
  {
    id: "sabbys-special-tea",
    category: "teas-karak",
    category_label_en: "Signature Teas & Karak",
    category_label_ar: "الشاي والكرك المميز",
    name_en: "SABBY’S Special Tea & Refreshing Hibiscus",
    name_ar: "شاي سابيز الخاص ومشروب الكركديه المنعش",
    desc_en: "House signature tea blend alongside our tart, refreshing iced Hibiscus infusion crafted with balanced sweetness.",
    desc_ar: "خلطة شاي سابيز الخاصة، بالإضافة إلى مشروب الكركديه البارد والمنعش بحلاوة متوازنة.",
    price_en: "SAR 1–20 Visit Bracket · Owner Confirmation",
    price_ar: "فئة ١–٢٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/sadu-cup-iced-v60-closeup.jpg"
  },
  {
    id: "cookies-and-brownies",
    category: "pastries-sweets",
    category_label_en: "Croissants, Cookies & Sweets",
    category_label_ar: "الكرواسون والكوكيز والحلويات",
    name_en: "Artisanal Chocolate Chunk Cookies & Fudge Brownies",
    name_ar: "كوكيز قطع الشوكولاتة وبراونيز غنية",
    desc_en: "Warm, gooey dark chocolate chunk cookies finished with flaky sea salt and rich, fudgy chocolate brownies baked fresh in-house.",
    desc_ar: "كوكيز طازجة وغنية بقطع الشوكولاتة الفاخرة ورشة ملح بحري، مع قطع البراونيز الغنية.",
    price_en: "SAR 1–20 Visit Bracket · Owner Confirmation",
    price_ar: "فئة ١–٢٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/cookies-and-brownies.jpg"
  },
  {
    id: "pecan-chocolate-croissant",
    category: "pastries-sweets",
    category_label_en: "Croissants, Cookies & Sweets",
    category_label_ar: "الكرواسون والكوكيز والحلويات",
    name_en: "Pecan Croissant & Chocolate Croissant",
    name_ar: "كرواسون البيكان وكرواسون الشوكولاتة",
    desc_en: "Crisp, flaky laminated pastry layers with a soft, buttery interior — available in roasted pecan or rich chocolate.",
    desc_ar: "طبقات كرواسون مقرمشة وهشة من الخارج وطرية وغنية بالزبدة من الداخل بالبيكان أو الشوكولاتة.",
    price_en: "SAR 20–40 Café Range · Owner Confirmation",
    price_ar: "فئة ٢٠–٤٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/pos-welcome-board.jpg"
  },
  {
    id: "daily-manaeesh-boat",
    category: "savory-bakery",
    category_label_en: "Savory Bakery & Mana’eesh",
    category_label_ar: "المناقيش والمخبوزات المالحة",
    name_en: "Daily-Prepared Mana’eesh & SABBY’S Special (Cheese & Thyme)",
    name_ar: "مناقيش يومية طازجة وسابيز سبيشال (جبن وزعتر)",
    desc_en: "Hand-shaped boat mana’eesh with sesame-crusted golden dough — offered with savory hot dog & melted cheese or the signature SABBY’S Cheese & Thyme blend.",
    desc_ar: "فطائر ومناقيش قوارب بعجينة ذهبية مرشوشة بالسمسم، متوفرة بالجبن والنقانق أو خلطة سابيز الخاصة بالجبن والزعتر.",
    price_en: "SAR 20–40 Café Range · Owner Confirmation",
    price_ar: "فئة ٢٠–٤٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/manaeesh-hotdog-boat.jpg"
  },
  {
    id: "grilled-chicken-brioche",
    category: "savory-bakery",
    category_label_en: "Savory Bakery & Mana’eesh",
    category_label_ar: "المناقيش والمخبوزات المالحة",
    name_en: "Artisanal Chicken & Melted Cheese Sandwich",
    name_ar: "ساندويتش الدجاج المشوي والجبن بالخبز المخبوز",
    desc_en: "Toasted sesame-seeded artisanal bread layered with tender grilled chicken breast, melted cheese, roasted red peppers, and fresh greens.",
    desc_ar: "خبز طازج محمص بالسمسم محشو بقطع الدجاج المشوي والجبن الذائب والفلفل الأحمر المشوي والورقيات.",
    price_en: "SAR 20–40 Café Range · Owner Confirmation",
    price_ar: "فئة ٢٠–٤٠ ر.س · بانتظار تأكيد السعر",
    image: "assets/images/savory-chicken-sandwich.jpg"
  },
  {
    id: "spinach-savory-pastry",
    category: "savory-bakery",
    category_label_en: "Savory Bakery & Mana’eesh",
    category_label_ar: "المناقيش والمخبوزات المالحة",
    name_en: "Fresh Baked Spinach Pastry",
    name_ar: "فطيرة السبانخ الطازجة",
    desc_en: "Light, freshly baked savory spinach pastry praised by guests for dine-in and takeaway box orders.",
    desc_ar: "فطيرة سبانخ طازجة بعجينة خفيفة ومميزة للجلوس أو الطلبات الخارجية.",
    price_en: "SAR 1–20 / 20–40 Range · Owner Confirmation",
    price_ar: "بانتظار تأكيد السعر من المالك",
    image: "assets/images/bakery-counter-display.jpg"
  }
];

const SABBYS_ORIGINS = {
  ethiopian: {
    badge_en: "Single-Origin Pour-Over · V60",
    badge_ar: "محصول مختص للتقطير · V60",
    title_en: "Ethiopian Single-Origin Roast",
    title_ar: "المحصول الإثيوبي المختص",
    desc_en: "Celebrated by SABBY’S guests for its floral aroma, silky body, and well-balanced profile with zero harsh bitterness — exceptional both hot and poured over crystal-clear ice.",
    desc_ar: "يتميز المحصول الإثيوبي في سابيز بإيحاءاته العطرية المتوازنة وقوامه الناعم بدون مرارة، مثالي للتقطير V60 حاراً أو بارداً.",
    method_en: "Hand-Poured V60 (Hot / Iced)",
    method_ar: "تقطير يدوي V60 (حار / بارد)",
    notes_en: "Floral · Balanced · Clean Finish",
    notes_ar: "زهري · متوازن · قوام صافي",
    pairing_en: "Signature Pecan Cinnamon Roll",
    pairing_ar: "سينامون رول بالبيكان",
    image: "assets/images/iced-v60-pour.jpg"
  },
  brazilian: {
    badge_en: "V60 & Coffee of the Day",
    badge_ar: "قهوة اليوم والتقطير V60",
    title_en: "Brazilian Specialty Roast",
    title_ar: "المحصول البرازيلي المختص",
    desc_en: "Smooth, comforting, and low-acidity Brazilian beans — featured as SABBY’S signature Coffee of the Day and iced V60 pour-over.",
    desc_ar: "محصول برازيلي ناعم ومتوازن بحمضية منخفضة، يُقدم في سابيز كقهوة اليوم وقهوة مقطرة V60.",
    method_en: "Coffee of the Day & Iced V60",
    method_ar: "قهوة اليوم وV60 بارد",
    notes_en: "Smooth Cocoa · Nutty · Zero Acidity",
    notes_ar: "شوكولاتة ناعمة · مكسرات · بدون حمضية",
    pairing_en: "Sea-Salt Chocolate Chunk Cookie",
    pairing_ar: "كوكيز الشوكولاتة والملح البحري",
    image: "assets/images/v60-bloom-pour.jpg"
  },
  indonesian: {
    badge_en: "Artisanal Single-Origin Hopper",
    badge_ar: "محصول إندونيسي فاكهي",
    title_en: "Indonesian Fruity Single-Origin",
    title_ar: "المحصول الإندونيسي المختص",
    desc_en: "Highlighted in verified guest reviews for its distinctive fruity complexity and rich aromatic depth on the SABBY’S V60 brew bar.",
    desc_ar: "أشاد به ضيوف سابيز لنكهته الفاكهية المميزة وقوامه الغني عند تحضيره عبر أداة V60.",
    method_en: "Precision V60 Extraction",
    method_ar: "تقطير V60 موزون بالثانية",
    notes_en: "Fruity · Aromatic · Full Body",
    notes_ar: "فاكهي · عطري · قوام غني",
    pairing_en: "Flaky Pecan Croissant",
    pairing_ar: "كرواسون البيكان الهش",
    image: "assets/images/coffee-grinders-v60.jpg"
  },
  adeni: {
    badge_en: "Regional Heritage Tea Craft",
    badge_ar: "الأصالة في تحضير الشاي",
    title_en: "Adeni Eidrousi Tea & Yemeni Karak",
    title_ar: "شاي عدني العيدروسي والكرك اليمني",
    desc_en: "Masterfully prepared authentic Adeni Eidrousi tea and rich, velvety Yemeni Karak — brewed for comfort without feeling overly heavy.",
    desc_ar: "تحضير متقن للشاي العدني العيدروسي والكرك اليمني الغني والمهيل بقوام متوازن غير ثقيل.",
    method_en: "Traditional Slow Simmer",
    method_ar: "تخدير تقليدي متقن",
    notes_en: "Warm Spices · Velvety · Balanced",
    notes_ar: "نكهة أصيلة · قوام متوازن · غني",
    pairing_en: "Daily Boat Mana’eesh or Classic Cinnamon Roll",
    pairing_ar: "المناقيش اليومية أو السينامون الكلاسيكي",
    image: "assets/images/branded-cup-rinse.jpg"
  }
};

const SABBYS_REVIEWS = [
  {
    "reviewer": "Nadus",
    "meta": "Local Guide · 22 reviews · Dine in · SAR 1–20",
    "tag": "tea-karak",
    "tag_label_en": "Yemeni Karak & Croissant",
    "tag_label_ar": "الكرك اليمني والكرواسون",
    "quote": "My friend and I had a lovely experience at Sabby’s. The owner was very delightful and walked us through the menu items. After some discussion we were convinced to try the Yemeni Karak and the Pecan Croissant, and to put it simply, wow.",
    "owner_reply": "Thank you so much, Nadus, for taking the time to share such a thoughtful review! We’re especially happy that our Yemeni Karak and Pecan Croissant made such a memorable impression. 🤎"
  },
  {
    "reviewer": "yousuf farid",
    "meta": "Local Guide · 15 reviews · Dine in · SAR 1–20",
    "tag": "bakery",
    "tag_label_en": "Cinnamon Rolls (30+ Countries)",
    "tag_label_ar": "سينامون رولز المميزة",
    "quote": "The tea is amazing, the coffee is amazing and the cinnamon rolls are the best I’ve had in over 30 countries, 10/10. The atmosphere of the place is beautiful.",
    "owner_reply": "Thank you so much, Yousuf, for such an incredible review! Knowing that our cinnamon rolls are the best you’ve had across more than 30 countries is truly an honor. 🤎"
  },
  {
    "reviewer": "Fahad Alqahtani",
    "meta": "4 reviews · Dine in · SAR 20–40",
    "tag": "coffee",
    "tag_label_en": "Specialty Coffee & Ice Detail",
    "tag_label_ar": "القهوة المختصة والعناية بالتفاصيل",
    "quote": "SABBY’S honestly exceeded my expectations. The coffee was smooth and flavorful from the first sip to the last, and even the ice was better than what you get at most coffee shops, it kept the drink cold without ruining the taste.",
    "owner_reply": "Fahad, you even noticed the ice! 😄🤍 That honestly made us smile. We put a lot of care into the little details, so your words really mean a lot to us. 🤎"
  },
  {
    "reviewer": "Yousef Alghamdi",
    "meta": "Local Guide · 32 reviews · Dine in · SAR 20–40",
    "tag": "coffee",
    "tag_label_en": "V60 & Desserts",
    "tag_label_ar": "القهوة المقطرة V60 والحلويات",
    "quote": "The best coffee shop in Khobar I’ve seen. Exceptional V60’s and deserts you can only dream of. Highly recommend!",
    "owner_reply": "Yousef, this really made us smile 🤍 So happy you enjoyed the V60 and desserts. Thank you for the kind words and support — it truly means a lot to us 🤎"
  },
  {
    "reviewer": "Zaid Dajani",
    "meta": "6 reviews · Verified Guest",
    "tag": "hospitality",
    "tag_label_en": "Slow Moments & Atmosphere",
    "tag_label_ar": "الأجواء الهادئة والضيافة",
    "quote": "Sabby’s is one of those cafés that just gets everything right. From the cozy atmosphere and beautiful details to the tea, food, and warm service, every visit feels special. It’s the perfect place to slow down, enjoy the moment, and spend quality time with good company.",
    "owner_reply": "Thank you so much Zaid! We’re happy you enjoyed your time with us and look forward to seeing you again at Sabby's. 🤎"
  },
  {
    "reviewer": "Hada",
    "meta": "Local Guide · 17 reviews · SAR 1–20",
    "tag": "bakery",
    "tag_label_en": "Fresh Gooey Cookies",
    "tag_label_ar": "الكوكيز الطازجة",
    "quote": "I visited Sabbys today for the first time. I was craving a good chocolate chip cookie and did they deliver! It was fresh gooey and absolutely yum. The staff was absolutely wonderful.",
    "owner_reply": "Thank you so much, Hada! We're glad you enjoyed your visit. We are happy to let you know we plan to open in the morning within a week time and look forward to seeing you again at Sabby's. 🤎"
  },
  {
    "reviewer": "Arch.Yasser Sh",
    "meta": "Local Guide · 101 reviews · SAR 1–20 (Translated from Arabic)",
    "tag": "tea-karak",
    "tag_label_en": "Adeni Eidrousi Tea",
    "tag_label_ar": "شاي عدني العيدروسي",
    "quote": "Here you'll find top-quality Adeni Eidrousi tea. Its preparation is masterful, its flavor perfectly balanced.",
    "owner_reply": "Thank you, Yasser, for your kind words. You brightened up Sabiz. We always enjoy your visit and look forward to seeing you again. 🤎"
  },
  {
    "reviewer": "Rania Adwan",
    "meta": "10 reviews · Verified Guest",
    "tag": "bakery",
    "tag_label_en": "Best Cinnamon Roll in Khobar",
    "tag_label_ar": "أفضل سينامون في الخبر",
    "quote": "best cinnamon roll in khobar!!! staff are extremely kind and the environment is welcoming would definitely recommend going there 10/10",
    "owner_reply": "Thank you Rania! We're so glad you enjoyed your visit and look forward to seeing you again at Sabby's. 🤎"
  },
  {
    "reviewer": "N. McD.",
    "meta": "7 reviews · Verified Guest",
    "tag": "bakery",
    "tag_label_en": "Hibiscus, Spinach Pastry & Pecan Roll",
    "tag_label_ar": "الكركديه والفطائر وسينامون البيكان",
    "quote": "Went there today for coffee with some ladies, and it was very lovely. Must try the hibiscus drink. Very tart and yummy and not too sweet. The spinach pastry was delicious and I even took some home. And the pecan cinnamon roll is amazing.",
    "owner_reply": "Thank you so much! We’re glad you enjoyed your visit and look forward to seeing you again at Sabby's. 🤎"
  },
  {
    "reviewer": "Ali Almagasla",
    "meta": "3 reviews · Verified Guest (Translated from Arabic)",
    "tag": "coffee",
    "tag_label_en": "Ethiopian & Indonesian Coffee",
    "tag_label_ar": "المحصول الإثيوبي والإندونيسي",
    "quote": "The place is very beautiful. It's quiet and the atmosphere is lovely. I tried the pecan cinnamon roll; it was fresh and light. As for the coffee, the Ethiopian variety is very good and well-balanced, while the Indonesian variety is fruity.",
    "owner_reply": "Thank you, Ali, for your kind words! You brightened up Sabiz, and we always look forward to your next visit. 🤎"
  },
  {
    "reviewer": "Faisal Darwish",
    "meta": "10 reviews · 3 photos",
    "tag": "tea-karak",
    "tag_label_en": "Cozy Work Spot · Karak & Cookie",
    "tag_label_ar": "مكان مريح للعمل · كرك وكوكيز",
    "quote": "I really enjoyed my experience in Sabby’s, very cozy vibe, great for finishing up some work. I had some karak tea and a cookie for dessert, 10/10. Will definitely be visiting often!",
    "owner_reply": "Thank you Faisal! We're happy you enjoyed your visit and look forward to seeing you again at Sabby's. 🤎"
  },
  {
    "reviewer": "Dalal Abdullah",
    "meta": "Local Guide · 19 reviews (Translated from Arabic)",
    "tag": "bakery",
    "tag_label_en": "Eastern Province Cinnamon Rolls",
    "tag_label_ar": "سينامون المنطقة الشرقية",
    "quote": "The shop owner said, 'You'll taste the most delicious Cinnabon in the entire Eastern Province!' And he was absolutely right! 😍🙏🏻 It's so delicious, and the coffee is amazing too. The flavors are perfect, with no bitterness or acidity.",
    "owner_reply": "Thank you, Dalal! We were delighted by your first visit and look forward to serving you again at Sabiz. 🤎"
  },
  {
    "reviewer": "Omer Akram",
    "meta": "5 reviews · SAR 20–40",
    "tag": "coffee",
    "tag_label_en": "11/10 Cinnamon Rolls & V60",
    "tag_label_ar": "سينامون ١١/١٠ وقهوة V60",
    "quote": "11/10 cinnamon rolls. And our v60s were great too.",
    "owner_reply": "Thank you for the kind words, Omer! We’re happy you enjoyed your visit and look forward to seeing you again at Sabby's. 🤎"
  },
  {
    "reviewer": "Martin Mathew",
    "meta": "5 reviews · Verified Guest",
    "tag": "bakery",
    "tag_label_en": "Snacks, Cookies & Croissants",
    "tag_label_ar": "المخبوزات والكوكيز والكرواسون",
    "quote": "I have tried some of the snacks, cookies, croissants, and cinnamon rolls. They were all well presented and very tasty.",
    "owner_reply": "Martin, you tried almost everything! 😊🤍 So happy you enjoyed the snacks, cookies, croissants, and cinnamon rolls. Come back anytime 🤎"
  },
  {
    "reviewer": "Rosy Murillo",
    "meta": "Local Guide · 20 reviews · SAR 40–60",
    "tag": "coffee",
    "tag_label_en": "Brazilian Coffee of the Day & Hibiscus",
    "tag_label_ar": "قهوة اليوم البرازيلية والكركديه",
    "quote": "Loved pastries all kind coffee of the day brazilian super delicioso. And hibiscus also refreshing.",
    "owner_reply": "Thank you Rosy! We’re happy you enjoyed your visit and look forward to seeing you again at Sabby's. 🤎"
  },
  {
    "reviewer": "Walid A",
    "meta": "Local Guide · 19 reviews (Translated from Arabic)",
    "tag": "tea-karak",
    "tag_label_en": "Adeni Tea, Karak & Fast Service",
    "tag_label_ar": "الشاي العدني والكرك والخدمة السريعة",
    "quote": "Honestly, it's one of the best cafes I've tried. Their Adeni tea and Karak are perfect, the specialty coffee is excellent, the pastries are fresh, and the cookies are delicious 👌🏼. The place is tidy, the service is fast, and their staff are very professional.",
    "owner_reply": "Waleed, your words truly made us happy 🤍 Thank you for your kindness and trust, and we look forward to seeing you again at Sabiz 🤎"
  },
  {
    "reviewer": "سُمو",
    "meta": "Local Guide · 54 reviews (Translated from Arabic)",
    "tag": "bakery",
    "tag_label_en": "Adeni Tea & Sabby's Special Cheese/Thyme",
    "tag_label_ar": "شاي عدني وسابيز سبيشال جبن وزعتر",
    "quote": "Based on my experience, this place is definitely worth a visit. The Adeni Al-Aidarousi tea is delicious and perfectly balanced, and it's something I'll definitely order again. The Sabby Special with cheese and thyme has a unique blend.",
    "owner_reply": "Thank you for this wonderful and detailed review! We are so pleased that you enjoyed our Adeni Al-Aidaroosi tea, Sabi Special, cinnamon rolls, and cookies. 🤎"
  },
  {
    "reviewer": "محمد محسن",
    "meta": "12 reviews · 6 photos (Translated from Arabic)",
    "tag": "hospitality",
    "tag_label_en": "Warm Welcome by Abu Sultan & Hassan",
    "tag_label_ar": "ترحيب حار من أبو سلطان وحسن",
    "quote": "Thank you to the owner, Abu Sultan, and Hassan for the warm welcome, delicious food, and excellent service. ♥️♥️♥️",
    "owner_reply": "Thank you, Mohammed, for your kind review! You brightened up Sabiz, and we're always happy to have you visit. 🤎"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = localStorage.getItem("sabbys_lang") || "en";
  let currentTheme = localStorage.getItem("sabbys_theme_v2") || "midnight";
  let currentCategory = "all";
  let currentReviewTag = "all";
  let searchQuery = "";
  let tastingTray = JSON.parse(localStorage.getItem("sabbys_tray_v2") || "[]");

  // 1. Apply Dual-Atmosphere Theme (Midnight Espresso vs Morning Ivory)
  const applyTheme = (theme) => {
    currentTheme = theme;
    localStorage.setItem("sabbys_theme_v2", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
      const isAr = currentLang === "ar";
      if (theme === "midnight") {
        btn.innerHTML = isAr ? "☀ وضع الصباح" : "☀ Morning Ivory";
      } else {
        btn.innerHTML = isAr ? "☾ وضع المساء" : "☾ Midnight Espresso";
      }
    });
  };

  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTheme(currentTheme === "midnight" ? "ivory" : "midnight");
    });
  });

  // 2. Sticky Header Scroll Transition
  const header = document.querySelector(".site-header");
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 48) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // 3. Hero Scale Reveal & Live Cinema Reel Switcher
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    setTimeout(() => heroSection.classList.add("is-loaded"), 120);
  }

  const heroVideo = document.getElementById("hero-bg-video");
  const reelButtons = document.querySelectorAll(".reel-btn");
  reelButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const videoSrc = btn.getAttribute("data-video");
      const posterSrc = btn.getAttribute("data-poster");
      if (heroVideo && videoSrc) {
        reelButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        if (posterSrc) heroVideo.setAttribute("poster", posterSrc);
        heroVideo.src = videoSrc;
        heroVideo.load();
        heroVideo.play().catch(() => {});
      }
    });
  });

  // 4. Mobile Drawer Toggle
  const mobileBtn = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileClose = document.getElementById("mobile-menu-close");

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener("click", () => {
      mobileDrawer.classList.add("is-open");
      mobileBtn.setAttribute("aria-expanded", "true");
    });
  }
  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener("click", () => {
      mobileDrawer.classList.remove("is-open");
      if (mobileBtn) mobileBtn.setAttribute("aria-expanded", "false");
    });
  }
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileDrawer.classList.remove("is-open"));
    });
  }

  // 5. Interactive Single-Origin & Tea Explorer
  const originContainer = document.getElementById("origin-explorer-content");
  let activeOriginKey = "ethiopian";

  const renderOriginExplorer = (key) => {
    if (!originContainer) return;
    activeOriginKey = key;
    const data = SABBYS_ORIGINS[key] || SABBYS_ORIGINS.ethiopian;
    const isAr = currentLang === "ar";
    originContainer.innerHTML = `
      <div class="origin-explorer-card">
        <div>
          <div class="eyebrow">${isAr ? data.badge_ar : data.badge_en}</div>
          <h3 class="h2-display editorial-heading" style="margin-bottom:1rem;color:var(--warm-ivory);">${isAr ? data.title_ar : data.title_en}</h3>
          <p style="color:rgba(245,235,221,0.84);line-height:1.65;">${isAr ? data.desc_ar : data.desc_en}</p>
          <div class="origin-metrics-grid">
            <div class="origin-metric">
              <strong>${isAr ? "طريقة التحضير" : "Brew Method"}</strong>
              <span>${isAr ? data.method_ar : data.method_en}</span>
            </div>
            <div class="origin-metric">
              <strong>${isAr ? "الإيحاءات" : "Tasting Profile"}</strong>
              <span>${isAr ? data.notes_ar : data.notes_en}</span>
            </div>
            <div class="origin-metric">
              <strong>${isAr ? "التناغم المقترح" : "Signature Pairing"}</strong>
              <span>${isAr ? data.pairing_ar : data.pairing_en}</span>
            </div>
          </div>
        </div>
        <div class="editorial-image-frame" style="max-height:380px;">
          <img src="${data.image}" alt="${isAr ? data.title_ar : data.title_en}">
        </div>
      </div>
    `;
  };

  document.querySelectorAll(".origin-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".origin-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderOriginExplorer(btn.getAttribute("data-origin") || "ethiopian");
    });
  });

  // 6. Tasting Tray / WhatsApp Pre-Order Logic (0557609880)
  const saveTray = () => {
    localStorage.setItem("sabbys_tray_v2", JSON.stringify(tastingTray));
    updateTrayUI();
  };

  const addToTray = (itemId) => {
    const item = SABBYS_MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;
    const existing = tastingTray.find(t => t.id === itemId);
    if (existing) {
      existing.qty += 1;
    } else {
      tastingTray.push({ id: item.id, name_en: item.name_en, name_ar: item.name_ar, qty: 1 });
    }
    saveTray();
    const trayBackdrop = document.getElementById("tasting-tray-backdrop");
    if (trayBackdrop) trayBackdrop.classList.add("is-open");
  };

  const updateTrayUI = () => {
    const isAr = currentLang === "ar";
    const totalCount = tastingTray.reduce((acc, item) => acc + item.qty, 0);
    document.querySelectorAll(".tray-count-badge").forEach(b => {
      b.textContent = totalCount;
    });

    const listEl = document.getElementById("tray-items-list");
    if (!listEl) return;

    if (tastingTray.length === 0) {
      listEl.innerHTML = `<li style="padding:1.5rem 0;color:rgba(245,235,221,0.65);font-size:0.9rem;">${isAr ? "لم تقم بإضافة أي أصناف بعد. اختر أصنافك المفضلة من القائمة لإرسال استفسار أو طلب مسبق عبر واتساب سابيز الرسمي." : "Your tasting tray is empty. Select any verified item from the menu to prepare a direct WhatsApp pre-order or table inquiry."}</li>`;
      return;
    }

    listEl.innerHTML = tastingTray.map(item => `
      <li class="tray-item-row">
        <div>
          <strong style="display:block;font-size:0.95rem;">${isAr ? item.name_ar : item.name_en}</strong>
          <span style="font-size:0.78rem;color:var(--champagne-gold);">${isAr ? item.name_en : item.name_ar}</span>
        </div>
        <div class="tray-qty-controls">
          <button type="button" class="tray-qty-btn" data-action="dec" data-id="${item.id}">−</button>
          <span style="min-width:20px;text-align:center;font-weight:600;">${item.qty}</span>
          <button type="button" class="tray-qty-btn" data-action="inc" data-id="${item.id}">+</button>
        </div>
      </li>
    `).join("");

    listEl.querySelectorAll(".tray-qty-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const act = btn.getAttribute("data-action");
        const target = tastingTray.find(t => t.id === id);
        if (!target) return;
        if (act === "inc") target.qty += 1;
        if (act === "dec") {
          target.qty -= 1;
          if (target.qty <= 0) {
            tastingTray = tastingTray.filter(t => t.id !== id);
          }
        }
        saveTray();
      });
    });
  };

  // Open / Close Tray Drawer
  const trayBackdrop = document.getElementById("tasting-tray-backdrop");
  document.querySelectorAll(".tray-trigger-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (trayBackdrop) trayBackdrop.classList.add("is-open");
    });
  });
  const trayCloseBtn = document.getElementById("tray-close-btn");
  if (trayCloseBtn && trayBackdrop) {
    trayCloseBtn.addEventListener("click", () => trayBackdrop.classList.remove("is-open"));
    trayBackdrop.addEventListener("click", (e) => {
      if (e.target === trayBackdrop) trayBackdrop.classList.remove("is-open");
    });
  }

  const whatsappCheckoutBtn = document.getElementById("tray-whatsapp-send");
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener("click", () => {
      const serviceType = (document.getElementById("tray-service-type")?.value) || "Dine-in at 22nd St, Al Khobar";
      const beanPref = (document.getElementById("tray-bean-pref")?.value) || "Ethiopian Single Origin";
      const guestNotes = (document.getElementById("tray-guest-notes")?.value || "").trim();

      const itemsLines = tastingTray.length
        ? tastingTray.map(i => `• ${i.qty}x ${i.name_en} (${i.name_ar})`).join("\n")
        : "• General Menu & Availability Inquiry";

      const message = `Hello SABBY’S (سابيز) Al Khobar 🤎\n\nI would like to place a pre-order / inquiry:\n\n*Selected Items:*\n${itemsLines}\n\n*Service Preference:* ${serviceType}\n*Coffee / Tea Preference:* ${beanPref}${guestNotes ? `\n*Notes:* ${guestNotes}` : ""}\n\nPlease confirm current availability & total SAR price.`;
      const waUrl = `https://wa.me/966557609880?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank", "noopener");
    });
  }

  // 7. Render Interactive Menu
  const menuGrid = document.getElementById("interactive-menu-grid");
  const renderMenu = () => {
    if (!menuGrid) return;
    const isAr = currentLang === "ar";
    const filtered = SABBYS_MENU_ITEMS.filter(item => {
      const matchCat = currentCategory === "all" || item.category === currentCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchQ = !q ||
        item.name_en.toLowerCase().includes(q) ||
        item.name_ar.includes(q) ||
        item.desc_en.toLowerCase().includes(q) ||
        item.desc_ar.includes(q);
      return matchCat && matchQ;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = `<p style="grid-column: 1/-1; padding: 2rem 0; color: var(--text-muted);">${isAr ? "لا توجد أصناف مطابقة للبحث." : "No verified menu items match your filter."}</p>`;
      return;
    }

    menuGrid.innerHTML = filtered.map(item => `
      <article class="menu-card" data-category="${item.category}">
        <div class="menu-card-thumb">
          <img src="${item.image}" alt="${isAr ? item.name_ar : item.name_en}" loading="lazy">
        </div>
        <div class="menu-card-content">
          <div class="menu-card-meta">${isAr ? item.category_label_ar : item.category_label_en}</div>
          <h3 class="menu-card-title editorial-heading">${isAr ? item.name_ar : item.name_en}</h3>
          <div class="menu-card-ar">${isAr ? item.name_en : item.name_ar}</div>
          <p class="menu-card-desc">${isAr ? item.desc_ar : item.desc_en}</p>
          <div class="menu-card-actions">
            <span class="menu-card-price">${isAr ? item.price_ar : item.price_en}</span>
            <button type="button" class="add-tray-btn" data-add-id="${item.id}">
              ${isAr ? "+ أضف لطلب واتساب" : "+ Add to Tasting Tray"}
            </button>
          </div>
        </div>
      </article>
    `).join("");

    menuGrid.querySelectorAll(".add-tray-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        addToTray(btn.getAttribute("data-add-id"));
      });
    });
  };

  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-cat") || "all";
      renderMenu();
    });
  });

  const searchInput = document.getElementById("menu-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value || "";
      renderMenu();
    });
  }

  // 8. Render 18 Verbatim Google Maps Reviews with Sentiment Filter
  const reviewsGrid = document.getElementById("verified-reviews-grid");
  const renderReviews = () => {
    if (!reviewsGrid) return;
    const isAr = currentLang === "ar";
    const filtered = SABBYS_REVIEWS.filter(r => currentReviewTag === "all" || r.tag === currentReviewTag);
    reviewsGrid.innerHTML = filtered.map(r => `
      <article class="review-card">
        <div>
          <span class="review-tag-pill">${isAr ? r.tag_label_ar : r.tag_label_en}</span>
          <div class="reviewer-name">${r.reviewer}</div>
          <div class="reviewer-meta">${r.meta}</div>
          <p class="review-quote">“${r.quote}”</p>
        </div>
        <div class="owner-reply-box">
          <strong>SABBY’S - سابيز (Owner)</strong>
          “${r.owner_reply}”
        </div>
      </article>
    `).join("");
  };

  document.querySelectorAll(".review-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".review-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentReviewTag = btn.getAttribute("data-rtag") || "all";
      renderReviews();
    });
  });

  // 9. Accessible Lightbox for Editorial Gallery
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCap = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  document.querySelectorAll(".gallery-item").forEach(item => {
    const openItem = () => {
      if (!lightbox || !lightboxImg) return;
      const imgEl = item.querySelector("img");
      const capText = item.getAttribute("data-caption") || (imgEl ? imgEl.alt : "");
      if (imgEl) {
        lightboxImg.src = imgEl.src;
        lightboxImg.alt = imgEl.alt;
      }
      if (lightboxCap) lightboxCap.textContent = capText;
      lightbox.classList.add("is-active");
      lightbox.setAttribute("aria-hidden", "false");
    };
    item.addEventListener("click", openItem);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openItem();
      }
    });
  });

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-active");
    lightbox.setAttribute("aria-hidden", "true");
  };
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      if (trayBackdrop) trayBackdrop.classList.remove("is-open");
    }
  });

  // 10. Bilingual EN / AR Language Switcher
  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem("sabbys_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en]").forEach(el => {
      const val = el.getAttribute(`data-${lang}`);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll("[data-placeholder-en]").forEach(el => {
      const val = el.getAttribute(`data-placeholder-${lang}`);
      if (val) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll(".lang-toggle").forEach(b => {
      b.textContent = lang === "ar" ? "EN" : "العربية";
      b.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    });

    applyTheme(currentTheme);
    renderOriginExplorer(activeOriginKey);
    renderMenu();
    renderReviews();
    updateTrayUI();
  };

  document.querySelectorAll(".lang-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "ar" : "en");
    });
  });

  applyLanguage(currentLang);

  // 11. GSAP & ScrollTrigger Animations
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gsap-reveal").forEach(elem => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 86%",
          toggleActions: "play none none none"
        },
        y: 28,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out"
      });
    });

    gsap.utils.toArray(".gsap-stagger-group").forEach(group => {
      const children = group.querySelectorAll(".gsap-stagger-item");
      if (children.length) {
        gsap.from(children, {
          scrollTrigger: {
            trigger: group,
            start: "top 84%"
          },
          y: 26,
          opacity: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out"
        });
      }
    });
  }
});
