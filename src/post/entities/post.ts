import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public body: string;

  @Column()
  public userId: number;

  constructor(title: string, body: string, userId: number) {
    this.title = title;
    this.body = body;
    this.userId = userId;
  }
}
