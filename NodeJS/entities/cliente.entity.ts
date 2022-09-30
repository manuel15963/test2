import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:'PERSONA'})
export class ClienteEntity{

    @PrimaryColumn({name: 'IDPER', nullable:false})
    id: number;

    @Column({name:'NOMPER', nullable:false})
    nombre:string;

    @Column({name:'APEPER', nullable:false})
    apellido:string;

    @Column({name:'DNIPER', nullable:false})
    dni:string;

    @Column({name:'CELPER', nullable:false})
    celular:string;
    
    @Column({name:'DIRPER', nullable:false})
    direccion:string;
    
    @Column({name:'ROLPER', nullable:false})
    rol:string;

    @Column({name:'ESTPER', nullable:false})
    estado:string;

    @Column({name:'USUPER', nullable:false})
    usuario:string;

    @Column({name:'CONPER', nullable:false})
    contraseña:string;

    @Column({name:'CODUBI', nullable:false})
    ubigeo:string;
}