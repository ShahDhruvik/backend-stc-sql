export enum COMMON_MESSAGE {
  Success = 'Success Message',
  Error = 'Error',
  Server_Error = 'Server Error!',
  Warn = 'Fill out data',
  Not_found = 'Data not found.',
  Schema_Validation_Fail = 'Schema Validation failed',
  Wrong_pass = "Password doesn't match.",
  User_not_exist = 'User does not exist.',
  Email_sent_success = 'Email sent successfully.',
  Token_not_valid = 'Token is not valid.',
  Unauthorized = 'Unauthorized.',
  Mongoose_id_validation = 'Provide a valid object id.',
  Message_getMsgForUniqueName = 'already exist.',
  InActiveChildRecord = 'Please inactive child records for this record first.',
  ActiveChildRecord = 'Please active parent record for this record first.',
  DeleteChildRecord = 'Please delete child records for this record first.',
  TermsAndConditionExist = 'Terms and condition already exist in same country.',
  CompliancesExist = 'Compliance already exist in same country.',
  fileUploadFailed = 'File upload failed.',
  MarketingReferenceExist = 'Marketing references already exist.',
  AccessDenied = 'Access denied.',
  ProvidePracticeId = 'Provide practice id in header, practice-id.',
  NonEmptyMessage = 'This field cannot be empty',
  ValidEmail = 'Provide a valid email.',
  UseDifferentEmail = 'Use a different email, Email already exists .',
  Created = 'Created',
  Updated = "Updated",
  NotUpdated = 'User not found or not updated.'
}
export enum MODEL_VALIDATION_MESSAGE {
  Email = 'Invalid Email'
}

export enum STATUS_CODES {
  SC401 = 401,
  SC500 = 500,
  SC400 = 400,
}
export enum RESPONSE_MESSAGE_CODES {
  Unauthorized = "Unauthorized",
  UnknownError = "Unknown Error",
  AsyncMiddlewareError = "':: Async Middleware Error :: '",
}