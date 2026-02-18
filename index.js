/* ==============================
    STUDENTS
================================ */
const express = require("express");
const app = express();

app.use(express.json());

let subjects = [
  { Id: 1, Sname: "Sumit Patel", Email: "sumitpatel@gmail.com" },
  { id: 2, Sname: "Ajay Patel", Email: "ajaypatel@gmail.com" },
  { id: 3, Sname: "Ankit Patel", Email: "ankitpatel@gmail.com" },
];

app.post("/students", (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.status(201).json({ message: "Student Created", data: newStudent });
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.put("/students/:id", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);
  if (!student) return res.status(404).json({ message: "Student Not Found" });

  Object.assign(student, req.body);
  res.json({ message: "Student Updated", data: student });
});

app.delete("/students/:id", (req, res) => {
  const index = students.findIndex((s) => s.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Student Not Found" });

  students.splice(index, 1);
  res.json({ message: "Student Deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
