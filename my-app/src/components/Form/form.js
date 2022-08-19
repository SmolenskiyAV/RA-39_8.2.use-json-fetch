/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */

import React from "react";
import "./form.css";
import useJsonFetch from '../Hooks/useJsonFetch';
import Data from '../Data/Data';
import Error from '../Error/Error';
// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function Form() {  // КОМПОНЕНТ Формы
  
  const { data, loading, error, setUrlFetch } = useJsonFetch();

  if(loading) return 'Loading ...';
  
  const handleClick = evt => {  // ОБРАБОТКА НАЖАТИЯ на кнопку
    const { target } = evt;
    const id = target.id;
    console.log('id = ', id);
    switch (id) {
      case 'data':
        setUrlFetch('http://localhost:7070/data');
        console.log('data = ', data);
        break;

      case 'error':
        setUrlFetch('http://localhost:7070/error');
        console.log('error = ', error);
        break;

      case 'loading':
        setUrlFetch('http://localhost:7070/loading');
        console.log('loading = ', loading);
        break;

    };
    
  };

  return (
    <main className="content">
      <div>
        <button onClick={handleClick} id='data'>data</button>      
        <button onClick={handleClick} id='error'>error</button>      
        <button onClick={handleClick} id='loading'>loading</button>
      </div>
      <div>
        <p>by click data is: {JSON.stringify(data && data)}</p>
        <p>by click error is: {error}</p>
      </div>

      <div>
        <Data />
      </div>

      <div>
        <Error />
      </div>

    </main>
  );
};

/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/