import './App.css';
import Navbar from './components/Navbar';
import CreateObject from'./components/CreateObject';
import Object from './components/Object';
import { fetchData } from '././services/apiGet';
import React, { useState, useEffect } from 'react';
import CreateObjectWindow from './components/CreateObjectWindow';

const handleItemClick = async (model, onDataReceived) => {
  try {
    const response = await fetchData(model);
    onDataReceived(response, model);
  } catch (error) {
    console.error('Erreur lors de la récupération des données pour le modèle', model, ':', error);
  }
};

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

  useEffect(() => {
    handleItemClick('client', onDataReceived);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar onDataReceived={onDataReceived}/>
      </header>
      <div className='main-container'>
        <CreateObject className='createObject' model={data && data.model} refreshData={refreshData}/>
        {data && data.data.map((item, index) => (
          <Object key={index} className='Object' data={item} model={data.model} refreshData={refreshData}/>
        ))}
      </div>
    </div>
  );
}

export default App;
