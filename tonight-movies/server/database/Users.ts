import {Entity,PrimaryGeneratedColumn,Column,BaseEntity} from "typeorm"
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    email: string; 
    @Column()
    password: string;
    @Column()
    idmovie: number;
}