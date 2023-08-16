import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Info from './info';
import Average from './Average';

const App = () => {
   const [visible, setVisible] = useState(false);

   return (
      <div>
         <button
            onClick={() => {
               setVisible(!visible);
            }}
         >
            {visible ? '숨기기' : '보이기'}
         </button>
         <hr />
         {visible && <Info />}
         <Counter /> Counter 렌더링
         <Info />
         <Average />
      </div>
   );
};

export default App;
