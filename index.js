// servidor e rotas
const express = require('express');
const petshop = require('./petshop');
const {v4:uuidv4} = require('uuid');

const app = express();
app.use(express.json());

//Rota para cada informação
// app.get('/pets', (req, res) => {
//     return res.send(petshop.listarPets());
// })
app.get('/pets/:nome',(req,res) => {
    const { nome } = req.params;

    //petshop.buscarPet(nome);
    return res.send(petshop.buscarPet(nome));
});

app.post('/pets', (request, response) => {
    const {tutor, contato, nome, tipo, idade, raca, peso, vacinado, servicos} = request.body;
        
    const pet = {nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos} 

    petshop.adicionarPet(pet);

    return response.send(pet);

});



app.listen(3000, () => {
    console.log('Servidor rodando!')
});

console.log(petshop.listarPets());
