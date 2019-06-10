import User from '../../../entity/User';

const resolvers = {
  Mutation: {
    emailSignUp: async (
      _: null | undefined,
      { email, password, name, avatar, shortBio }
    ): Promise<{
      ok: boolean;
      error: string | null;
      token: string | null;
    }> => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: 'This email is already exists.',
            token: null
          };
        }
        await User.create({
          email,
          password,
          name,
          avatar,
          shortBio
        }).save();
        return {
          ok: true,
          error: null,
          token: 'TOKEN WILL BE HERE'
        };
      } catch (error) {
        return {
          ok: false,
          error,
          token: null
        };
      }
    },
    emailSignIn: async (
      _: null | undefined,
      { email, password }
    ): Promise<{
      ok: boolean;
      error: string | null;
      token: string | null;
    }> => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return {
            ok: false,
            error: 'No user found with that email',
            token: null
          };
        }
        const checkPassword = await user.comparePassword(password);
        if (checkPassword) {
          return {
            ok: true,
            error: null,
            token: 'TOKEN WILL BE HERE'
          };
        } else {
          return {
            ok: false,
            error: 'Wrong password',
            token: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error,
          token: null
        };
      }
    }
  }
};

export default resolvers;
