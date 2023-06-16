import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('categories', { schema: 'ventas' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  deleteAt: Date;

  @Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'nombre de la categoria',
  })
  name: string;
  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'descripcion del categoria',
  })
  category: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
