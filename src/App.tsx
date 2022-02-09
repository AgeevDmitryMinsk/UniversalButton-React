import React from 'react';
import './App.css';
import ButtonComponent from "./components/ButtonComponent";

function App() {
    const Button1Foo = (name:string, age: number, address: string) => {
        console.log(name, age, address)
    }
    const Button2Foo = (name:string) => {
        console.log(name)
    }
    const Button3Foo = () => {
        console.log(`Im stupid button`)
    }
  return (
      <div className={`App`}>
          {/*<button>-1</button>*/}
          {/*<button>-2</button>*/}
          <ButtonComponent name={`1st button`} callBack={()=>Button1Foo(`Im Vasia`, 21, `live in Minsk`)} />
          <ButtonComponent name={`2nd button`} callBack={()=>Button2Foo(`Im Ivan`)}  />
          <ButtonComponent name={`Stupid button`} callBack={Button3Foo} />


      </div>

  );
}

export default App;
