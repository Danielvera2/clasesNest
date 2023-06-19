import { Inject, Injectable } from '@nestjs/common';
import { RepositoryEnum } from 'src/shared/enums';
import {Repository} from 'typeorm'
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductService {
    constructor (@Inject(RepositoryEnum.PRODUCT_REPOSITORY)
    private repository:Repository<ProductEntity>){

    }
}
