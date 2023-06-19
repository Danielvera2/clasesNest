import { Global, Module } from '@nestjs/common';
//import { DataBaseModule } from "@database";
import { ventasProviders } from '@ventas/providers';
import { ProductService } from './services/product.service';
@Global()
@Module({
    imports: [DataBaseModule],
    controllers: [],
    providers: [...ventasProviders, ProductService],
    exports: [],
})
export class VentasModule {}
