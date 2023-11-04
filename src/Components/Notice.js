import React from 'react'

function Notice() {
  return (
    <div className='notice'>
        <div className='nheading'>Notice Board</div>
        <div className='nboard'>
           <div className='nsheading'>
           Notices
           </div>
           <div className='nlist'>
            <a className='nlink'>1. Notice 1  - lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit </a>
            <br />
            <br />
            
            <a className='nlink'>2. Notice 2 - lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit </a>
            <br />
            <br />
            <a className='nlink'>3. Notice 3 - lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit </a>
            <br />
            <br />
            <a className='nlink'>4. Notice 4 - lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit </a>
            <br />
            <br />
            <a className='nlink'>5. Notice 5 - lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit </a>
            <br />
            <br />

            
           </div>
        </div>
    </div>
  )
}

export default Notice