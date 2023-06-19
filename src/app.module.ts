import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from '../src/ventas/products/products.module';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [ProductsModule, ProductsModule, VentasModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
