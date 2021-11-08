import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appraisal {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	userId: number;

	@Column()
	driverAge: string;

	@Column()
	purchasePrice: string;

	@Column()
	car: string;

	@Column()
	plan: string
}
