import ApiResponse from "../utils/ApiResponse.js";

const healthController = (req, res) => {
  res.status(200).json(new ApiResponse(200, "App is healthy."));
};

export default healthController;
