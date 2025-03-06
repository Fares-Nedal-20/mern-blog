// this is for costum errors
export const errorHandler = (statusCode, messege) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.messege = messege;
  return error;
};
