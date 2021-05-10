class EstudanteService {
    constructor(EstudanteModel) {
        this.estudante = EstudanteModel
    }

    async get() {
        const estudantes = await this.estudante.findAll()
        return estudantes
    }

    async adicionar(estudanteDTO) {
        // verifique se já existe o estudante com o mesmo nome
        const estudante = await this.estudante.findOne({
            where: {
                email: estudanteDTO.email
            }
        })
        if(estudante != null){
            throw new Error('Já existe um estudante cadastrado com esse email!')
        }
        try{
        await this.estudante.create(estudanteDTO)
        }catch(erro){
            console.error(erro.message)
            throw erro
        }
    }
}


module.exports = EstudanteService