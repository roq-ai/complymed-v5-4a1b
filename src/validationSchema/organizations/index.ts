import * as yup from 'yup';

export const organizationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().nullable(),
  client_id: yup.string().nullable().required(),
});
