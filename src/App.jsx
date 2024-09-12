import { useState } from "react";
import FirstComponent from './components/FirstComponent'
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from './components/ThirdComponent';
import Event from "./components/Event";
import TextoFocusBlurExample from "./components/EventoTexto";
import OnChangeEvent from './components/OnChangeEvent';
import OnKeyDownEvent from './components/OnKeyDownEvent';


function App() {
    
    return (
        <div>
            <ThirdComponent/>
            <h1>Eventos em React</h1>
            <Event/>
            <TextoFocusBlurExample/>
            <OnChangeEvent />
            <OnKeyDownEvent />
        </div>
    );
}

export default App;
