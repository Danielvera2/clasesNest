import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Carlos Vera';
  }
  /*getProducts(): string[] {
    return ['guitarra', 'instrumento de cuerdas'];
  }*/
}
