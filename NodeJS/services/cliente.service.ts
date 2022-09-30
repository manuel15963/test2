import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClienteEntity } from "src/entities/cliente.entity";
import { Repository } from "typeorm";





@Injectable()
export class ClienteService{

    constructor(@InjectRepository(ClienteEntity) private clienterepository: Repository<ClienteEntity>){

    }

    registrar(cliente:ClienteEntity){

        return this.clienterepository.save(cliente);
    }

    actualizar(cliente:ClienteEntity){
        return this.clienterepository.save(cliente);
    
    }

    findall(){
        return this.clienterepository.find();
    }

    eliminar(id: number){
        return this.clienterepository.delete(id);

    }

    finId(id: number){
        return this.clienterepository.findBy({id});
    }

    buscarcli(rol: string){
        return this.clienterepository.findBy({rol})
    }


}