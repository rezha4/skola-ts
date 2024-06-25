type User = {
  id: number;
  name: string;
};

let users: User[] = [];

export const getAllUsers = (): User[] => users;

export const getUserById = (id: number): User | undefined =>
  users.find((user) => user.id === id);

export const createUser = (name: string): User => {
  const newUser: User = { id: users.length + 1, name };
  users.push(newUser);
  return newUser;
};

export const deleteUserById = (id: number): boolean => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
};
