import React from 'react'
import { useEffect } from 'react';

function Gallery() {


  useEffect(() => {
    function handleWheel(e) {
      if (e.deltaX != 0) { return; }
      e.preventDefault();
      document.getElementById('wrapper').scrollLeft += 10 * e.deltaY;
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
    
    document.getElementById('wrapper').addEventListener('wheel', handleWheel);
    document.getElementById('wrapper').addEventListener('scroll', handleScroll);
    document.documentElement.addEventListener('mousemove', handleMouseMove);
    
    var allWindows = document.getElementsByClassName('window');
    for(let i = 0; i < allWindows.length; i++) {
      allWindows[i].addEventListener('click', handleClick);
    }
    
    document.getElementById('wrapper').scrollLeft = document.getElementById('wrapper').scrollLeftMax / 2;
    
  
  
  }, [])

  

  return (
    <div className='gallery'>
      <div className='gheading'> School Activities</div>
      <div id="wrapper">
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
  <div class="window"></div>
</div>
    </div>
  )
}

export default Gallery