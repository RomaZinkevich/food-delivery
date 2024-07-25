class RestaurantError extends Error {
    constructor(type, details) {
      super(details);
      this.name = 'RestaurantError';
      this.type = type;
      this.details = details;
    }
  }

module.exports = RestaurantError;