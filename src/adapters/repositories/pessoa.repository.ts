import { IPessoaEntity } from "../../domain/entities/pessoas/pessoa.entity"
import { IPessoaRepository } from "../../domain/repositories/pessoa.repository.interface";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import * as Sequelize from 'sequelize';
import pessoasModelsMysqlDatabase from "../../infrastructure/persistence/mysql/models/pessoas.models.mysql.database";
import bcrypt from 'bcrypt';

class PessoaRepository implements IPessoaRepository {
    private _type: string = 'IPessoa';

    constructor(
        private _database: IDatabaseModel,
        private _modelPessoas: Sequelize.ModelCtor<Sequelize.Model<any, any>>
        ){
    }

    async readById(resourceId: number): Promise<IPessoaEntity | undefined> {
        const pessoa = await this._database.read(this._modelPessoas, resourceId);
        return pessoa;
    }

    async create(resource: IPessoaEntity): Promise<IPessoaEntity> {
           
        const { nome, email, senha, tipoUsuario} = resource;

        const userExists = await email;

        if(userExists){
            throw new Error('Email existente')
        }

        const hashSenha = await bcrypt.hash(senha, 10);


        const pessoa = await this._database.create(this._modelPessoas, {
            nome, 
            email,
            senha: hashSenha,
            tipoUsuario
        });
        pessoa.idpessoa = pessoa.null;
        return pessoa;
    }

    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelPessoas, {idpessoa: resourceId});
    }

    async list(): Promise<IPessoaEntity[]> {
        return this._database.list(this._modelPessoas);
    }

    async updateById(resource: IPessoaEntity): Promise<IPessoaEntity | undefined> {
        let pessoaModel = await this._database.read(this._modelPessoas, resource.idpessoa);
        await this._database.update(pessoaModel, resource);
        return resource;
    }

    async readByUserPass(user: string, pass: string): Promise<IPessoaEntity | undefined> {
        try{
            const pessoa = await this._database.readByWhere(this._modelPessoas, { email: user, senha: pass });
            console.log(pessoa);
            console.log(pessoa);
            return this._database.readByWhere(pessoa, this._modelPessoas);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }
}

export default new PessoaRepository(
    MysqlDatabase.getInstance(),
    pessoasModelsMysqlDatabase
);