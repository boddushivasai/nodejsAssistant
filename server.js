 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let data = [];

app.post('/create', (req, res) => {
    const item = req.body;
    data.push(item);
    res.send({ message: 'Item created successfully', data });
});

app.get('/read', (req, res) => {
    res.send({ data });
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const item = req.body;

    data[id] = item;
    res.send({ message: 'Item updated successfully', data });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    data = data.filter((item, index) => index != id);
    res.send({ message: 'Item deleted successfully', data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));