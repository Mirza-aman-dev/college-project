import React from 'react'

function SelectionScreen() {
    return (
        <div className="container">
            <div className="selectionBoxContainer">
                <div className="selectMain">
                    <div className="selectBox">
                        <label htmlFor="classSelect" className='title' >Select Your Class : </label>
                        <select name="classSelect" id="classSelect">
                            <option value="8" className='item'>8</option>
                            <option value="9" className='item'>9</option>
                            <option value="10" className='item'>10</option>
                        </select>
                    </div>
                    <div className="selectBox">
                        <label htmlFor="classSelect" className='title' >Select Subject : </label>
                        <select name="classSelect" id="classSelect">
                            <option value="Physics" className='item'>Physics</option>
                            <option value="Chemistry" className='item'>Chemistry</option>
                            <option value="Maths" className='item'>Maths</option>
                            <option value="Biology" className='item'>Biology</option>
                        </select>
                    </div>
                    <div className="selectBox">
                        <label htmlFor="classSelect" className='title' >Select Chapter : </label>
                        <select name="classSelect" id="classSelect">
                            <option value="1" className='item'>1</option>
                            <option value="2" className='item'>2</option>
                            <option value="3" className='item'>3</option>
                        </select>
                    </div>
                </div>
                <button className='button' >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default SelectionScreen