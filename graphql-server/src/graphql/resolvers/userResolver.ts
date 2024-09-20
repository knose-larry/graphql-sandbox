import { IResolvers } from 'apollo-server-express';
import { User } from '../../database/models/userModel';
import { getRepository } from 'typeorm';

export const userResolvers: IResolvers = {
  Query: {
    users: async () => {
      const userRepo = getRepository(User);
      return userRepo.find({ relations: ['posts'] });
    },
    user: async (_: any, { id }: { id: number }) => {
      const userRepo = getRepository(User);
      return userRepo.findOne(id, { relations: ['posts'] });
    },
  },
  Mutation: {
    createUser: async (_: any, { username, email }: { username: string, email: string }) => {
      const userRepo = getRepository(User);
      const newUser = userRepo.create({ username, email });
      return userRepo.save(newUser);
    },
  },
};