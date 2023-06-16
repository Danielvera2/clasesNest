import { IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "../pagination.dto";

export class FilterCategoryDto extends PaginationDto {
  @IsOptional()
  @IsString(isStringValidationOption())
  readonly title: string;

}