const asyncHandler = (responseHandler) => (req, res, next) => {
  Promise.resolve(responseHandler(req, res)).catch(next);
};

export default asyncHandler;
