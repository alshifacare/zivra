/* ==========================================================================
   Zivra — Product & Category Data
   --------------------------------------------------------------------------
   Yahan par aap apni asli products add/edit/remove kar sakte hain.
   Har product object mein ye fields hain:
     id        -> unique number
     name      -> product ka naam
     category  -> "earrings" | "rings" | "pendants" | "bracelets" | "sets" | "mens" | "religious" | "ethnic"
     price     -> PKR mein price (number)
     oldPrice  -> agar sale price hai to original price (optional, warna 0)
     type      -> icon shape for placeholder art: "ring" | "earring" | "pendant" | "bracelet" | "set"
     tone      -> "gold" | "rose" | "silver"  (placeholder art ka color variant)
     desc      -> chhota description
     badge     -> "New" | "Sale" | "" (optional)
     image     -> agar aap asli photo lagana chahain to yahan image ka path daalen
                  (e.g. "images/ring-01.jpg") — khali chhoro to auto placeholder banega
   ========================================================================== */

const CATEGORIES = [
  { id: "earrings",  label: "Earrings",           type: "earring"  },
  { id: "rings",     label: "Rings",               type: "ring"     },
  { id: "pendants",  label: "Pendants",            type: "pendant"  },
  { id: "bracelets", label: "Bracelets",           type: "bracelet" },
  { id: "sets",      label: "Sets",                type: "set"      },
  { id: "mens",      label: "Men's",               type: "bracelet" },
  { id: "religious", label: "Religious Pendants",  type: "pendant"  },
  { id: "ethnic",    label: "Ethnic Jewellery",    type: "set"      },
];

const PRODUCTS = [
  { id: 1,  name: "Noor-e-Zar Jhumkas",     category: "earrings",  price: 1890, oldPrice: 2400, type: "earring",  tone: "gold",  badge: "Sale", desc: "Antique gold-toned jhumkis with delicate filigree work — light enough for all-day wear.", image: "" },
  { id: 2,  name: "Layla Pearl Drop Earrings",      category: "earrings",  price: 1550, oldPrice: 0,    type: "earring",  tone: "silver",badge: "New",  desc: "Freshwater-style pearl drops on a rhodium-plated hook.", image: "" },
  { id: 3,  name: "Rania Kundan Studs",             category: "earrings",  price: 1290, oldPrice: 0,    type: "earring",  tone: "rose",  badge: "",     desc: "Hand-set kundan stones in a compact stud silhouette.", image: "" },
  { id: 4,  name: "Noor Solitaire Ring",            category: "rings",     price: 990,  oldPrice: 1300, type: "ring",     tone: "silver",badge: "Sale", desc: "A single cubic zirconia stone on a slim adjustable band.", image: "" },
  { id: 5,  name: "Zoya Stackable Band",             category: "rings",     price: 750,  oldPrice: 0,    type: "ring",     tone: "gold",  badge: "",     desc: "Thin stackable band, perfect worn alone or layered.", image: "" },
  { id: 6,  name: "Anaya Halo Ring",                 category: "rings",     price: 1150, oldPrice: 0,    type: "ring",     tone: "rose",  badge: "New",  desc: "Halo-set centre stone surrounded by a ring of pave crystals.", image: "" },
  { id: 7,  name: "Sitara Layered Pendant",          category: "pendants",  price: 1690, oldPrice: 0,    type: "pendant",  tone: "gold",  badge: "",     desc: "Double-layered chain with a coin pendant detail.", image: "" },
  { id: 8,  name: "Amara Heart Locket",              category: "pendants",  price: 1450, oldPrice: 1800, type: "pendant",  tone: "rose",  badge: "Sale", desc: "Classic heart locket on a fine cable chain.", image: "" },
  { id: 9,  name: "Zara Cuff Bracelet",              category: "bracelets", price: 1250, oldPrice: 0,    type: "bracelet", tone: "silver",badge: "",     desc: "Open cuff bracelet with a brushed antique finish.", image: "" },
  { id: 10, name: "Mahira Charm Bracelet",           category: "bracelets", price: 1390, oldPrice: 0,    type: "bracelet", tone: "gold",  badge: "New",  desc: "Delicate chain bracelet with three signature charms.", image: "" },
  { id: 11, name: "Dilnaz Bridal Set",               category: "sets",      price: 4990, oldPrice: 6200, type: "set",      tone: "gold",  badge: "Sale", desc: "Necklace, earrings & tikka set with kundan and pearl detailing.", image: "" },
  { id: 12, name: "Sana Everyday Set",               category: "sets",      price: 2290, oldPrice: 0,    type: "set",      tone: "rose",  badge: "",     desc: "Minimal necklace and earring set for daily wear.", image: "" },
  { id: 13, name: "Bilal Signet Ring",               category: "mens",      price: 1090, oldPrice: 0,    type: "ring",     tone: "silver",badge: "",     desc: "Matte-finish stainless steel signet ring.", image: "" },
  { id: 14, name: "Hamza Chain Bracelet",            category: "mens",      price: 1290, oldPrice: 0,    type: "bracelet", tone: "silver",badge: "New",  desc: "Bold curb-link bracelet in a gunmetal finish.", image: "" },
  { id: 15, name: "Ayat-ul-Kursi Pendant",           category: "religious", price: 1590, oldPrice: 0,    type: "pendant",  tone: "gold",  badge: "",     desc: "Fine engraved calligraphy pendant on an adjustable chain.", image: "" },
  { id: 16, name: "Allah Name Necklace",             category: "religious", price: 1350, oldPrice: 0,    type: "pendant",  tone: "rose",  badge: "",     desc: "Delicate calligraphy pendant, gift-boxed.", image: "" },
  { id: 17, name: "Meerab Chandbali Earrings",       category: "ethnic",    price: 2190, oldPrice: 2600, type: "earring",  tone: "gold",  badge: "Sale", desc: "Statement chandbalis with hanging pearl tassels.", image: "" },
  { id: 18, name: "Farah Choker Set",                category: "ethnic",    price: 3490, oldPrice: 0,    type: "set",      tone: "gold",  badge: "New",  desc: "Traditional choker and earring set for festive wear.", image: "" },
];

/* Simple helper to find a category label from its id */
function categoryLabel(id) {
  const c = CATEGORIES.find(c => c.id === id);
  return c ? c.label : id;
}
