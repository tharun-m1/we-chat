const errorHandler = (status, messsage) => {
  const error = new Error();
  error.status = status || 500;
  error.message = messsage || "Something went wrong";
  return error;
};

module.exports = errorHandler;
