# Zeenat — Artificial Jewellery Website

Ye ek pura static website hai (HTML/CSS/JS) — koi backend ya build-step nahi chahiye.
GitHub Pages par seedha upload karke live kar sakte hain.

## 📁 File Structure

```
zeenat-jewelry/
├── index.html          → Homepage
├── shop.html            → Sab products / category filter / search
├── product.html          → Single product detail (?id=1 wagera se open hota hai)
├── cart.html             → Cart + WhatsApp checkout
├── about.html            → About page
├── contact.html           → Contact form
├── css/style.css          → Poori styling / colors / fonts yahan hain
├── js/data.js             → APKE PRODUCTS YAHAN HAIN (sabse zaroori file)
├── js/main.js             → Cart logic, product cards, placeholder images
└── js/layout.js           → Footer (sirf ek jagah edit karo, har page pe update hoga)
```

## 🚀 GitHub par Upload Kaise Karen

1. GitHub par naya repository banayen (masalan `zeenat-jewelry`).
2. Is poore folder ki files us repository mein upload kar dein (drag & drop bhi chalta hai GitHub ki "Add file → Upload files" se), ya `git push` karen.
3. Repository ke **Settings → Pages** mein jayen.
4. "Branch" mein `main` select karen, folder `/ (root)` rakhen, aur Save kar dein.
5. Kuch minute baad aapki site is link par live ho jayegi:
   `https://<aapka-username>.github.io/zeenat-jewelry/`

## ✏️ Sabse Zaroori Edits (Apna Store Banane Ke Liye)

### 1. Apne Products Add/Edit Karen
`js/data.js` file kholen. Har product ek object hai:
```js
{ id: 19, name: "Naya Product", category: "rings", price: 1500, oldPrice: 0,
  type: "ring", tone: "gold", badge: "New", desc: "Description yahan likhen.", image: "" }
```
- `id` — har product ka unique number hona chahiye.
- `category` — inme se ek: earrings, rings, pendants, bracelets, sets, mens, religious, ethnic
- `type` — placeholder icon ke liye: ring, earring, pendant, bracelet, set
- `tone` — gold, rose, ya silver
- `image` — agar asli photo lagani hai to yahan uska path likhen (misal: `images/ring1.jpg`) aur wo photo `images/` folder mein daal den. Khali chhoro to automatic gold-line placeholder ban jayega.

### 2. Apna WhatsApp Number
`js/main.js` file mein sabse upar ye line milegi:
```js
const WHATSAPP_NUMBER = "923001234567";
```
Isay apne asli number se replace karen (country code ke sath, `+` ke bagair, jese `923001234567`).

### 3. Store ka Naam / Logo Text
Har HTML file mein `<a href="index.html" class="logo">Zee<span>nat</span></a>` line dhoondhen aur naam badal den.

### 4. Colors / Fonts
`css/style.css` ke sabse upar `:root { ... }` section mein saare colors variables ki soorat mein hain (`--maroon`, `--gold`, wagera) — inhe badal ke poori site ka theme change ho jayega.

### 5. Contact Details
`js/layout.js` (footer) aur `contact.html` mein apna address, email, aur phone number update karen.

## 🛒 Cart Kaise Kaam Karta Hai
Cart browser ke localStorage mein save hota hai (koi database nahi chahiye). Checkout button user ko WhatsApp par le jata hai, jahan order details pehle se message mein likhi hoti hain — small jewellery businesses ke liye ye sabse aasan tareeqa hai payment gateway ke bagair order lene ka.

## 🖼️ Asli Product Photos Lagana
1. Apni photos `images/` folder mein daalen (square/1:1 ratio best rehta hai, jese 800x800px).
2. `js/data.js` mein us product ke `image` field mein path likhen, e.g. `image: "images/jhumka-1.jpg"`.

## 💡 Aage Kya Improve Kar Sakte Hain
- Real payment gateway (JazzCash / EasyPaisa / Stripe) add karna — iske liye backend chahiye hoga.
- Product reviews section.
- Multiple product images / zoom on hover.
- Google Analytics ya Facebook Pixel add karna marketing ke liye.

Koi bhi cheez samajh na aaye ya aage customize karwani ho (naya page, payment integration, real photos ke sath design tweak), bata dijiega!
