import { useState, useEffect } from "react";

export default function BackTop(){
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 0) {
            setIsSticky(true);
            document.querySelector('#backTop')?.classList.remove('hidding')
          } else {
            setIsSticky(false);
            document.querySelector('#backTop')?.classList.add('hidding')
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isSticky]);

    return(
      <div id='backTop' className='fixed left-4 bottom-24 md:bottom-5 z-50'>
        <a href="#"  className='flex justify-center items-center rounded-full py-[6px] px-2 bg-[#0B6FE0] border border-[#f5a518] shadow-[0px_0px_5px_#fff]'>
          <svg
            width="40"
            height="40"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_382_94"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="25"
            >
              <rect x="0.750916" y="0.641357" width="24" height="24" fill="#ffffff" />
            </mask>
            <g mask="url(#mask0_382_94)">
              <path
                d="M8.15092 16.0165L6.75092 14.6165L12.7509 8.61646L18.7509 14.6165L17.3509 16.0165L12.7509 11.4165L8.15092 16.0165Z"
                fill="#ffffff"  
              />
            </g>
          </svg>
        </a>
      </div>
    )
}
