//Carlos Vera
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RepositoryEnum } from 'src/shared/enums';
import { Repository, FindOptionsWhere } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { CreateProductDto } from '../products/dto/create-product.dto';
import { plainToInstance } from 'class-transformer';
import { ReadProductDto } from '../dtos/products/read-product.dto';
import { FilterProductDto } from '../dtos/products/filter-product.dto';
import { PaginationDto } from '../dtos/pagination.dto';
import { UpdateProductDto } from '../products/dto/update-product.dto';


@Injectable()
export class ProductService {
  constructor(
    @Inject(RepositoryEnum.PRODUCT_REPOSITORY)
    private repository: Repository<ProductEntity>,
  ) {}
  async create(payload: CreateProductDto): Promise<ServiceResponseHttpModel> {
    const newProduct = this.repository.create(payload);
    const productCreated = await this.repository.save(newProduct);
    return {
      data: plainToInstance(ReadProductDto, productCreated),
    };
  }
  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.repository.findAndCount({ take: 100 });
    return {
      data: response[0],
      pagination: { totalItems: response(), limit: 10 },
    };
  }
  async findAll(params?: FilterProductDto): Promise<ServiceResponseHttpModel> {
    if (params?.limit > 0 && ParamsTokenFactory.page >= 0) {
      return this.paginationAndFilter(params);
    }
    const response = await this.repository.findAndCount({
      order: { updateAt: 'DESC' },
    });
    return {
      data: plainToInstance(ReadProductDto, response[0]),
      pagination: { totalItems: response[1], limit: 10 },
    };
  }

  async findOne(id: string): Promise<ServiceResponseHttpModel> {
    const response = await this.repository.findOneBy({ id });

    if (!response) {
      throw new NotFoundException('requerimiento no encontrado');
    }
    return {
      data: plainToInstance(ReadProductDto, response),
    };
  }
  //! Metodo update
  //! se los puede hacer genericos para usar en los demas servicios de la aplicacion con el nombre response
  //! si se quiere distinguir se debe llamarlo dependiendo del servicio ejemplo product
  async update(id: string, payload: UpdateProductDto) {
    const product = await this.repository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    this.repository.merge(product, payload);

    return this.repository.save(product);
  }
  //! metodo para eliminar el id
  async remove(id: string) {
    const product = await this.repository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('product no encontrado');
    }

    return await this.repository.softRemove(product);
  }

  //!Metodo para renover todo el objeto
  async removeAll(payload: ProductEntity[]) {
    return this.repository.softRemove(payload);
  }

  //! Metodo Pagination and filter
  private async paginationAndFilter(
    params: FilterProductDto,
  ): Promise<ServiceResponseHttpModel> {
    let where:
      | FindOptionsWhere<ProductEntity>
      | FindOptionsWhere<ProductEntity>[];
    where = {};
    let { page, search } = params;
    const { limit } = params;
    if (search) {
      search = search.trim();
      page = 0;
      where = [];
    }
    const data = this.repository.findAndCount({
      relations: ['bloodType', 'gender'],
      where,
      take: limit,
      skip: PaginationDto.getOffset(limit, page),
    });
    return { pagination: { limit, totalItems: data[1] }, data: data[0] };
  }
}
