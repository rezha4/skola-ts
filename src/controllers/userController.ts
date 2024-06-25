import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
} from "../models/user";

export const getUsers = (req: Request, res: Response): void => {
  const users = getAllUsers();
  res.render("index", { users });
};

export const getUser = (req: Request, res: Response): void => {
  const user = getUserById(parseInt(req.params.id, 10));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
};

export const addUser = (req: Request, res: Response): void => {
  const { name } = req.body;
  if (name) {
    const newUser = createUser(name);
    res.status(201).json(newUser);
  } else {
    res.status(400).send("Name is required");
  }
};

export const deleteUser = (req: Request, res: Response): void => {
  const success = deleteUserById(parseInt(req.params.id, 10));
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send("User not found");
  }
};
