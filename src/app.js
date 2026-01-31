import express from "express";
import conectaDataBase from "./config/dbConnect.js";
const conexao = await conectaDataBase();

conexao.on("error",(erro)=>{
    console.error("Erro de conexao",erro);
})

conexao.once("open",()=>{
    console.log("Conexao com o banco feita com sucesso")
})
const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo:"Harry potter a pedra filosofal"
    },
    {
        id: 2,
        titulo:"Mente milionaria"
    }
]
function buscaLivro(id){
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    })
}
app.get("/",(req,res)=>{
    res.status(200).send("Api livraria Node.js");
})

app.get("/livros",(req,res)=>{
    res.status(200).json(livros);
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