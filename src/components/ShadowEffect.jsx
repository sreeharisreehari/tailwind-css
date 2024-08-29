import React, { useRef, useEffect } from 'react';

const ShadowEffect = () => {
  const shadowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (shadowRef.current) {
        let x = e.clientX - (document.documentElement.clientWidth * 1.5);
        let y = e.clientY - (document.documentElement.clientHeight * 1.5);
        shadowRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="shadow" ref={shadowRef}>
        <p className='text-yellow-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti rerum nostrum magnam molestias voluptas dolores minima facere ut consequuntur laudantium accusamus reprehenderit veritatis nesciunt natus distinctio, cupiditate magni rem. Incidunt!</p>
      </div>
    </div>
  );
};

export default ShadowEffect;
