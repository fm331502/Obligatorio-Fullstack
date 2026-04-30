export const isHandledError = (error) => {
  return error instanceof AuthError || error instanceof ConflictError;
};

export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
    this.name = "AuthError";
  }
}

export class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
    this.name = "ConflictError";
  }
}
