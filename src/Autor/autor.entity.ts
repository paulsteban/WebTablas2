import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticuloAutorEntity } from '../articulo-autor/articulo-autor.entity';

@Entity()
export class AutorEntity {
  @PrimaryGeneratedColumn()
  idAutor: number;
  @Column()
  nombre: string;
  @Column()
  apellido: string;
  @OneToMany(type => ArticuloAutorEntity, articuloautor => articuloautor.autor)
  autores: ArticuloAutorEntity[];
}