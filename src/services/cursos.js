class CursoService {
    constructor(CursoModel) {
        this.curso = CursoModel
    }

    async get() {
        const cursos = await this.curso.findAll()
        return cursos
    }

    async adicionar(cursoDTO) {
        // verifique se já existe curso com o mesmo nome
        try{
        await this.curso.create(cursoDTO)
        }catch(erro){
            console.erro(erro.message)
            throw erro
        }
    }
}


module.exports = CursoService