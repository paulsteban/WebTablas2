import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticuloReferenciaEntity {
  @PrimaryGeneratedColumn()
  idRelacionReferenciaa: number;
  @Column()
  fecha: string;

}