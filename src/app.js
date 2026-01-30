import express from "express";

const app = express();

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
app.get("/",(req,res)=>{
    res.status(200).send("Api livraria Node.js");
})

app.get("/livros",(req,res)=>{
    res.status(200).json(livros);
});

export default app;