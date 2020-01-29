import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import 'bulma/css/bulma.css';

ReactDOM.render(
    <React.Fragment>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </React.Fragment>,
    document.getElementById('root')
  );