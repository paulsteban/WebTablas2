import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticuloAutorEntity } from '../articulo-autor/articulo-autor.entity';
import { FotoEntity } from '../Foto/foto.entity';

@Entity('articulo')
export class ArticuloEntity {
  @PrimaryGeneratedColumn()
  idArticulo: number;
  @Column()
  titulo: string;
  @Column()
  codigo: string;
  @Column()
  paginas: string;
  @Column()
  abstract: string;
  @Column()
  anio: string;
  @OneToMany(type => ArticuloAutorEntity, articuloautor => articuloautor.articulo)
  articulos: ArticuloAutorEntity[];

}