import React from 'react'

export const times = {
  day: {
    background: '#eef'
  },
  night: {
    background: '#114'
  }
};

export const TimeContext = React.createContext(times.day);
