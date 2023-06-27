import { IPessoaEntity } from "../../entities/pessoas/pessoa.entity";
import { IPessoaRepository } from "../../repositories/pessoa.repository.interface";
import pessoaRepository from "../../../adapters/repositories/pessoa.repository";
import { IUseCase } from "../usecase.interface";
import jwt, {Secret, JwtPayload} from 'jsonwebtoken'


class LoginAuthUseCase implements IUseCase {
    
    constructor(private _repository: IPessoaRepository){}
    
    async execute(data: {email: string, senha: string}): Promise<{pessoa: IPessoaEntity | any, token: string} | any>{
        
        const pessoa = await this._repository.readByUserPass(data.email, data.senha);

       if(pessoa){
        const token = jwt.sign(pessoa, String(process.env.SECRET_KEY),{
            expiresIn: '2 days'
        });

        return {
            pessoa: pessoa,
            token: token
        }
       }

       return

    }
}

export default new LoginAuthUseCase(pessoaRepository)



