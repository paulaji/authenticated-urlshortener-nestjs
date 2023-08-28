import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UrlShortenService } from './urlshorten.service';
import { ShortenUrlDto } from './shorten-url.dto';

@Controller('urlshorten')
export class UrlShortenController {
  constructor(private readonly urlShortenService: UrlShortenService) {}

  @Post('shorten')
  shortenUrl(@Body() shortenUrlDto: ShortenUrlDto): string {
    const shortCode = this.urlShortenService.shortenUrl(shortenUrlDto);
    return `${
      process.env.BASE_URL || 'http://localhost:3000'
    }/urlshorten/${shortCode}`;
  }

  @Get(':shortCode')
  redirectToLongUrl(@Param('shortCode') shortCode: string): string {
    const longUrl = this.urlShortenService.getLongUrl(shortCode);
    if (longUrl) {
      return longUrl;
    }
    throw new NotFoundException('Short URL not found'); // Throw a NotFoundException with an error message
  }
}
