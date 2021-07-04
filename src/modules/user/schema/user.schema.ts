import { Field, ObjectType, ID } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

@ObjectType()
export class User extends Document {
  @Field(() => ID)
  _id?: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;
}
