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

- **React Query:** Used extensively for data fetching, caching, and background synchronization.
- Custom hooks: `useTasks`, `useCreateTask`, `useUpdateTask`, `useDeleteTask`, `useTrashTasks`, `useRestoreTask, etc` for clean, organized state logic.

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

```bash
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
```

### Backend Structure

```bash
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
```

## ⚙️ Installation

Follow these steps to set up the project locally.

1. Prerequisites

- Node.js (v18+)
- MySQL Database instance (local or remote)

2. Backend Setup

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create a .env file and add your database configuration
# Example .env:
# DB_DIALECT=mysql
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=yourpassword
# DB_NAME=grubtasks_db

# Run the server
npm start
```

3. Frontend Setup

```bash
# Navigate to the client directory
cd ../client

# Install dependencies
npm install

# Start the React application
npm run dev
```

## 🏗️ Future Updates

- Permanent delete functionality
- Task categories and filtering
- Completed tasks section
- Dark mode toggle
- User authentication
- Drag-and-drop task sorting
- Search & filters

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first.

## ⭐ Show Support

If you like this project, give it a star on GitHub ⭐
It motivates us to improve it even more!
