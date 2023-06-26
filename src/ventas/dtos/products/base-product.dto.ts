import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { isStringValidationOptions } from "@shared/validations";

export class BaseProductDto {
  @IsString( isStringValidationOptions() )
  @IsNotEmpty()
  readonly title: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly image:string;

}