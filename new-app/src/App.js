import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
//import { Greet } from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Messag from './components/Messag';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import styles from './appStyles.module.css'
import './appStyles.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';




class App extends Component
{

  render()
  {
    return (<div className='App'>

      <Table></Table>

    </div>)
  }
}
export default App;
