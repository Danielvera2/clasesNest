import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, isString } from "class-validator";

export class BaseCategoryDto {
  @IsString( isStringValidationOption() )
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