import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function WelcomeComponent() {
    const {username} = useParams();

    const [message, setMessage] = useState(null);

    function callHelloWorldRestApi() {

        console.log("called!");

        // axios.get('http://localhost:8080/hello-world')
        //     .then( (response)=> successfullResponse(response) )
        //     .catch( (error) => errorResponse(error))
        //     .finally( () => console.log("Cleanup") )

        axios.get('http://localhost:8080/hello-world-bean')
            .then( (response)=> successfullResponse(response) )
            .catch( (error) => errorResponse(error))
            .finally( () => console.log("Cleanup") )
    }

    function successfullResponse(response) {
        console.log(response);
        // setMessage(response.data);
        setMessage(response.data.message);
    }

    function errorResponse(error) {
        console.log(error);
    }
    
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            Manage your todos - <Link to="/todos">Go Here</Link>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Show Hello World!
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    );
}
export default WelcomeComponent;