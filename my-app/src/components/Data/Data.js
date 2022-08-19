import React from "react";
import useJsonFetch from '../Hooks/useJsonFetch';

// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function Data() {  // КОМПОНЕНТ Формы

    const { data } = useJsonFetch('http://localhost:7070/data');
    
    if (data) console.log('data is:', data);  // КОНТРОЛЬНАЯ ТОЧКА

    return (
        <>
            <div>by component 'Data' data is {data}</div>
        </>
    );

};