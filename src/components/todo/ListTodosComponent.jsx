import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {

    const [todos, setTodos] = useState([]);

    const [message, setMessage] = useState(null);

    const authContext = useAuth();

    const username = authContext.username;

    const navigate = useNavigate();

    // const todos = [{id : 1, description : 'Learn AWS Now!', done : false, targetDate : targetDate},
    //     {id : 2, description : 'Learn Full Stack Now!', done : false, targetDate : targetDate},
    //     {id : 3, description : 'Learn Kubernetes Now!', done : false, targetDate : targetDate}
    // ]

    // useEffect - tell React that your component needs to do something after render.

    useEffect (
        () => {
            refreshTodos()
        }, []
    );

    function refreshTodos () {
        retrieveAllTodosForUsernameApi(username)
            .then(
                (response) => {
                    setTodos(response.data);
                }
            )
            .catch(error => console.log(error));
    }

    function deleteTodo (id) {
        deleteTodoApi(username, id)
            .then(
                () => {
                    refreshTodos();
                    setMessage(`Todo with id = ${id} is deleted Successfully!`);
                }
            )
            .catch(error => console.log(error));
    }

    function updateTodo (id) {
        console.log(`${id} update button clicked!`);
        navigate(`/todo/${id}`);
    }

    return (
        <div className="container">
            <h1>Things You have to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning"
                                                        onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success"
                                                        onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ListTodosComponent;