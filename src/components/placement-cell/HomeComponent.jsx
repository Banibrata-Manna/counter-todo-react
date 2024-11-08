import { useParams } from "react-router-dom";

export default function HomeComponent() {

    const {username} = useParams();

    return (
        <div className="HomeComponent">
            <h1>Welcome {username}</h1>
        </div>
    );
}