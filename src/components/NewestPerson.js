import React, { useEffect, useContext } from "react";
import PeopleCount from "./PeopleCount";
import PeopleContext from "../context/peopleContext";

const NewstPerson = ( ) => {

    const context = useContext(PeopleContext);
    const newestPerson = context.people[context.people.length-1]
    
    useEffect(() => {
        const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`;
        document.title = newestPersonName
        console.log("useEffect");
        return () => {
            console.log("Unmounted");
        }
    }, [newestPerson])
  return (
    <div className="col col-sm-12">
      <h2 className="mt-4 text-center">
        NewstPerson: {`${newestPerson.firstName} ${newestPerson.lastName}`}
      </h2>
      <PeopleCount />
    </div>
  );
};

export default NewstPerson;
