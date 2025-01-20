import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userData: { email: string; password: string }) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const user = new this.userModel({
        ...userData,
        password: hashedPassword,
      });
      return await user.save();
    } catch (error) {
      if (error.code === 11000) {
        const duplicateField = Object.keys(error.keyValue)[0]; 
        const duplicateValue = error.keyValue[duplicateField];
        throw new BadRequestException(
          `The ${duplicateField} '${duplicateValue}' is already in use.`,
        );
      }
      throw new BadRequestException({
        message: 'Failed to create user',
        error: error.message,
      });
    }
  }

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userModel.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        return user;
      }
      return null;
    } catch (error) {
      throw new InternalServerErrorException({
        message: 'Failed to validate user',
        error: error.message,
      });
    }
  }
}
