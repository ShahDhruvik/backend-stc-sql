export enum COMMON_ROUTE {
  api = '/api',
}

// export enum USER_ROUTE {
//   registerUser = '/user/register',
//   deleteUser = '/user/delete/:id',
//   inActiveUser = '/user/inactive/:id',
//   editUser = '/user/edit/:id',
//   listAllUser = '/user',
//   userDropdown = '/user/dropdown',
// }

export enum USER_RT {
  create = '/user/create',
  delete = '/user/delete/:id',
  inActive = '/user/inActive/:id',
  edit = '/user/edit/:id',
  listAll = '/user',
  dropdown = '/user/dropdown',
  getOne = '/user/getOne/:id',
}
export enum USER_DETAILS_RT {
  create = '/user-details/create',
  delete = '/user-details/delete/:id',
  inActive = '/user-details/inActive/:id',
  edit = '/user-details/edit/:id',
  listAll = '/user-details',
  dropdown = '/user-details/dropdown',
  getOne = '/user-details/getOne/:id',
}