import { IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "../pagination.dto";
import { isStringValidationOptions } from "@shared/validations";

export class FilterProductDto extends PaginationDto {
  @IsOptional()
  @IsString(isStringValidationOptions())
  readonly title: string;


}