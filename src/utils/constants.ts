export enum MODEL_NAMES {
  User = 'Users',
  UserDetails = 'UserDetails',
  Department = 'Departments',
  Designation = 'Designations',
}
export enum USER_TYPES {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
export const LIMIT_PER_PAGE = 25;
export const sanitizedFileName = (name: string) => {
  return name
    .replace(/[^\w\s.-]+/g, '_')
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .trim();
};
export const practiceUserTypeHeader = 'practice-user-type';
export const practiceIdHeader = 'practice-id';
