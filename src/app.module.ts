import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from '../src/ventas/products/products.module';

@Module({
  imports: [ProductsModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
