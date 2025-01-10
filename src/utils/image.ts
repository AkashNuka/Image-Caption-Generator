export const generateImageId = (): string => {
  return Math.random().toString(36).substring(7);
};

export const createObjectUrl = (file: File): string => {
  return URL.createObjectURL(file);
};

export const simulateAiCaption = async (): Promise<string> => {
  // Simulate AI processing time
  await new Promise(resolve => setTimeout(resolve, 1500));
  return "A captivating moment frozen in time, telling a unique story through visual poetry.";
};