import React from 'react'

const Tabs1 = () => {
    const [toggle, setToggle] = useState(1);
    function updateToggle(id){
        setToggle(id);
    }
  return (
    <div className='tab-container'>
        <div className="tab-content-container">
            <div className="tab-heading">
              <ul>
                <li onClick={() => updateToggle(1)}>All</li>
                <li onClick={() => updateToggle(2)}>Adventure</li>
                <li onClick={() => updateToggle(3)}>Travel</li>
                <li onClick={() => updateToggle(4)}>Budget</li>
                <li onClick={() => updateToggle(5)}>Trending</li>
              </ul>
            </div> 

    <div className={toggle === 1 ? "show-content" : "content"}>
        <h1>abc</h1>
    </div>
    </div>
    </div>
  )
}

export default Tabs1