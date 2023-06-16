/* eslint-disable prettier/prettier*/
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get()
  getProducts() {
    return ['Toyota','Mercedes', 'Suzuki']
  }
}
