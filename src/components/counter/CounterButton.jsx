import { PropTypes } from "prop-types";

export default function CounterButton ({by, incrementMethod, decrementMethod}) { // props are values for component lifetime that doesn't change for the whole lifetime.

    // const buttonStyle = {
    //     fontSize:"30px",
    //     backgroundColor:"#00a5ab",
    //     margin:"10px",
    //     color:"white",
    //     padding:"15px",
    //     borderRadius:"30px"
    // };

    // function incrementCounterFunction() {
    //     incrementMethod(by);
    // }

    // function decrementCounterFunction() {
    //     decrementMethod(by);
    // }

    return (
        <div className="CounterButton">
            <div>
                <button className="counterButton"
                        onClick={() => incrementMethod(by)}// this is call of parent method using arrow function.
                        // style={buttonStyle}
                >+{by}</button>
                <button className="counterButton"
                        onClick={() => decrementMethod(by)}
                        // style={buttonStyle}
                >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.prototypes = {
    by : PropTypes.number
}

CounterButton.defaultProps = {
    by : 1
}