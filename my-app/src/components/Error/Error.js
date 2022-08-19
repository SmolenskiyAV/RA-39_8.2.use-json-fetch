import useJsonFetch from '../Hooks/useJsonFetch';

// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function Error() {  // КОМПОНЕНТ Формы

    const { error } = useJsonFetch('http://localhost:7070/error');

    if (error) {
        console.log('error is:', error);    // КОНТРОЛЬНАЯ ТОЧКА
    };

    return (
        <>
            <div>by component 'Error' error is {error}</div>
        </>
    );

};