import { Injectable } from '@nestjs/common';
import { ShortenUrlDto } from './shorten-url.dto';

@Injectable()
export class UrlShortenService {
  private readonly urlMap = new Map<string, string>();

  async shortenUrl(shortenUrlDto: ShortenUrlDto): Promise<string> {
    const { longUrl } = shortenUrlDto;
    const nanoid = await import('nanoid');
    const shortCode = nanoid.nanoid(6); // Generate a unique short code
    this.urlMap.set(shortCode, longUrl); // Store the mapping

    return shortCode;
  }

  getLongUrl(shortCode: string): string | undefined {
    return this.urlMap.get(shortCode);
  }
}
