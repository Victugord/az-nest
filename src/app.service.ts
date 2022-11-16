import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWorld(): string {
    return "az function world is amazing"
  }
  getHello(): string {
    return 'Hello World!';
  }
}
