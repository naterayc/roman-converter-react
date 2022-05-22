import React from "react";
import ConverterForm from "./converterForm/converterForm";
import Header from "./header/header";
import './romanConverterApp.css';

const RomanConverterApp = () => {
  return (
    <div className="app">
      <Header />
      <h1 className="title">Convierte en romano cualquier número entre 1 y 3999</h1>
      <ConverterForm />
    </div>
  );
}

export default RomanConverterApp;