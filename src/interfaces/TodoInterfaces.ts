export interface ITodo{
  id: string;
  title: string;
  description: string;
  finished: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChangeCheck: (event: React.ChangeEvent<HTMLInputElement>, data: ITodo) => void;
  handleDelete: (id: string) => void;
  handleSetTitle: (value: string) => void;
  handleSetTodo: (todos: ITodo[]) => void;
}
