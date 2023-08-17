import React from 'react';

// components
import { Home } from "@/components/pages/Home/Home";
import { Sidebar } from "@/components/common/Sidebar/Sidebar";

export default function HomePage() {

  const delayShowWindow = (
    activeButton: boolean,
    setActiveButton: React.Dispatch<React.SetStateAction<boolean>>,
    setShowWindow: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (!activeButton) {
      setActiveButton(true);
      setTimeout(() => {
        setShowWindow(true);
      }, 200)
    } else {
      setShowWindow(false);
      setTimeout(() => {
        setActiveButton(false);
      }, 200)
    }
  }

  return <>
    <Sidebar
      // delayShowWindowF={delayShowWindow}
    />
    <Home
      delayShowWindowF={delayShowWindow}
    />
  </>
}
