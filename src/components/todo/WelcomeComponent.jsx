import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function WelcomeComponent() {
    const {username} = useParams();

    function callHelloWorldRestApi() {

        console.log("called!");

        axios.get('http://localhost:8080/hello-world')
            .then( (response)=> successfullResponse(response) )
            .catch( (error) => errorResponse(error))
            .finally( () => console.log("Cleanup") )
    }

    function successfullResponse(response) {
        console.log(response)
    }

    function errorResponse(error) {
        console.log(error)
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
        </div>
    );
}
export default WelcomeComponent;