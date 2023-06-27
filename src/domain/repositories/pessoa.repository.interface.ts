import { IPessoaEntity } from '../entities/pessoas/pessoa.entity';

export interface IPessoaRepository {
    readById(resourceId: number): Promise<IPessoaEntity | undefined>,
    create(resource: IPessoaEntity): Promise<IPessoaEntity>,
    readByUserPass(user: string, pass: string): Promise<IPessoaEntity | undefined>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<IPessoaEntity[]>,
    updateById(resource: IPessoaEntity): Promise<IPessoaEntity | undefined>
}