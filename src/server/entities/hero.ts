import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToOne,
  JoinColumn,
  JoinTable
} from "typeorm";
import { ObjectType, ID, Field } from "type-graphql";
import { Lazy } from "../helpers";
import { Skill } from "../entities/skill";
import { TElement } from "../types/element";
import { Lifepower } from "../entities/lifepower";
import { Attributes } from "../entities/attribute";

@Entity()
@ObjectType()
export class Hero {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  imgUrl: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  backStory: string;

  @Field(type => [Skill])
  @ManyToMany(type => Skill, { lazy: true, cascade: ["insert"] })
  @JoinTable()
  skills: Lazy<Skill[]>;

  /**
   * This section consists of hero attributes.
   * It is your job to normalize this data into attribute entity (table) and create relationship between hero and his attributes.
   * You can decide how you create the relationship.
   * After this is done, you can insert that data into database with seedDatabase function in /server/helpers.ts and rebooting app.
   */

  /* </attributes>*/
  @Field()
  @OneToOne(type => Attributes, { lazy: true, cascade: ["insert"] })
  @JoinColumn()
  attributes: Attributes;

  @Field()
  @Column()
  resistance: TElement;

  @Field()
  @Column()
  weakness: TElement;

  @Field()
  @OneToOne(type => Lifepower, { lazy: true, cascade: ["insert"] })
  @JoinColumn()
  lifepower: Lifepower;
}
