import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req,res){
        try{
            const listalivros = await livro.find({});
            res.status(200).json(listalivros);
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao encontrar livros`})
        }
        
    };

    static async listarLivrosPorId(req,res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao encontrar livro`})
        }
        
    };

    static async atualizarLivro(req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"Livro editado com sucesso"});
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao encontrar livro`})
        }
        
    };
    static async excluirLivro(req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message:"Livro excluido da biblioteca com sucesso"});
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao excluir livro`})
        }
        
    };

    static async cadastrarLivro(req,res){
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message:"Livro criado com sucesso",livro: novoLivro });
        }catch(erro){
            res.status(500).json({message:`${erro.message}, falha ao cadastrar livro`});
            
        }
    };
};

export default LivroController;