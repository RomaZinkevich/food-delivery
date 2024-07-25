class ProductError extends Error {
    constructor(type, details) {
      super(details);
      this.name = 'ProductError';
      this.type = type;
      this.details = details;
    }
  }

module.exports = ProductError;