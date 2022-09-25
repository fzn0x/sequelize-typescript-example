import { body, query, param } from "express-validator";

export const validateReadTodo = () => {
  return [
    query("limit")
      .notEmpty()
      .withMessage("`limit` is required.")
      .isNumeric()
      .withMessage("`limit` must be numeric."),
    query("offset")
      .notEmpty()
      .withMessage("`offset` is required.")
      .isNumeric()
      .withMessage("`offset` must be numeric."),
  ];
};

export const validateCreateTodo = () => {
  return [body("title").notEmpty().withMessage("`title` is required.")];
};

export const validateUpdateTodo = () => {
  return [
    param("id").notEmpty().withMessage("`id` is required."),
    body("completed")
      .optional()
      .isBoolean()
      .withMessage("`completed` must be boolean."),
  ];
};
