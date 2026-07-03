exports.success = (res, data = null, statusCode = 200, message = "Success") => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

exports.error = (res, message = "Something went wrong", statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};