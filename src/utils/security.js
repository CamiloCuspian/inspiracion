export const sanitizeMessage = (message) => {
  return message
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .trim();
};