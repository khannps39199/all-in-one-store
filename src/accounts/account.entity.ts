import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column({ name: 'avatar_url', nullable: true })
  avatarUrl: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ name: 'average_order_value', type: 'float', default: 0 })
  averageOrderValue: number;

  @Column({ name: 'user_rank', default: 'New' })
  userRank: string;

  @Column({ name: 'total_spent', type: 'float', default: 0 })
  totalSpent: number;

  @Column({ name: 'total_order', default: 0 })
  totalOrder: number;

  @Column({ name: 'loyalty_point', default: 0 })
  loyaltyPoint: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
