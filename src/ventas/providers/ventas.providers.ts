import { DataSourceEnum, RepositoryEnum } from "src/shared/enums";
import { CategoryEntity } from "../entities/category.entity";
import { ProductEntity } from "../entities/product.entity";
import {DataSource} from "typeorm"

export const ventasProviders = [
    {
        provide:RepositoryEnum.PRODUCT_REPOSITORY,
        useFactory: (dataSource: DataSource) =>
        DataSource.getRepository(ProductEntity),
        inject:[DataSourceEnum, PG_DATA_SOURCE],
    },
    {
        provide:RepositoryEnum.CATEGORY_REPOSITORY,
        useFactory: (dataSource: DataSource) =>
        DataSource.getRepository(CategoryEntity),
        inject:[DataSourceEnum, PG_DATA_SOURCE],
    }
]