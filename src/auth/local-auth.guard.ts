import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// specify that we are using local strategy of nestjs
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
