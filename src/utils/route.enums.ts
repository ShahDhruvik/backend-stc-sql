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
  create = '/userDetails/create',
  delete = '/userDetails/delete/:id',
  inActive = '/userDetails/inActive/:id',
  edit = '/userDetails/edit/:id',
  listAll = '/userDetails',
  dropdown = '/userDetails/dropdown',
  getOne = '/userDetails/getOne/:id',
}

export enum DEPARTMENT_RT {
  create = '/department/create',
  delete = '/department/delete/:id',
  inActive = '/department/inActive/:id',
  edit = '/department/edit/:id',
  listAll = '/department',
  dropdown = '/department/dropdown',
  getOne = '/department/getOne/:id',
}

export enum DESIGNATION_RT {
  create = '/designation/create',
  delete = '/designation/delete/:id',
  inActive = '/designation/inActive/:id',
  edit = '/designation/edit/:id',
  listAll = '/designation',
  dropdown = '/designation/dropdown',
  getOne = '/designation/getOne/:id',
}
