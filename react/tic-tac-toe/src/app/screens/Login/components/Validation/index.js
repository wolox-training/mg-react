export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 8 ? 'Value must be at least 8 characters' : undefined);

export const isMail = value => (/^[a-zA-Z0-9.]+@\w+.\w+/g.test(value) ? undefined : 'Wrong mail formal');

export const validate = values => {
  const { email, password } = values;
  const errors = {};

  if (!email) {
    errors.email = required(email);
  } else if (!isMail(email)) {
    errors.email = isMail(email);
  }

  if (!password) {
    errors.password = required(password);
  }

  return { required };
};
