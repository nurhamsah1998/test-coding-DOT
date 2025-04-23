// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ColorVariant: {
  default: "default";
  error: "error";
  success: "success";
  info: "info";
};
export type BGVariant = (typeof ColorVariant)[keyof typeof ColorVariant];
