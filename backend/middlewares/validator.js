const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("fullName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString()
    .withMessage("Must be a valid name!")
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be within 3 to 20 character!"),
  check("email").normalizeEmail().isEmail().withMessage("Invalid email!"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is empty!")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 3 to 20 characters long!"),
];
exports.validaorr = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(406).json({ errors: errors.array() });
};
