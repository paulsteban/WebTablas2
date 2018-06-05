import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ArticuloEntity } from '../articulo/articulo.entity';
import { UsuarioEntity } from '../Usuario/usuario.entity';

@Entity()
export class RepositorioEntity {
  @PrimaryGeneratedColumn()
  idRepositorio: number;
  @Column()
  fecha: string;
  @ManyToOne(type => UsuarioEntity,
    usuario => usuario.usuarios)
  usuario: UsuarioEntity;
}