import React from 'react'

export const temperature = {
  warm4: {
    background: '#feae34'
  },
  warm3: {
    background: '#f4c05e'
  },
  warm2: {
    background: '#ead187'
  },
  warm1: {
    background: '#dfe3b1'
  },
  cold1: {
    background: '#d0e0cb'
  },
  cold2: {
    background: '#bacad7'
  },
  cold3: {
    background: '#a4b5e3'
  },
  cold4: {
    background: '#8ea0ef'
  },
};

export const TemperatureContext = React.createContext(temperature.warm4);
