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
        const curso = await this.curso.findOne({
            where: {
                nome: cursoDTO.nome
            }
        })
        if(curso != null){
            throw new Error('Já existe um curso cadastrado com esse nome!')
        }
        try{
        await this.curso.create(cursoDTO)
        }catch(erro){
            console.error(erro.message)
            throw erro
        }
    }
}


module.exports = CursoService