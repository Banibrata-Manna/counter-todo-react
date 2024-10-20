import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";

export default function TodoComponent() {

    const {id} = useParams();

    const[description, setDescription] = useState("");

    const[targetDate, setTargetDate] = useState("")

    const authContext = useAuth();

    const username = authContext.username;

    useEffect(
        () => retrieveTodos()
        , [id]
    )

    function retrieveTodos() {
        retrieveTodoApi(username, id)
            .then(response => {
                console.log(response);
                setDescription(response.data.description);
                setTargetDate(response.data.targetDate.toString());
            }
        ).catch(error => console.log(error));
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            Description : {description}
            <br />
            Target Date : {targetDate}
        </div>
    );
}