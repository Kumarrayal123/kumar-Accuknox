import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Addwidget1({ setWidgets, widgets }) {
  const navigate = useNavigate();
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const newWidget = { name: widgetName, text: widgetText };
    

    setWidgets([...widgets, newWidget]);
    

    navigate('/');
  };

  return (
    <div>
      <h2>Add New Widget (Type 1)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Widget Name:</label>
          <input
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Widget Text:</label>
          <textarea
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Widget</button>
      </form>
    </div>
  );
}

export default Addwidget1;

