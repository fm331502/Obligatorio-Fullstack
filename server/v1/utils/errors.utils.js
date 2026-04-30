export const isHandledError = (error) => {
  return (
    error instanceof AuthError ||
    error instanceof ConflictError ||
    error instanceof NotFoundError ||
    error instanceof BadRequestError
  );
};

export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

export class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}
