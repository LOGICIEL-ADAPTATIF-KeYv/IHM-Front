import './App.css';
import Navbar from './components/Navbar';
import CreateObject from'./components/CreateObject';
import Object from './components/Object';
import { fetchData } from '././services/apiGet';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null); 

  const onDataReceived = (responseData, model) => {
    setData({ model, data: responseData }); 
    console.log(responseData);
  };

  const refreshData = async (model) => {
    try {
      const response = await fetchData(model);
      setData({ model, data: response });
    } catch (error) {
      console.error(`Erreur lors du rafraîchissement des données pour le modèle ${model}:`, error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar onDataReceived={onDataReceived}/>
      </header>
      <div className='main-container'>
        <CreateObject className='createObject'/>
        {data && data.data.map((item, index) => (
          <Object key={index} className='Object' data={item} model={data.model} refreshData={refreshData}/>
        ))}
      </div>
    </div>
  );
}

export default App;
