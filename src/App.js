import images from './script/images.js';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: images['dashboard'] },
    { title: 'Inbox', src: images['inbox'] },
    { title: 'Accounts', src: images['accounts'], gap: true },
    { title: 'Schedule', src: images['schedule'] },
    { title: 'Search', src: images['search'] },
    { title: 'Analytics', src: images['analytics'] },
    { title: 'Files', src: images['files'], gap: true },
    { title: 'Setting', src: images['setting'] },
  ]

  return (
    <div className="flex">
      <div className={`${open ? 'w-72' : 'w-20'} duration-500 p-5 pt-8 h-screen bg-dark-purple relative`}>
        <img src={images['control']} className={`absolute ${!open && 'rotate-180'} w-7 cursor-pointer -right-3 border-2 rounded-full top-9 border-dark-purple`}
          alt="sidebar-arrow" onClick={() => { setOpen(!open) }} />
        <div className='flex gap-x-4 items-center'>
          <img src={images['main']} className={`cursor-pointer w-10`} alt="Dashboard" />
          <h1 className={`font-medium text-white duration-500 ${!open && 'scale-0'} origin-left text-xl`}>
            Designer
          </h1>
        </div>
        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm flex items-center 
            gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? 'mt-9' : 'mt-2'}`}>
              <img src={menu.src} className="w-6" alt={menu.title} />
              <span className={`duration-500 origin-left ${!open && 'hidden'}`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
