export const required = value => (value ? undefined : 'Value is required');

export const minLength = value => (value.length < 4 ? 'Value must be at least 4 characters' : undefined);

export const isMail = value => (/^[a-zA-Z0-9.]+@\w+.\w+/g.test(value) ? undefined : 'Wrong mail formal');
