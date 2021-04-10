/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner from './components/Banner';
import Feature from './components/Feature';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Teams from './components/Teams';


export default function About() {
  return (
    <>
      <Banner />
      <Feature />
      <Feature2 />
      <Feature3 />
      <Teams />
    </>
  )
}