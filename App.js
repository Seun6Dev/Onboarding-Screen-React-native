import { View } from "react-native";
import OnBoard from "./components/OnBoard";
import { useState } from "react";
import Signup from "./components/Signup";



export default function App(){

  const [showOnboard, setShowOnboard] = useState(true);

  const onBoardDone = ()=>{
    setShowOnboard(false)
  }

  return (
    <>
      {
        showOnboard && <OnBoard boardingDone= {onBoardDone}/>
      },
       {
        !showOnboard && <Signup/>
      }
    </>
    
    )
  
  }