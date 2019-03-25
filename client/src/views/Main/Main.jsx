import React from 'react';
import {Card} from 'antd';
import mongo from './mongo.png';
import oracle from './oracle.png';
import './Main.css';

const Main = ({history}) => {
  return (
    <div>
      <h1>Test a Database</h1>
      <div className="List">
        <Card className="Card">
          <div onClick={() => history.push('/mongo')} className="Wrapper">
            <img className="Mongo-image" src={mongo} alt=""/>
          </div>
        </Card>
        <Card onClick={() => history.push('/oracle')} className="Card">
          <div className="Wrapper">
            <img className="Ora-image" src={oracle} alt=""/>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Main;
