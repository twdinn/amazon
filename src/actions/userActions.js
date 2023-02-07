import { USER_REGISTER } from "../constants/userConstants";

export const userRegister = (user) => {
  return {
    type: USER_REGISTER,
    payload: {
      name: user.name,
      street: user.street,
      city: user.city,
      prov: user.prov,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
    },
  };
};
