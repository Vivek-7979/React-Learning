// The purpose of creating this file is that we will import all the contexts that we have created in this file .
// Because rather than importing the context one by one in the components we can import all the contexts from this file and use them in the components.
// index file will be loaded intially first and all the contexts will be available { sirf iko import krna pena sanu index file da nah ki saare contexts one by one }

import { TodoContext , useTodo , TodoProvider } from "./TodoContext";

export { TodoContext , useTodo , TodoProvider };