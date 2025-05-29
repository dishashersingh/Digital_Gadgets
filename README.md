## 🛒 DigiGadgets – Digital Gadgets E-Commerce Platform

**DigiGadgets** is a full-featured, mobile-responsive e-commerce platform built with **Next.js**, **Node.js**, **MySQL**, and **Tailwind CSS**. It includes a powerful admin dashboard, product management tools, user authentication, and shopping features — all fully documented and manually tested using a waterfall-based software engineering process.

![DigiGadgets Home Page](./public/home.png)

---

### 🚀 Features

* ✅ Modern UI/UX with Tailwind and Next.js
* ✅ Secure login/register system
* ✅ Product filtering, search, and wishlist
* ✅ Cart & checkout process
* ✅ Admin dashboard for managing orders, users, and inventory
* ✅ Manual testing with 350+ documented test cases
* ✅ Free & open-source — ready for production or customization

---

### 📘 Software Engineering Process

The entire app was built following the **Waterfall model**, with full documentation of:

* ✅ Requirements analysis
* ✅ Use case modeling
* ✅ System & database design
* ✅ Component-based implementation
* ✅ Manual & unit testing
* ✅ Integration & end-to-end testing
* ✅ Error logging and documentation
* ✅ Figma-based component hierarchy
---

### 📁 Project Structure

```bash
.
├── app             # Frontend (Next.js)
├── server          # Backend (Node.js + Express + Prisma)
├── public          # Images, product assets
├── prisma          # Schema and migrations
└── README.md
```

---

### 🧪 Testing Approach

* 🔍 Manual testing (350+ cases) with test scripts and reports
* ⚙️ Unit testing (72.8% error coverage)
* 🔁 Integration testing (bottom-up approach)
* ✅ End-to-end user scenario verification
---

### 📷 Screenshots

| 💻 Home Page                             | 🛍️ Shop Page                            | 📦 Product View                                |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| ![Home](./public/homepage.png) | ![Shop](./public/shop.png) | ![Product](./public/featured.png) |

| 🔐 Login                                   | 📋 cart                            | 🛒 Checkout                                      |
| ------------------------------------------ | -------------------------------------------- | ------------------------------------------------ |
| ![Login](./public/login.png) | ![Orders](./public/cart.png) | ![Checkout](./public/chechout.png) |

---

### ▶️ Getting Started

**1. Clone the repo & install dependencies**

```bash
git clone https://github.com/yourname/digigadgets.git
cd digigadgets
npm install
cd server
npm install
```

**2. Configure MySQL in `.env` files (root + server)**

```env
DATABASE_URL="mysql://username:password@localhost:3306/digigadgets"
```

**3. Run Prisma migrations**

```bash
cd server
npx prisma migrate dev
```

**4. Insert demo data**

```bash
cd server/utills
node insertDemoData.js
```

**5. Run the backend and frontend**

```bash
cd server && node app.js  # Start backend
npm run dev               # Start frontend (in another terminal)
```

Visit `http://localhost:3000`

---

### 🧑‍💻 Credits
Developed by **Disha**
---
