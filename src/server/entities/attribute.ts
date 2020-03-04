import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";
import { ObjectType, ID, Field } from "type-graphql";
import { Lazy } from "../helpers";
import { Skill } from "../entities/skill";
import { TElement } from "../types/element";

@Entity()
@ObjectType()
export class Attributes {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number;
  /**
   * This section consists of hero attributes.
   * It is your job to normalize this data into attribute entity (table) and create relationship between hero and his attributes.
   * You can decide how you create the relationship.
   * After this is done, you can insert that data into database with seedDatabase function in /server/helpers.ts and rebooting app.
   */

  @Field()
  @Column()
  strength: number;

  @Field()
  @Column()
  intelligence: number;

  @Field()
  @Column()
  stamina: number;

  @Field()
  @Column()
  agility: number;

  @Field()
  @Column()
  speed: number;
}
