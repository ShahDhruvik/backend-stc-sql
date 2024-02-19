export enum COMMON_ROUTE {
  api = '/api',
}

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
