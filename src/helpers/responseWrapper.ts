import { STATUS_CODES } from "../utils/messages.enum";

export default function responseWrapper(
  success: boolean,
  message: string,
  status?: number,
  data?: any,
  error?: any,
) {
  return {
    success,
    message,
    status: status ?? STATUS_CODES.SC500,
    data: data ?? null,
    error: error ?? null,
  };
}
