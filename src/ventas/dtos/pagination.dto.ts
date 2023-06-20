import { IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class PaginationDto {
  static getOffset(limit: number, page: number) {
    throw new Error('Method not implemented.');
  }
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  page: number;

  @IsOptional()
  @IsString()
  search: string;

 
}