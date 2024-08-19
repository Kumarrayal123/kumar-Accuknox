

import React from 'react';
import { Link } from 'react-router-dom';

function Home({ widgets = [], setWidgets }) {

  const handleDelete = (index) => {
  
    const updatedWidgets = widgets.filter((_, i) => i !== index);
    setWidgets(updatedWidgets);
  };

  return (
    <div className="layout">
      <div className="board">
        <h5 className="cat">CNAPP Dashboard</h5>
      </div>
      <div className='board1'>
        <h5 className="cat1">CSPM Executive Dashboard</h5>
      </div>
      <div className="layout1">
        <div className="card">
          <div className="title">Cloud Accounts</div>
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="center-text">
                2
                <span className="total">Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn"></button><p className="text">Connected(2)</p>
      <button className="btn1"></button><p className="text1">Not Connected(2)</p>
      <div className="layout2">
        <div className="card1">
          <div className="title1">Cloud Accounts Risk Assessment</div>
          <div className="outer-circle1">
            <div className="inner-circle1">
              <div className="center-text">
                9659
                <span className="total">Total</span>
              </div>
            </div>
          </div>
          <button className="btn2"></button><p className="text2">Failed(1689)</p>
          <button className="btn3"></button><p className="text3">Warning(681)</p>
          <button className="btn4"></button><p className="text4">Not available(36)</p>
          <button className="btn5"></button><p className="text5">Passed</p>
        </div>
      </div>
      <div className="layout3">
        <div className="widget-card-container">
          <h3 className="widget-card-title">Widgets</h3>
          {widgets.length > 0 ? (
            widgets.map((widget, index) => (
              <div key={index} className="widget-card">
                <table>
                  <tbody>
                    <tr>
                      <td>{widget.name}</td>
                    </tr>
                    <tr>
                      <td>{widget.text}</td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
              </div>
            ))
          ) : (
            <p>No widgets available</p>
          )}
        </div>
        <Link to="/addwidget">
          <button className="add-widget">Add Widget</button>
        </Link>
      </div>
      <h5 className="Dashboard">CWPP Dashboard:</h5>
      <div className="layout4">
        <h5 className="graph-text">Top 5 Namespace Specific Alerts</h5>
        <p className="data">No graph data available</p>
        <div className="graph-container">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="layout5">
        <h5 className="graph-text1">Workload Alerts</h5>
        <p className="data1">No graph data available</p>
        <div className="graph-container1">
          <div className="bar bar6"></div>
          <div className="bar bar7"></div>
          <div className="bar bar8"></div>
          <div className="bar bar9"></div>
          <div className="bar bar10"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="layout6">
        <div className="widget-card-container">
          <h3 className="widget-card-title">Additional Widgets</h3>
          {widgets.length > 0 ? (
            widgets.map((widget, index) => (
              <div key={index} className="widget-card">
                <table>
                  <tbody>
                    <tr>
                      <td>{widget.name}</td>
                    </tr>
                    <tr>
                      <td>{widget.text}</td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
              </div>
            ))
          ) : (
            <p>No additional widgets available</p>
          )}
        </div>
        <Link to="/addwidget">
          <button className="add-widget">Add Widget1</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;



