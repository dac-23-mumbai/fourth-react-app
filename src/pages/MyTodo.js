import { useRef, useState } from "react";

function MyTodo() {
  let formRef = useRef();
  let [sucessBox, setSuccessBox] = useState(false);
  let [todo, setTodo] = useState({ task: "", description: "", numpref: "" });

  let handleChnageTaskAction = (e) => {
    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  let handleChangeDescriptionAction = (e) => {
    // console.log(e.target);
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  };

  let handleChangeNumPrefAction = (e) => {
    console.log(e.target.value);
    let newTodo = { ...todo, numpref: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = async () => {
    console.log(todo);
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      alert();
      return;
    }

    let url = `http://localhost:4000/addtodo?task=${todo.task}&description=${todo.description}&numpref=${todo.numpref}`;
    await fetch(url);

    // clear the box
    let newtodo = { task: "", description: "", numpref: "" };
    setTodo(newtodo);

    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000);

    formRef.current.classList.remove("was-validated");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <form ref={formRef} className="needs-validation">
            <h1>Todo Application Form</h1>
            <input
              className="form-control form-control-lg mb-2"
              type="text"
              placeholder="Enter task"
              value={todo.task}
              onChange={handleChnageTaskAction}
              required
            />

            <textarea
              className="form-control mb-2"
              cols="30"
              rows="3"
              placeholder="Enter Description"
              value={todo.description}
              onChange={handleChangeDescriptionAction}
              required
            ></textarea>

            <select
              className="form-select mb-2"
              aria-label="Default select example"
              onChange={handleChangeNumPrefAction}
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <input
              className="btn btn-lg btn-secondary w-100"
              type="button"
              value="Add Todo"
              onClick={addTodoAction}
            />
          </form>

          {sucessBox && (
            <div className="alert alert-success">Operation Success</div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyTodo;
