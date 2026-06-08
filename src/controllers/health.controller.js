import ApiResponse from '../utils/api-response.js';

export const checkHealth = (req, res) => {
  return res.status(200).json(
    new ApiResponse(200, 'EventTicket Backend is healthy', {
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    }),
  );
};