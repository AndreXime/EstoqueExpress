import Joi from "joi";

const rules = {
  register: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    password_confirmation: Joi.string().valid(Joi.ref("password")).required(),
    name: Joi.string().max(255).required(),
  }),
  search: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};

type ValidationType = keyof typeof rules;

interface InputData {
  email: string;
  password: string;
  password_confirmation?: string;
  name?: string;
}


export const validate = async (data:InputData, type:ValidationType): Promise<Boolean> => {
  try {
    await rules[type].validateAsync(data);
  } catch (error:any) {
    throw { errors: error.details };
  }
  return true;
};
