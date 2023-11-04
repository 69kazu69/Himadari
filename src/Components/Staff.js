import React from 'react'
import { useEffect } from 'react';

function Staff() {


  useEffect(() => {
    function handleWheel(e) {
      if (e.deltaX != 0) { return; }
      e.preventDefault();
      document.getElementById('swrapper').scrollLeft += 10 * e.deltaY;
    }
    
    function calculateParalax(container, elem) {
      let elemCenterX = elem.offsetLeft + (elem.offsetWidth / 2);
      let viewCenterX = container.scrollLeft + (container.offsetWidth / 2);
      let delta = elemCenterX - viewCenterX;
      let max = container.offsetWidth / 2 + elem.offsetWidth / 2;
      elem.style.setProperty('--paralaxX', (delta * 100 / max) + 50 + "%");
    }
    
    function handleScroll(e) {
      for(let i = 0; i < allWindows.length; i++) {
        calculateParalax(e.target, allWindows[i]);
      }
    }
    
    function handleMouseMove(e) {
      let delta = e.clientY - (document.documentElement.offsetHeight / 2);
      let max = document.documentElement.offsetHeight * 2;
      document.documentElement.style.setProperty('--paralaxY', (delta * 100 / max) + 50 + "%");
    }
    
    function handleClick(e) {
      if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        return;
      }
      for(let i = 0; i < allWindows.length; i++) {
        allWindows[i].classList.remove('selected');
      }
      e.target.classList.add('selected');
    }
    
    document.getElementById('swrapper').addEventListener('wheel', handleWheel);
    document.getElementById('swrapper').addEventListener('scroll', handleScroll);
    document.documentElement.addEventListener('mousemove', handleMouseMove);
    
    var allWindows = document.getElementsByClassName('swindow');
    for(let i = 0; i < allWindows.length; i++) {
      allWindows[i].addEventListener('click', handleClick);
    }
    
    document.getElementById('swrapper').scrollLeft = document.getElementById('swrapper').scrollLeftMax / 2;
    
  
  
  }, [])

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

  return (
    <div className='gallery'>
      <div className='gheading'> Staff</div>

      
      <div id="swrapper">



{ array.map((item, i) =>(
  <div class="swindow">
    
    <div className='sdetail'>
      <div className='simage'></div>
      <div className='scard'>
      <div className='sname'>
        Staff's Name
      </div>
      <div className='sdec'>
        lorem ipsum dolor sit amet, consectetur
        lorem ipsum dolor sit amet, consectetur

        lorem ipsum dolor sit amet, consectetur

        lorem ipsum dolor sit amet, consectetur

        lorem ipsum dolor sit amet, consectetur

        lorem ipsum dolor sit amet, consectetur

      </div>
    </div>
    </div>
    
  </div>))}
  
</div>
    </div>
  )
}

export default Staff