# 👤 User Profiles App (React + Ant Design)

A single-page React application that fetches user data from a public API and displays it as a collection of interactive profile cards.  
Built with **React**, **Ant Design**, and **Framer Motion** for smooth UI and animations.

---

### Deploy on Vercel
Deployed here 👉 [https://user-profiles-antd.vercel.app](https://user-profiles-antd.vercel.app)

---

## 🚀 Features

- 📡 **Fetch Users from API**  
  Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) to display 10 user profiles.

- 🎭 **Dynamic Avatars**  
  Unique avatars generated using the [DiceBear Avatars API](https://avatars.dicebear.com/).

- 🎨 **Modern UI with Ant Design**  
  Responsive cards, modals, and forms styled using Ant Design.

- ✨ **Animations with Framer Motion**  
  Smooth hover effects, card transitions, and animated background colors.

- 📝 **Edit & Delete Functionality**  
  - Edit user details via a modal form.  
  - Delete a user card dynamically.  
  - Like (❤️) users with toggle effect.

- 🔄 **Loading State**  
  Displays a centered spinner while data is being fetched.

---

## 📸 Demo Preview

| User Cards | Edit Modal |
|------------|------------|
| ![cards](https://user-profiles-antd-opal.vercel.app/) | ![modal](https://user-profiles-antd-opal.vercel.app/) |

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)  
- **Ant Design (antd)** – UI Components  
- **Framer Motion** – Animations  
- **JSONPlaceholder API** – User Data  
- **DiceBear API** – Avatars  
- **SpinKit / Ant Design Spin** – Loader  

---

## 📂 Project Structure

```
user-profiles-antd/
├── public/                 # Static files
├── src/
│   ├── components/
│   │   └── UserCardAntd.js # User profile card component
│   ├── App.js              # Main App logic
│   ├── index.css           # Global styles
│   └── index.js            # Entry point
├── package.json
└── README.md

```

---

## ⚡ Getting Started

Follow these steps to run the project locally:

### 1. Clone the repo
```
bash
git clone https://github.com/<your-username>/user-profiles-antd.git
cd user-profiles-antd
```

### 2. Install dependencies
```
npm install
```

### 2. Start the dev server
```
npm start
```

Runs the app in development mode.
Open http://localhost:3000 in your browser.

---

## 📦 Build & Deploy

### Build for Production

```
npm run build
```

This will create a build/ folder with production-ready optimized code.

### Deploy on Vercel

```
vercel --prod
```

Your app will be deployed with a public URL
