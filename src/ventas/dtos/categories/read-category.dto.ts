import { BaseCategoryDto } from './base-category.dto';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadCategory extends BaseCategoryDto {
  @Expose()
  readonly name;

}
