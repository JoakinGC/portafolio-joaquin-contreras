import { useState, useEffect } from "react";
import { MdOutlineNightlight, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input 
        type="checkbox" 
        className="sr-only peer"
        checked={!isDark} 
        onChange={() => setIsDark(!isDark)} 
      />
      <div className="w-14 h-7 bg-gray-300   rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-50 relative flex items-center transition-all">
        <div className="absolute left-1 flex items-center justify-center w-5 h-5 transition-all duration-300">
          <MdOutlineNightlight className={`text-gray-500 ${!isDark ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} size={16} />
        </div>
        <div className="absolute right-1 flex items-center justify-center w-5 h-5 transition-all duration-300">
          <MdLightMode className={`text-yellow-400 ${isDark ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} size={16} />
        </div>
        <div className={`absolute ${isDark ? 'left-1' : 'left-8'} bg-white border border-gray-300 dark:border-gray-300 rounded-full h-5 w-5 flex items-center justify-center transition-all duration-300`}>
          {isDark ? <MdOutlineNightlight className="text-gray-500" size={16} /> : <MdLightMode className="text-yellow-400" size={16} />}
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;