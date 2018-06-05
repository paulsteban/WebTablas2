import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReferenciaEntity {
  @PrimaryGeneratedColumn()
  idReferencia: number;
  @Column()
  titulo: string;
  @Column()
  codigo: string;
  @Column()
  fecha: string;
}