import { Model, DataTypes } from "sequelize";
import db from "../dialects/sqlite/config/database.config.js";

interface TodoAttributes {
  id: string;
  title: string;
  completed: boolean;
}

class Todo extends Model<TodoAttributes> {}

Todo.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: db,
  }
);

export default Todo;
