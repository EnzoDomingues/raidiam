import type { AxiosError } from "axios";

export class HttpError extends Error {
  /**
   * Http Status Code
   */
  code: number;

  /**
   * URL
   */
  url: string;

  /**
   * Construction
   * @param {string} message Error Message
   * @param {number} status HTTP Status Code
   */
  constructor(message: string, code: number, url: string, stack?: string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, HttpError.prototype);

    this.code = code;
    this.name = "HttpError";
    this.url = url;
    if (stack) {
      this.stack = stack;
    }
  }

  /**
   * Convert an Error From axios
   * @param error Axios Error
   * @returns
   */
  static fromAxiosError(error: AxiosError) {
    const errorMessage = error.message;
    const errorCode = error.response ? error.response.status : 500;
    const errorUrl = error.response ? error.request.responseURL : "";
    const errorStack = error.stack;
    return new HttpError(errorMessage, errorCode, errorUrl, errorStack);
  }
}
