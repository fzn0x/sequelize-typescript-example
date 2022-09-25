import express from "express";

import * as TodoController from "./controller.js";
import * as TodoValidator from "./validator.js";
import * as middleware from "../../middlewares/index.js";

const router = express.Router();

router.get(
  "/read",
  TodoValidator.validateReadTodo(),
  middleware.handleValidationError,
  TodoController.readTodo
);

router.get("/read/:id", TodoController.readTodoById);

router.post(
  "/create",
  TodoValidator.validateCreateTodo(),
  middleware.handleValidationError,
  TodoController.createTodo
);

router.put(
  "/update/:id",
  TodoValidator.validateUpdateTodo(),
  middleware.handleValidationError,
  TodoController.updateTodo
);

router.delete("/delete/:id", TodoController.deleteTodo);

export default router;
