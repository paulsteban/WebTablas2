import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ArticuloEntity } from '../articulo/articulo.entity';
import { AutorEntity } from '../autor/autor.entity';

@Entity()
export class ArticuloAutorEntity {
  @PrimaryGeneratedColumn()
  idRelacionAutor: number;
  @Column()
  autor: string;
  @ManyToOne(type => ArticuloEntity,
    articulo => articulo.articulos)
  articulo: ArticuloEntity;
 /* @ManyToOne(type => ArticuloEntity, autor => autor.)
  autor: ArticuloEntity;*/
}