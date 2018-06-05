import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PalabraclaveEntity {
  @PrimaryGeneratedColumn()
  idPalabraClave: number;
  @Column()
  texto: string;
}