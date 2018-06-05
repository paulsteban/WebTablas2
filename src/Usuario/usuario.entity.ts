import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FotoEntity } from '../Foto/foto.entity';
import { RepositorioEntity } from '../repositorio/repositorio.entity';
@Entity('paul')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    nombre: string;

    @Column({length: 500})
    apellido: string;

    @Column('int')
    edad: number;

    @OneToMany(
        type => RepositorioEntity,
        repositorio => repositorio.usuario)

    usuarios: RepositorioEntity[];
}