export const NavLinks = [
  {
    id: 1,
    title: "New & Featured",
    toggle: "toggle1",
    toggel1: "toggel2",
    Links: [
      {
        subTitle: "New & Featured",
        subtoggel: "toggle1",
        subLinks: [
          {
            id: 1,
            hubTitle: "All Shoes",
            link: "/AllShoes",
          },
          {
            id: 1,
            hubTitle: "Best Sellers",
            link: "/BestSellers",
          },
          {
            id: 1,
            hubTitle: "Latest Shoes",
            link: "/LatestShoes",
          },
          {
            id: 1,
            hubTitle: "New Arrivals",
            link: "/NewArrivals",
          },
        ],
      },
      {
        subTitle: "Shop Icons",
        subtoggel: "toggler2",
        subLinks: [
          {
            id: 1,
            hubTitle: "Nike",
            link: "/Nike",
          },
          {
            id: 1,
            hubTitle: "Adidas",
            link: "/Adidas",
          },
          {
            id: 1,
            hubTitle: "NewBalance",
            link: "/NewBalance",
          },
          {
            id: 1,
            hubTitle: "UnderArmour",
            link: "/UnderArmour",
          },
        ],
      },
      {
        subTitle: "New for Men",
        subtoggel: "toggler3",
        subLinks: [
          {
            id: 1,
            hubTitle: "New For Men",
            link: "/NewForMen",
          },
        ],
      },
      {
        subTitle: "New for Women",
        subtoggel: "toggler4",
        subLinks: [
          {
            id: 1,
            hubTitle: "New For Women",
            link: "/NewForWomen",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Sale",
    toggle: "toggle2",
    toggel1: "toggel3",
    Links: [
      {
        subTitle: "Featured",
        subtoggel: "toggle2",
        subLinks: [
          {
            id: 2,
            hubTitle: "Shop All Sales",
            link: "/ShopAllSales",
          },
          {
            id: 2,
            hubTitle: "30% off and up",
            link: "/FourSale",
          },
          {
            id: 2,
            hubTitle: "20% off and up",
            link: "/ThreeSale",
          },
          {
            id: 2,
            hubTitle: "10% off and up",
            link: "/TwoSale",
          },
        ],
      },
      {
        subTitle: "Men's Sale",
        subtoggel: "toggler6",
        subLinks: [
          {
            id: 2,
            hubTitle: "Shoes",
            link: "/MenSale",
          },
        ],
      },
      {
        subTitle: "Women's Sale",
        subtoggel: "toggler7",
        subLinks: [
          {
            id: 2,
            hubTitle: "Shoes",
            link: "/WomenSale",
          },
        ],
      },
    ],
  },
];

export const FooterLinks = [
  {
    id: 1,
    title: "FIND A STORE",
  },
  {
    id: 2,
    title: "BECOME A MEMBER",
  },
  {
    id: 3,
    title: "STUDENT DISCOUNTS",
  },
  {
    id: 4,
    title: "Send Us Feedback",
  },
];

export const FooterSubLinks = [
  {
    id: 1,
    title: "GET HELP",
    Links: [
      {
        id: 1,
        title: "Order Status",
      },
      {
        id: 2,
        title: "Delivery",
      },
      {
        id: 3,
        title: "Payment Options",
      },
      {
        id: 4,
        title: "Contact Us",
      },
    ],
  },
  {
    id: 2,
    title: "About SneakrZ",
    Links: [
      {
        id: 1,
        title: "News",
      },
      {
        id: 2,
        title: "Career",
      },
      {
        id: 3,
        title: "Investors",
      },
      {
        id: 4,
        title: "Sustainability",
      },
    ],
  },
];
import { facebook, instagram, twitter } from "../assets/icons/icons.js";

export const socials = [
  {
    id: 1,
    image: facebook,
    link: "https://www.facebook.com/vhokie.senoron/",
  },
  {
    id: 2,
    image: instagram,
    link: "https://www.instagram.com/vhokie75/",
  },
  {
    id: 3,
    image: twitter,
    link: "https://twitter.com/senoron_jr1875",
  },
];
import { nike, adidas, newBalance, UA } from "../assets/icons/icons.js";

export const categories = [
  {
    id: 1,
    image: nike,
  },
  {
    id: 2,
    image: adidas,
  },
  {
    id: 3,
    image: newBalance,
  },
  {
    id: 4,
    image: UA,
  },
];
import { image1, image2, image3 } from "../assets/images";
export const featured = [
  {
    id: 1,
    image: image1,
    content:
      "Elevate your footwear game with our sleek and versatile shoe collection",
  },
  {
    id: 2,
    image: image2,
    content:
      "Experience the perfect balance of style and support in our premium shoes.",
  },
  {
    id: 3,
    image: image3,
    content:
      "Discover a world of endless possibilities with our innovative and vibrant shoe designs.",
  },
];

export const adidasMenShoes = [
  {
    id: "1",
    title: "RUNFALCON 3.0 SHOES",
    price: 3500,
    description:
      "Lace up for a run through the park or a walk to the coffee shop in these versatile adidas running shoes. They feel good from the minute you step in, thanks to the cushy Cloudfoam midsole. The textile upper feels comfy and breathable, and the rubber outsole gives you plenty of grip for a confident stride.",
    sale: 10,
    category: "Running",
    promo: "best sellers",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cef8297b1dab42c48ee8af54009308c7_9366/Runfalcon_3.0_Shoes_White_HP7559_01_standard.jpg",
  },
  {
    id: "2",
    title: "DURAMO SPEED SHOES",
    price: 4500,
    description:
      "A combination of a lightweight & breathable engineered mesh upper with a full length LIGHTSTRIKE midsole for faster movement and durable outsole was built for runners looking to learn the ropes and push themselves to the next level.",
    sale: 20,
    category: "Running",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c3b091590220444996721e0d2d75d82d_9366/Duramo_Speed_Shoes_Black_IE9682_01_standard.jpg",
  },
  {
    id: "3",
    title: "BYW SELECT SHOES",
    price: 8500,
    description:
      "Keep that pep in your step all game long. These adidas basketball shoes have Lightstrike cushioning that keeps you comfortable without weighing you down.",
    sale: 0,
    category: "Basketball",
    promo: "best seller",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d51fd81610df4ee7a1fdafc50113d7db_9366/BYW_Select_Shoes_Black_IE9306_01_standard.jpg",
  },
  {
    id: "4",
    title: "ADIZERO BOSTON 12 SHOES",
    price: 8000,
    description:
      "The Adizero Boston 12 Shoes are built for mid- to long-distance running. They bring a race-day feel to training with a propulsive feel that comes from the glass-fiber infused ENERGYRODS 2.0, which limit energy loss underfoot. They're fast, but that does not come at the cost of durability — the midsole layers ultra-light LIGHTSTRIKE PRO cushioning with a new version of durable LIGHTSTRIKE 2.0 EVA.",
    sale: 10,
    category: "Running",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d9be7869e7444cebbcb1907eaf593f8d_9366/Adizero_Boston_12_Shoes_White_HP9705_01_standard.jpg",
  },
  {
    id: "5",
    title: "SUPERNOVA 3 RUNNING SHOES",
    price: 6000,
    description:
      " They feel good from the moment you step in, with a breathable mesh upper and padding at the tongue and heel. A precisely balanced mix of Bounce and BOOST cushioning delivers both comfort and energy so you enjoy every step on the road towards your personal running goals.",
    sale: 20,
    category: "Running",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/79ad0cd679024c0492894bd2bd5d7ac3_9366/Supernova_3_Running_Shoes_Black_IE4367_HM1.jpg",
  },
  {
    id: "6",
    title: "ADIZERO SELECT SHOES",
    price: 7300,
    description:
      "Made for players who use speed as their main weapon, these adidas basketball shoes have a lightweight feel to let you move freely on the hardwood.",
    sale: 30,
    category: "Basketball",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea9bb1d6f16f4484bdc9afc5010b753d_9366/Adizero_Select_Shoes_Black_IE9285_01_standard.jpg",
  },
  {
    id: "7",
    title: "TRAE UNLIMITED SHOES",
    price: 5500,
    description:
      "Trae Young marches to the beat of his own drum. His signature adidas basketball shoes feature a low cut and a Bounce midsole that responds to your every move. The classic 3-Stripes have a serrated, textured design that goes from toe to midfoot. The rubber outsole with lateral grip zones gives you traction as you change directions or make quick cuts to the basket.",
    sale: 10,
    category: "Basketball",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a82a0fb118f404894baaf3f00f52d18_9366/Trae_Unlimited_Shoes_Black_HQ1020_01_standard.jpg",
  },
  {
    id: "8",
    title: "TRAE YOUNG 2.0 SHOES",
    price: 7000,
    description:
      "One of the coldest on the hardwood, Trae Young is absolutely fearless. He'll take any shot at any time, and when it's all on the line, look out, because Trae is about to steal the show. ",
    sale: 20,
    category: "Basketball",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/749a15ebcb5143c585f5af3b00f816ba_9366/Trae_Young_2.0_Shoes_Black_HQ0986_01_standard.jpg",
  },
  {
    id: "9",
    title: "D.O.N. ISSUE 4 SHOES",
    price: 6500,
    description:
      "Determination over negativity. That's what D.O.N. stands for, and it's also the fuel behind the fire that is Donovan Mitchell's fast and fearless game.",
    sale: 30,
    category: "Basketball",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0966fc1a5184cb4b463af2d000670f5_9366/D.O.N._Issue_4_Shoes_Turquoise_HR0718_01_standard.jpg",
  },
  {
    id: "10",
    title: "HARDEN VOLUME 7 SHOES",
    price: 9000,
    description:
      "From his lethal stepback to his love of luxury fashion, there's no doubt that James Harden has style. With his signature shoes from adidas Basketball, it all comes into play.",
    sale: 10,
    category: "Basketball",
    for: "Men's Shoes",
    size: [
      "US 6.5",
      "US 7",
      "US 7.5",
      "US 8",
      "US 8.5",
      "US 9",
      "US 9.5",
      "US 10",
      "US 10.5",
      "US 11",
      "US 11.5",
      "US 12",
      "US 12.5",
      "US 13",
    ],
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1387f49d03f64d8191f6af8d01437ef4_9366/Harden_Volume_7_Shoes_White_HQ3425_01_standard.jpg",
  },
];
