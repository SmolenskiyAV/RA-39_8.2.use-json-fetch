import React from "react";
import useJsonFetch from '../Hooks/useJsonFetch';

// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function Error() {  // КОМПОНЕНТ Формы

    const { error } = useJsonFetch('http://localhost:7070/error');

    return (
        <>
            <div>by component 'Error' error is {error}</div>
        </>
    );

};