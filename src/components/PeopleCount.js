import React, { useContext } from "react";
import PeopleContext from "../context/peopleContext";


const PeopleCount = (props) => {
    const context = useContext(PeopleContext);
    return <h2 className="text-center mt-4">{context.people.length}</h2>
}

export default PeopleCount;