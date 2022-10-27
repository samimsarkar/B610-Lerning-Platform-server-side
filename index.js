const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Md. Samim Sarkar");
})

const courses = require('./data/courses.json');
const tutorials = require('./data/tutorials.json');

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    // Get Course Data
    const courseId = req.params.id;
    const course = courses.find(c => c.id === courseId);

    // Get Modules of this course
    const modules = tutorials.filter(module => module.course_id === courseId);

    const data = {
        course,
        modules
    }

    res.send(JSON.stringify(data))
})



app.listen(5000, () => {
    console.log("Server is running on port: 5000");
})