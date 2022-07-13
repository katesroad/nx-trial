import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  getTodos() {
    return [
      {
        name: 'Wash cloth',
        priority: 1,
      },
      {
        name: 'Clean living room',
        priority: 1,
      },
    ];
  }
}
