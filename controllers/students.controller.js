
const path = require("path");

const students = require("../models/students.model");
exports.getStudents = (req,res)=>{
    // res.send("hello students");
    res.sendFile(path.join(__dirname + "/../views/index.html"));
}
exports.saveStudent = (req,res)=>{
    const name = req.body.name;
    const id = Number(req.body.id);
    const student = {
        name,
        id
    }
    students.push(student);

    const updatedHtmlForm = `
        <h2>Students:</h2>
        <ul>
            ${students.map(student => `<li>Name : ${student.name} - ID : ${student.id}</li>`).join("")}
        </ul>
    `;
    res.send(updatedHtmlForm);

    // res.send(students);

    /* res.status(201).json({
        success: true,
        students,
    }) */
}