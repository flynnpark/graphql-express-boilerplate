import User from '../../../../entity/User';
import { createJWT } from '../../../../utils/jwt';

const resolver = {
  Mutation: {
    EmailSignUp: async (
      _: null | undefined,
      args: {
        email: string;
        password: string;
        name: string;
        shortBio?: string;
        avatar?: string;
      }
    ): Promise<{
      ok: boolean;
      error: string | null;
      token: string | null;
    }> => {
      try {
        const { email } = args;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: 'This email is already exists.',
            token: null
          };
        }
        const newUser = await User.create({ ...args }).save();
        const token = createJWT(newUser.id);
        return {
          ok: true,
          error: null,
          token
        };
      } catch (error) {
        console.error(error);
        return {
          ok: false,
          error,
          token: null
        };
      }
    }
  }
};

export default resolver;
