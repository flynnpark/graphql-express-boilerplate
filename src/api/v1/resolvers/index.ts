import { IResolvers } from 'graphql-tools';
import userResolvers from './user';

const resolvers: IResolvers = { ...userResolvers };

export default resolvers;
