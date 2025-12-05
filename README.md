# 📝 GrubTasks — Modern MERN Task Manager

## 🌟 Overview

GrubTasks is a beautifully designed, fast, and intuitive task manager built using the **MERN stack (React, Node.js, Express, MySQL/Sequelize)**.

It provides a seamless experience for managing your daily tasks, featuring a powerful soft-delete system that treats your deleted tasks as trash items that can be restored later.

### 🖼️[GrubTasks Screenshot](./preview.png)

## 🚀 Key Features

### ✅ Fluid Task Management

- **CRUD Operations:** Create, Read, and Edit tasks with dedicated fields for title and description.
- **Completion Tracking:** UI placeholder ready for marking tasks as complete.

### 🗑️ Smart Trash System (Soft Delete)

- Tasks are soft-deleted, moving them to a dedicated **Trash** section
- Ability to **Restore** tasks back to the main list.
- Infrastructure ready for a permanent "Empty Trash" feature.

### 💅 Modern Frontend

- **Styling:** Utility-first design with **Tailwind CSS.**
- **Interactions:** Smooth, modern animations powered by **Framer Motion.**
- **Responsiveness:** Fully adaptive layout for desktop, tablet, and mobile viewing.

### ⚡ Smart State Management

- **React Query** for caching, invalidation & background refetching
- Custom hooks: `useTasks`, `useCreateTask`, `useUpdateTask`, `useDeleteTask`, `useTrashTasks`, `useRestoreTask`

---

## 🧰 Tech Stack

### **Frontend**

- React
- Tailwind CSS
- Framer Motion
- React Query
- Axios

### **Backend**

- Node.js
- Express.js
- Sequelize ORM
- MySQL Database

---

## 📂 Project Structure

### Frontend Structure

/client
├── /src
│ ├── /components
│ │ ├── Sidebar.jsx
│ │ ├── TaskCard.jsx
│ │ └── CreateTaskModal.jsx
│ ├── /hooks
│ │ ├── useTasks.js
│ │ ├── useCreateTask.js
│ │ ├── useUpdateTask.js
│ │ ├── useDeleteTask.js
│ │ ├── useTrashTasks.js
│ │ └── useRestoreTask.js
│ ├── /pages
│ │ ├── Home.jsx
│ │ ├── Trash.jsx
│ │ └── EditTask.jsx
│ ├── /utils
│ │ └── axiosConfig.js
│ ├── App.jsx
│ ├── index.jsx
│ └── styles.css
└── package.json

### Backend Structure

/server
├── /controllers
│ ├── taskController.js
│
├── /models
│ ├── Task.js
│ └── index.js
│
├── /routes
│ ├── taskRoutes.js
│
├── /config
│ └── db.js
│
├── server.js
└── package.json

### 🏗️ Future Updates

- Permanent delete UI
- Task categories
- Completed tasks section
- Dark mode
- User authentication
- Drag-and-drop task sorting
- Search & filters

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first.

## ⭐ Show Support

If you like this project, give it a star on GitHub ⭐
It motivates us to improve it even more!
