import { useState } from 'react';
import '../Css/Menu.css';
// import '../App.css';
import Menu from '../Components/Menu';
import Button from '../Components/MenuOption';
import MenuData from '../Components/MenuData'; 
import Cart from '../Components/Cart';

//no repeating categories
const allCategories =  ['All', ... new Set(MenuData.map(menuItem => menuItem.category))];

console.log(allCategories);

function MenuRender() {
  const [menuItem, setMenuItem] = useState(MenuData);
  const [buttons, setButtons] = useState(allCategories);
  

  //Filter function menu
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(MenuData);
      return;
    }

    const filterData = MenuData.filter(item => item.category === button);
    setMenuItem(filterData)
  }

  return (
    <div className="menu-container">
      <Button button={buttons} filter={filter} />
      <Menu /* onAdd={onAdd} */ menuItem={menuItem} />
    
    </div>
  );
}

export default MenuRender;