import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToOne,
  JoinTable,
  JoinColumn
} from "typeorm";
import { ObjectType, ID, Field } from "type-graphql";
import { Lazy } from "../helpers";
import { Skill } from "../entities/skill";
import { TElement } from "../types/element";
import { Hero } from "./hero";

@Entity()
@ObjectType()
export class Lifepower {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  healthpoints: number;

  @Field()
  @Column()
  mana: number;
}
