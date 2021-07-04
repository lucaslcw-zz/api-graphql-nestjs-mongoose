import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty({ message: 'O campo de nome não pode estar vazio.' })
  @IsString()
  @Field()
  name: string;

  @IsNotEmpty({ message: 'O campo de email não pode estar vazio.' })
  @IsString()
  @Field()
  email: string;

  @Min(10)
  @Max(100)
  @IsInt()
  @Field()
  age: number;
}