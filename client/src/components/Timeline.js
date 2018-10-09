import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <h3>
        Timeline of motor and engine technology
        </h3>
        <ul>
        <li>(c. 30–70 AD) – Hero of Alexandria describes the first documented steam-powered device, the aeolipile.</li>
        <li>13th century - Chinese chronicles wrote about a solid rocket motor used in warfare</li>
        <li>1698 – Thomas Savery builds a steam-powered water pump for pumping water out of mines.</li>
        <li>1712 – Thomas Newcomen builds a piston-and-cylinder steam-powered water pump for pumping water out of mines.</li>
        <li>1769 – James Watt patents his first improved steam engine.</li>
        <li>1806 – François Isaac de Rivaz invented a hydrogen powered engine, the first successful internal combustion engine.</li>
        <li>1807 - Nicéphore Niépce and his brother Claude build a fluid piston internal combustion engine, the Pyréolophore and use it to power a boat up the river Saône.</li>
        <li>1816 – Robert Stirling invented his hot air Stirling engine, and what we now call a "regenerator".</li>
        <li>1821 – Michael Faraday builds an electricity-powered motor.</li>
        <li>1824 – Nicolas Léonard Sadi Carnot first publishes that the efficiency of a heat engine depends on the temperature difference between an engine and its environment.</li>
        <li>1837 – First American patent for an electric motor (U.S. Patent 132).</li>
        <li>1850 – The first explicit statement of the first and second law of thermodynamics, given by Rudolf Clausius.</li>
        <li>1860 - Lenoir 2 cycle engine</li>
        <li>1872 - Brayton Engine</li>
        <li>1877 – Nikolaus Otto patents a four-stroke internal combustion engine (U.S. Patent 194,047).</li>
        <li>1882 – James Atkinson invents the Atkinson cycle engine, now common in some hybrid vehicles.</li>
        <li>1885 – Gottlieb Daimler patents the first supercharger.</li>
        <li>1886 – Hot bulb engine was established by Herbert Akroyd Stuart, Gottlieb Daimler invents the Petrol engine.</li>
        <li>1888 – An AC induction motor is featured in a paper published by Galileo Ferraris and is patented in the U.S. by Nikola Tesla.[1]</li>
        <li>1892 – Rudolf Diesel patents the Diesel engine (U.S. Patent 608,845).</li>
        <li>1899 – Ferdinand Porsche creates the Lohner-Porsche, the first hybrid vehicle.</li>
        <li>1903 – The Exploration of Cosmic Space by Means of Reaction Devices was published by Konstantin Tsiolkovsky</li>
        <li>1905 – Alfred Büchi patents the turbocharger.</li>
        <li>1913 – René Lorin invents the ramjet.</li>
        <li>1915 – Leonard Dyer invents a six-stroke engine, now known as the Crower six-stroke engine named after his reinventor Bruce Crower.</li>
        <li>1926 - Robert H. Goddard launched the first liquid-fueled rocket.</li>
        <li>1929 – Felix Wankel patents the Wankel rotary engine (U.S. Patent 2,988,008).</li>
        <li>Late 1930s – Hans von Ohain and Frank Whittle separately build pioneering gas turbine engines intended for aircraft propulsion, leading to the pioneering turbojet powered flights in 1939 Germany and 1941 England.</li>
        <li>1939 – The BMW company's BMW 801 aviation radial engine pioneers the use of an early form of an engine control unit, the Kommandogerät.</li>
        <li>1940s – Ralph Miller patents his Miller cycle engine.</li>
        <li>1954 – Felix Wankel creates the first working Wankel engine.</li>
        <li>1957 - Rambler Rebel announced Electrojector electronic fuel injection option, however no production models were offered with the option.</li>
        <li>1966 – RD-0410 nuclear thermal rocket engine was ground-tested.</li>
        <li>1960s – alternators replace generators on automobile engines.</li>
        <li>1970s – electronically controlled ignition appears in automobile engines.</li>
        <li>1975 – Catalytic converters are first widely introduced on production automobiles in the US to comply with tightening EPA regulations on auto exhaust.</li>
        <li>1980s – electronically controlled ignition improved to reduce pollution.</li>
        <li>1980s – electronic fuel injection appears on gasoline automobile engines.</li>
        <li>1989 – The Bajulaz Six-Stroke Engine was invented by the Bajulaz S A company, based in Geneva, Switzerland; it has U.S. Patent 4,809,511 and U.S. Patent 4,513,568.</li>
        <li>1990s – Hybrid vehicles that run on an internal combustion engine (ICE) and an electric motor charged by regenerative braking.</li>

        </ul>
      </div>
    )
  }
}
