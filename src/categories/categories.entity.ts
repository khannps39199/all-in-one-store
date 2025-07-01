// category.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Catalog } from '../catalogs/catalog.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false }) // 👈 Make sure this matches the database
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Catalog, (catalog) => catalog.categories)
  @JoinColumn({ name: 'catalog_id' }) // 👈 match Java and SQL column name
  catalog: Catalog;
}
