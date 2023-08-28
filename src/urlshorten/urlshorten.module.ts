import { Module } from '@nestjs/common';
import { UrlShortenController } from './urlshorten.controller';
import { UrlShortenService } from './urlshorten.service';

@Module({
  controllers: [UrlShortenController],
  providers: [UrlShortenService],
})
export class UrlShortenModule {}
