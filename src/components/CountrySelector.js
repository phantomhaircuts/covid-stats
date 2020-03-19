import React from "react"

import useStats from '../utils/useStats';
import Stats from './Stats';

import {useState} from 'react';

export default function CountrySelector() {
  const countries = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('USA');
  if (!countries) return <p>Loading... </p>
  return (
    <div>
      <h2>{selectedCountry}:</h2>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
    </div>
  );
}
