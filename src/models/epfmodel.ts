// import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// @Entity()
// export class Epf {
//   @PrimaryGeneratedColumn()
//   id!: number;

//   @Column()
//   name!: string;

//   @Column({ nullable: true })
//   aadharCardName!: string;

//   @Column({ nullable: true })
//   uanNumber!: string;

//   @Column({ nullable: true })
//   aadharNumber!: string;

//   @Column({ nullable: true })
//   dob!: string;

//   @Column({ nullable: true })
//   aadharMobile!: string;

//   @Column({ nullable: true })
//   uanPassword!: string;

//   @Column({ nullable: true })
//   workStatus!: string;

//   @Column({ nullable: true })
//   updatedStatus!: string; // 👈 new field added

//   @Column({ nullable: true })
//   bankAccountNumber!: string;

//   @Column({ nullable: true })
//   ifscCode!: string;

//   @Column({ nullable: true })
//   commissionAmount!: number;

//   @Column({ nullable: true })
//   paidAmount!: number;

//   @Column()
//   createDate!: string;

//   @Column({ nullable: true })
//   updateDate!: string;

//   @Column({ nullable: true })
//   confirmDate!: string;

//   @Column()
//   password!: string;
// }

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Epf {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  uanNumber!: string;

  @Column({ nullable: true })
  uanPassword!: string;

  @Column({ nullable: true })
  aadharNumber!: string;

  @Column({ nullable: true })
  aadharCardName!: string;

  @Column({ nullable: true })
  dob!: string;

  @Column({ nullable: true })
  aadharMobile!: string;

  @Column({ nullable: true })
  bankAccountNumber!: string;

  @Column({ nullable: true })
  ifscCode!: string;

  @Column({ nullable: true })
  commissionAmount!: number;

  @Column({ nullable: true })
  paidAmount!: number;

  @Column({ nullable: true })
  workStatus!: string;

  @Column({ nullable: true })
  password!: string;

  @Column({ nullable: true })
  createDate!: string;

  @Column({ nullable: true })
  updatedDate!: string;

@Column({ type: "varchar", nullable: true })
confirmDate!: string | null;
  @Column({ nullable: true })
  updatedStatus!: string;

  @Column({
    type: "enum",
    enum: ["pending", "confirmed", "rejected"],
    default: "pending",
  })
  status!: "pending" | "confirmed" | "rejected";
}
