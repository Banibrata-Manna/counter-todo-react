import {Link, useParams} from 'react-router-dom';

function WelcomeComponent() {
    const {username} = useParams();
    
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            Manage your todos - <Link to="/todos">Go Here</Link>
        </div>
    );
}
export default WelcomeComponent;