import { userSignUp as userSignUpMutation } from './user/userSignUp';
import { userSignIn as userSignInMutation } from './user/userSignIn';

const resolvers = {
  Mutation: {
    emailSignUp: userSignUpMutation,
    emailSignIn: userSignInMutation
  }
};

export default resolvers;
