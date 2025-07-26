class ApiError extends Error {
  constructor(
    statusCode = 500,
    message = "Internal server error.",
    errors = []
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.timestamp = new Date().toISOString();
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
