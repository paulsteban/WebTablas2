
import { UsuarioEntity } from '../Usuario/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('paul-foto')
export class FotoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    url: string;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.fotos)

    usuario: UsuarioEntity;

}