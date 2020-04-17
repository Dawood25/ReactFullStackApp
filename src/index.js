console.log("hello world");
import ReactDom from 'react-dom';
import React from 'react';
import {store} from './app/store/index';
import {Dashboard} from '../src/app/component/dashboard'
import {Main} from '../src/app/component/Main'
console.log(store.getState());

ReactDom.render(
    < Main/>,
    document.getElementById("container")
)
