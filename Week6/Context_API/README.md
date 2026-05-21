# Context API - Shared Counter App

A simple React app that demonstrates how to use **React Context API** to share state across multiple components without passing props manually.

---

## 🚀 How to Run

```bash
npm install
npm run dev
```

---

## 💡 What It Does

* A shared **counter** is created using Context API.
* Four separate counter components (`EditCounter1` to `EditCounter4`) all read and update the **same counter value**.
* Any component can **increase** or **decrease** the counter, and the change is reflected everywhere instantly.

---

## 🧠 Key Concepts Practiced

* **`createContext`**: Creates a shared context object.
* **`useContext`**: Allows any component to access the shared state.
* **Context Provider**: Wraps all child components and supplies the shared counter value and update functions.
* **`useState`**: Manages the counter state inside the provider.
