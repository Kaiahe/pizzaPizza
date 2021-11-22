import React from 'react'

/*button function for filter */
function MenuOption({button, filter}) {
    return (
        <div className="buttons-menu">
            {
                button.map((category, i) =>{
                    return <button type="button" onClick={()=> filter(category)} className="btn">{category}</button>
                })
            }
        </div>
    )
}

export default MenuOption;