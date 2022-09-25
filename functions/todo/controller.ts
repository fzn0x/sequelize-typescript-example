import express from "express";
import { nanoid } from "nanoid";

import Todo from "../../models/Todo.js";

export const readTodo = async (req: express.Request, res: express.Response) => {
  try {
    const limit = (req.query?.limit || 10) as number | undefined;
    const offset = (req.query?.offset || 0) as number | undefined;

    const records = await Todo.findAll({
      limit,
      offset,
    });

    return res.status(200).json({
      message: "Success to read",
      status: 200,
      data: records,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to read:" + err.message,
        status: 500,
      });
    }
  }
};

export const readTodoById = async (
  req: express.Request,
  res: express.Response
) => {
  const id = req.params?.id as string | undefined;

  try {
    const record = await Todo.findOne({
      where: { id },
    });

    return res.status(200).json({
      message: "Success to read",
      status: 200,
      data: record,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to read:" + err.message,
        status: 500,
      });
    }
  }
};

export const createTodo = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = nanoid();

    const created = await Todo.create({
      ...req.body,
      id,
      completed: false,
    });

    return res.status(200).json({
      message: "Success to create",
      status: 200,
      data: created,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to create:" + err.message,
        status: 500,
      });
    }
  }
};

export const updateTodo = async (
  req: express.Request,
  res: express.Response
) => {
  const id = req.params?.id as string | undefined;

  try {
    const updated = await Todo.update(
      {
        ...req.body,
      },
      {
        where: { id },
      }
    );

    return res.status(200).json({
      message: "Success to update",
      status: 200,
      data: updated,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to update:" + err.message,
        status: 500,
      });
    }
  }
};

export const deleteTodo = async (
  req: express.Request,
  res: express.Response
) => {
  const id = req.params?.id as string | undefined;

  try {
    const deleted = await Todo.destroy({
      where: { id },
    });

    return res.status(200).json({
      message: "Success to delete",
      status: 200,
      data: deleted,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Failed to delete:" + err.message,
        status: 500,
      });
    }
  }
};
