// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import "./App.css";
import { Button, Card, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ todo, index, markTodo, removeTodo, editTodo }) {
  return (
    <div
      className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>{' '}
        {/* <Button variant="outline-warning" onClick={() => editTodo(index)}>Edit</Button> */}
      </div>
              {/* <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                  <Modal.Title>Formmmm</Modal.Title>
                  </Modal.Header>
                  <Form onSubmit={e => this.handleSave(e)}>
                  <Modal.Body>
                  <Form.Group className="mb-3" controlId="">
                      <Form.Label>ISBN</Form.Label>
                      <Form.Control type="text" name="index" placeholder="MN" 
                                  value={this.state.index} onChange={this.handleChange}/>
                  </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                      Close
                  </Button>
                  <Button variant="primary" type="submit">
                      Save
                  </Button>
                  </Modal.Footer>
                  </Form>
              </Modal> */}
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group> 
        <div className="row">
          <div className="col-4">
            <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="New task" />
          </div>
          <div className="col-8">
            <Button variant="info mb-3 text-white" type="submit">
              Add
            </Button>
          </div>
        </div>
    </Form.Group>
  </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Write Down Your Task Like This One !",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = index => {
    const newTodos = [...todos, {index}];
    newTodos.update(index);
    setTodos(newTodos);
  };

  const handleClose = () => {
    this.setState({
        isModalOpen: false
    })
  }
  const handleChange = e => {
    this.setState({
        [e.target.name] : e.target.value

    })
  }
  const handleSave = e => {
    e.preventDefault()
    let tempTodo = this.state.todo

    if (this.state.action === "insert") {
        tempTodo.push({
            index: this.state.index
        })
    }
    else if (this.state.action === "update") {
        let index = tempTodo.indexOf(this.state.selectedItem)
        tempTodo[index].index = this.state.index
    }

    this.setState({
        index: tempTodo,
        isModalOpen: false
    })
  }

  return (
    <div className="app">
      <div className="container">
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index} index={index}
                todo={todo} markTodo={markTodo}
                removeTodo={removeTodo} editTodo={editTodo}/>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>  
  );
}

export default App;