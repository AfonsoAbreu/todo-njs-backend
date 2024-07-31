import { IsNotEmpty, IsString, ValidateIf } from "class-validator";

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ValidateIf(o => !o.description || o.title)
  title: string;
  
  @IsString()
  @IsNotEmpty()
  @ValidateIf(o => !o.title || o.description)
  description: string;
}