import React from 'react'
import Landing from '/src/components/Main/Landing'
import TaskaBar from '../Taskbar/TaskaBar';

const BackgroundComponent = () => {
  return (
    <div
      className="bg-cover h-screen w-full"
      style={{ backgroundImage: "url('/default/dogbg.jpg')" }}
    >
      <Landing />
      <TaskaBar/>
    </div>
  );
};

export default BackgroundComponent;
