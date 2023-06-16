import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('products', { schema: 'ventas' })
export class ProductEntity {
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
    name: 'title',
    comment: 'nombre del producto',
    nullable: false,
  })
  title: string;
  @Column('number', {
    name: 'price',
    nullable: false,
    comment: 'precio del producto',
  })
  price: number;
  @Column('varchar', {
    name: 'description',
    nullable: false,
    comment: 'descripcion del producto',
  })
  description: string;
  @Column('varchar', {
    name: 'image',
    nullable: false,
    comment: 'imagen del producto',
  })
  image: string;
  @Column('number', {
    name: 'category',
    nullable: false,
    comment: 'categoria a la que pertenece el producto',
  })
  //se comenta por la relacion el atributo category: CategoryEntity;
  //el atributo cambia a la relacuion que vaya a tener si se repite el campo que debe tener
  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;

  /*
 @BeforeInsert()
 @BeforeUpdate()

 if(!this.mail){
 return;
 }
 this.mail = this.mail.toLoweCase().trim()

 @BeforeInsert()
 @BeforeUpdate()

 async hashPassword(){
 if(!this.password)
 return;
 }
 this.password = await Bycript.has(this.password, 16)
 */
}
