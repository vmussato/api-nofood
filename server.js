const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let pessoas = [];

//read
app.get('/', (req, res) => {
    res.status(200).send(pessoas);
});

//create
app.post('/', (req, res) => {
    console.log("corpo", req.body);

    pessoas.push(req.body);
    res.status(201).send(req.body);
});

//update
app.put('/:id', (req, res) => {
    let pessoaEncontrada = pessoas.filter(pes => { return pes.id = req.params.id });
    pessoaEncontrada = req.body;
    res.status(202).send(pessoaEncontrada);
});

//delete
app.delete('/:id', (req, res) => {

    for (let index = 0; index < pessoas.length; index++) {
        const pessoa = pessoas[index];

        if (pessoa.id == req.params.id) {
            pessoas.splice(index, 1);
        }
    }

    res.status(204).send();
});

// 404 Bad Request
// 401 Unauthorized
// 500 Internal Server Error

app.listen(3000, () => {
    console.log('Server Running on port 3000');
});