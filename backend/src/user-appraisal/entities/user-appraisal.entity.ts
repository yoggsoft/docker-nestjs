import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserAppraisal {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	userId: number;

	@Column()
	appraisalId: number;
}
