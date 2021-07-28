import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.scss';
import { items } from './config';

const ItemThing = ({ degs, children, b, bg }) => (
  <div
    className="circle-layer"
    style={{
      '--degs': `${degs}deg`
    }}
  >
    <div
      className={`circle-item`}
      style={{
        backgroundColor: bg,
        borderColor: b
      }}
    >
      {children}
    </div>
  </div>
);

const DivisionThing = ({ degs }) => (
  <div
    className="circle-layer"
    style={{
      '--degs': `${degs}deg`
    }}
  >
    <div className="circle-division" />
  </div>
);

const App: React.FC = () => {
  return (
    <div>
      <div className="circle-container">
        <DivisionThing degs={0} />
        <DivisionThing degs={(360 / 3) * 1} />
        <DivisionThing degs={(360 / 3) * 2} />
        {items.map((v, i) => (
          <ItemThing
            bg={v.bg}
            b={v.b}
            degs={(360 / items.length) * i}
            key={`layer${i}`}
          >
            {v.in}
          </ItemThing>
        ))}
        <div className="circle-layer">
          <div className="circle-center">ABC </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
