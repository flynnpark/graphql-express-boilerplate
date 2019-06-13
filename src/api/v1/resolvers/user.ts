import { IResolvers } from 'graphql-tools';
import { userSignIn as userSignInMutation } from './user/userSignIn';
import { userSignUp as userSignUpMutation } from './user/userSignUp';

const resolvers: IResolvers = {
  Mutation: {
    emailSignUp: userSignUpMutation,
    emailSignIn: userSignInMutation
  }
};

export default resolvers;
