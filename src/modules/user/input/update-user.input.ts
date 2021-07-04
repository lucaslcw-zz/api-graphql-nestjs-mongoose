import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsNotEmpty({ message: 'O campo de nome não pode estar vazio.' })
  @IsString()
  @IsOptional()
  @Field()
  name?: string;

  @IsNotEmpty({ message: 'O campo de email não pode estar vazio.' })
  @IsString()
  @IsOptional()
  @Field()
  email?: string;

  @Min(10)
  @Max(100)
  @IsInt()
  @IsOptional()
  @Field()
  age?: number;
}