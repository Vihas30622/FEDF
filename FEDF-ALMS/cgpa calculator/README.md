# CGPA Calculator

Simple React app to add and view a student's CGPA and download details as PDF.

Project structure:

src/
├── components/
│   ├── AddCGPA.jsx
│   ├── ViewCGPA.jsx
├── App.jsx
├── index.js

How to run (PowerShell):

```powershell
cd "c:\Users\giriv\OneDrive\Desktop\FEDF-ALM\cgpa calculator"
npm install
npm start
```

Notes:
- This project uses `react-router-dom` for routing and `jspdf` to create PDFs.
- If you prefer creating the app with Create React App tooling, you can run `npx create-react-app student-cgpa` and copy these files into the generated project. Otherwise, install dependencies as above.
