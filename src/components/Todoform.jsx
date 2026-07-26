import { useState } from "react";

const Todoform = (props) => {
  console.log("Props recebidas:", props);

  const { addTodo } = props;
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Botão clicado!");
  console.log(title);
  console.log(category);

  if (!title || !category) return;

  addTodo(title, category);

  setTitle("");
  setCategory("");
};

  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>

        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default Todoform;