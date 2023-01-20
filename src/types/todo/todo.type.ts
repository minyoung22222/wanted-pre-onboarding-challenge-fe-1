export interface TodoProps {
  id?: string | undefined;
  title: string;
  content: string;
  setIsUpdateTodo?: (arg0: boolean) => void | undefined;
}
