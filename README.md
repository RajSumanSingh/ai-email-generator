# 📧 MailCraft AI

An AI-powered email generation platform that helps users create professional, personalized emails in seconds using Large Language Models.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-green?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.12-yellow?logo=python)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss)
![Groq](https://img.shields.io/badge/Groq-AI-black)

---

## 📌 Overview

MailCraft AI is a full-stack AI-powered web application that generates professional emails for different purposes such as:

- Job Applications
- Internship Requests
- Business Emails
- Follow-up Emails
- Professional Communication

Users simply enter the required details, and the AI instantly creates a polished email with an appropriate subject line.

---

# ✨ Features

## 🤖 AI Email Generation

Generate professional emails using Groq LLM.

---

## 🎯 Multiple Input Options

Users can specify:

- Purpose
- Recipient Name
- Recipient Email
- Tone
- Email Length
- Key Points

---

## 🎨 Premium User Interface

- Modern SaaS Landing Page
- Glassmorphism Design
- Responsive Layout
- Interactive Components
- Modern Typography

---

## ⚡ Loading Experience

- Loading Spinner
- Skeleton Loading Screen
- Disabled Button During Requests

---

## 📄 PDF Export

Download generated emails as a PDF.

---

## 📋 Copy to Clipboard

Copy the generated email with one click.

---

## ❌ Error Handling

Displays friendly error messages when email generation fails.

---

## 📱 Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- jsPDF
- Lucide React

---

## Backend

- FastAPI
- Python
- Groq API
- Uvicorn
- Pydantic

---

# 📂 Project Structure

```
ai-email-generator/

├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   │
│   ├── components/
│   │   ├── email/
│   │   ├── features/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── styles/
│   └── types/
│
└── README.md
```

---

# 🚀 Application Workflow

```
User Input
      │
      ▼
React Form
      │
      ▼
Axios API Request
      │
      ▼
FastAPI Backend
      │
      ▼
Groq AI
      │
      ▼
Generated Email
      │
      ▼
React Output
      │
      ├── Copy
      └── Download PDF
```

---

# 🎯 Current Features Completed

- [x] AI Email Generation
- [x] Landing Page
- [x] Hero Section
- [x] Feature Cards
- [x] Hero Dashboard Preview
- [x] Responsive Design
- [x] Modern UI Components
- [x] Loading Spinner
- [x] Skeleton Loader
- [x] Copy to Clipboard
- [x] PDF Download
- [x] Error Handling
- [x] Mobile Responsive Layout

---


# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/RajSumanSingh/ai-emai-generator.git
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Backend

```bash
cd backend

python -m venv .venv

source .venv/bin/activate
```

Windows

```bash
.venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run

```bash
uvicorn main:app --reload
```

---

# 🌐 Environment Variables

Create a `.env` file inside the backend.

```env
GROQ_API_KEY=your_api_key_here
```

---

# 🎓 Learning Highlights

This project demonstrates knowledge of:

- React
- TypeScript
- FastAPI
- REST APIs
- State Management
- Component-Based Architecture
- Responsive Design
- AI API Integration
- PDF Generation
- Clipboard API
- Error Handling
- Modern UI/UX

---

# 🚀 Future Improvements

- [ ] Functional Navbar
- [ ] Toast Notifications
- [ ] Email Templates
- [ ] Theme Customization
- [ ] Deployment
- [ ] GitHub Actions CI/CD

---

# 👨‍💻 Author

**RAJ SUMAN SINGH**

B.Tech (Data Science - AI & ML)

Built with ❤️ using React, FastAPI, and Groq AI.
