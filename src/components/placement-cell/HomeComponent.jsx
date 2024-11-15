import './Home.css'

import { useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { jwtDecode } from "jwt-decode";
import { studentDetailsApiService } from "./api/UserApiService";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListJobsComponent from './ListJobsComponent';
import JobComponent from './JobComponent';
export default function HomeComponent() {

    const {code} = useParams();

    const [name, setName] = useState();

    const authContext = useAuth();

    const token = authContext.token;

    const role = jwtDecode(token).scope;

    const [userDetails, setUserDetails] = useState(null);
    
    useEffect(
        () => {
            loadUserDetails()
        }, [code, role, authContext]
    );

    async function loadUserDetails() {
        if(role == 'ROLE_STUDENT') {
            authContext.setRole('ROLE_STUDENT');
            await studentDetailsApiService(code)
                .then(
                    (response) => {
                        console.log(response.data);
                        setUserDetails(response.data);
                        authContext.setUsername(response.data.name);
                        setName(authContext.username);
                    }
                )
                .catch(
                    error => console.log(error)
                )
        } else if (role == 'ROLE_HOD') {

        } else {

        }
    }

    return (
        <div className="HomeComponent">
            <div className="container">
                <div className="center-col">
                {/* <h5>Welcome {userDetails?.name}, {role}</h5> */}
                    <ListJobsComponent></ListJobsComponent>               
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
            <div id="react"></div>
        </div>
    );
}