import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  name: yup.string().required(),
  franchise_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
