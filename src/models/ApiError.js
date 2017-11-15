class ApiError extends Error {
  constructor(errors, status, ...params) {
    super(...params);

    this.errors = errors;
    this.status = status;
  }

  toString() {
    return this.errors[0].toString();
  }
}

export default ApiError;
