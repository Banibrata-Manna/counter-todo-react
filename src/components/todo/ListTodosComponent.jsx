import { useEffect, useState } from "react";
import { retrieveAllTodosForUsername } from "./api/TodoApiService";

function ListTodosComponent() {

    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const [todos, setTodos] = useState([]);

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
        retrieveAllTodosForUsername("Banibrata")
            .then(
                (response) => {
                    setTodos(response.data);
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div className="container">
            <h1>Things You have to do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
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