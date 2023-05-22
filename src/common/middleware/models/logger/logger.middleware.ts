import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('----------------------------------');
    console.log(
      `${new Date().toLocaleString()} => New message to ${req.body?.to}`,
    );
    next();
  }
}
