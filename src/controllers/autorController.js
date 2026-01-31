import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req,res){
        try{
            const listaautors = await autor.find({});
            res.status(200).json(listaautors);
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao encontrar autores`})
        }
        
    };

    static async listarAutoresPorId(req,res){
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao encontrar autor`})
        }
        
    };

    static async atualizarAutor(req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"autor editado com sucesso"});
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao encontrar autor`})
        }
        
    };
    static async excluirAutor(req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message:"autor excluido da biblioteca com sucesso"});
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao excluir autor`})
        }
        
    };

    static async cadastrarAutor(req,res){
        try{
            const novoautor = await autor.create(req.body);
            res.status(201).json({message:"autor criado com sucesso",autor: novoautor });
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao cadastrar autor`});
            
        }
    };
};

export default AutorController;