import { compare, hash } from 'bcrypt';
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

const BCRYPT_ROUNDS = 100;

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  shortBio: string | null;

  @Column({ type: 'varchar', length: 500, nullable: true })
  avatar: string | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @Column({ type: 'varchar' })
  googleId: string | null;

  @Column({ type: 'varchar' })
  facebookId: string | null;

  @BeforeInsert()
  @BeforeUpdate()
  savePassword = async (): Promise<void> => {
    if (this.password) {
      const hashedPassword = await this.hashPassword(this.password);
      this.password = hashedPassword;
    }
  };

  hashPassword = async (password: string): Promise<string> => {
    return hash(password, BCRYPT_ROUNDS);
  };

  comparePassword = async (password: string): Promise<boolean> => {
    return compare(password, this.password);
  };
}

export default User;
