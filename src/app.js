import express from "express";
import conectaDataBase from "./config/dbconnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaDataBase();

conexao.on("error",(erro)=>{
    console.error("Erro de conexao",erro);
})

conexao.once("open",()=>{
    console.log("Conexao com o banco feita com sucesso")
})
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Api livraria Node.js");
})

app.get("/livros",async(req,res)=>{
    const listalivros = await livro.find({});
    res.status(200).json(listalivros);
});
app.post("/livros",(req,res) =>{
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
})
app.get("/livros/:id",(req,res) =>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})
app.put("/livros/:id",(req,res) =>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})
app.delete("/livros/:id",(req,res) =>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
})

export default app;