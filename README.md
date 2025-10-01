# SQL Engine Demo

A lightweight web-based SQL playground that allows you to **write, run, and test SQL queries online** without installing a database on your computer.  
This project is built with **React + TailwindCSS + Vite** and supports multiple SQL dialects like **SQLite, MySQL, PostgreSQL, and MariaDB**.

---

## 🚀 Features

- 🖥️ **Run SQL queries online** – no installation required.
- 🗂️ **Database simulation** with sample tables (Booking, Property, Review, etc.).
- 🎨 **Modern UI** built with TailwindCSS.
- ⚡ **Fast development** powered by Vite.
- 📱 **Responsive design** with mobile-first sidebar and editor.

---

## 📂 Project Structure

```bash
sql-engine-demo/
├── src/
│   ├── component/
│   │   ├── sidenav.jsx        # Sidebar with databases & tables
│   │   ├── commandarea.jsx    # SQL editor using CodeMirror
│   │   ├── resultarea.jsx     # Query result display
│   ├── App.jsx                # Main app with context
│   └── index.jsx              # Entry point
├── public/                    # Static assets
├── package.json
└── vite.config.js


# Clone the repository
git clone https://github.com/your-username/sql-engine-demo.git

# Navigate into the project
cd sql-engine-demo

# Install dependencies
npm install

# Start development server
npm run dev

🛠️ Tech Stack

React – UI framework

Vite – build tool

TailwindCSS – styling

CodeMirror – SQL editor

Immer – immutable state updates

📖 Usage

Select a database from the sidebar (e.g., SQLite, MySQL).

Browse tables and columns.

Write SQL queries in the editor (supports formatting & autocomplete).

Click Run ▶️ to execute and view results in the output section.

🔮 Roadmap

 Add authentication & user accounts.

 Support saving queries.

 More sample databases.

 Query history panel.


 ---


## 📜 License

This project is licensed under the **MIT License**.

---

## ⚠️ DISCLAIMER

This project is a **demo**.
- The **UI/UX** design was mimicked from [SQL Online AIDE](https://sqliteonline.com/).
- The **backend implementation and logic** were developed from my own knowledge and experience.
```
