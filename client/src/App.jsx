import React, {useState, useEffect, Fragment} from 'react';
import {Card, Tag, Icon, Input, Select, Button, Modal} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const Option = Select.Option;

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [powers, setPowers] = useState([]);
  const [heroAddMode, setHeroAddMode] = useState(false);
  const [powerTags, setPowerTags] = useState([]);
  const [modal, setModal] = useState(false);
  const [powerName, setPowerName] = useState('');
  const [heroName, setHeroName] = useState('');
  
  useEffect(() => {
    fetch('/mongo/heroes/get').then(val => val.json()).then(setHeroes);
    fetch('/mongo/powers/get').then(val => val.json()).then(setPowers);
  }, []);

  const onModalAccept = async () => {
    if (powerName.length === 0) {
      return;
    }
    const newPower = await fetch('/mongo/powers/add', {
      method: 'POST',
      body: JSON.stringify({name: powerName}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(val => val.json());
    setPowers([...powers, newPower]);
    setPowerTags([...powerTags, newPower]);
    setModal(false);
  }

  const onAddHero = async () => {
    if (heroName.length === 0 || powerTags.length === 0) {
      return;
    }
    const newHero = await fetch('/mongo/heroes/add', {
      method: 'POST',
      body: JSON.stringify({
        name: heroName,
        powers: powerTags
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(val => val.json());
    console.log(newHero);
    setHeroes([...heroes, newHero]);
    setHeroAddMode(false);
  }

  return (
    <div className="App">
      <h1>Heroes</h1>
      <div className="Heroes-list">
        {heroes.length > 0 && heroes.map(({_id, name, powers}) => (
          <Card title={name} key={_id} className="Heroes-card Normal">
            <p><strong>Superpowers</strong></p>
            {powers.map(power => (
              <Tag className="Tag" key={power.name}>{power.name}</Tag>
            ))}
          </Card>
        ))}
        <Card
          title={heroAddMode && (
            <Input value={heroName} onChange={e => setHeroName(e.target.value)} placeholder="Hero name"/>
          )}
          onClick={() => setHeroAddMode(true)}
          className={`Heroes-card${!heroAddMode ? ' Add' : ' Form'}`}
        >
          {heroAddMode ? (
            <Fragment>
              <Select className="Selector" value="Add Power">
                <Option value="Add Power" disabled>Add Power</Option>
                {powers.map(({_id, name}) => (
                  <Option
                    onClick={(e) => setPowerTags([...powerTags, {name: e.key}])}
                    key={_id}
                    value={name}
                    disabled={powerTags.some(tag => tag.name === name)}
                  >
                    {name}
                  </Option>
                ))}
                <Option value="Add New Power" onClick={() => setModal(true)}>Add new power...</Option>
              </Select>
              {powerTags.map(power => (
                <Tag className="Tag" key={power.name}>{power.name}</Tag>
              ))}
              <div className="Button-group">
                <Button onClick={onAddHero} type="primary" className="Button">Add</Button>
                <Button>Cancel</Button>
              </div>
            </Fragment>
          ) : <Icon width={100} type="user-add" className="Add-icon"/>}
        </Card>
      </div>
      <Modal
        title="Add a New Superpower"
        visible={modal}
        onOk={onModalAccept}
        onCancel={() => setModal(false)}
      >
        <Input placeholder="Power name" value={powerName} onChange={e => setPowerName(e.target.value)}/>
      </Modal>
    </div>
  );
};

export default App;
