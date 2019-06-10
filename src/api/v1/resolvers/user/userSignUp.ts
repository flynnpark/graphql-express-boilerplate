import User from '../../../../entity/User';

export const userSignUp = async (
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
};
