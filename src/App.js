import React, {useState} from 'react'; 
import './App.css';

function App() {

  const[items, setItems] = useState([
    {name: "Feed Dog", priority: "high"},
    {name: "Clean", priority: "low"},
    {name: "Cook", priority: "high"}
  ]);

  const [newItem, setNewItem] = useState("");

  const itemNodes = items.map((item, index) => {
    return(
      <li key={index} className={item.isPriority ? "priority" : "not-priority"}><span> {item.name} </span>
      {item.isPriority ? <span className="priority">Priority!</span> : <button onClick= {() => prioritiseItem(index)}>Prioritise</button>}</li>
    )
  })

  const handleItemInput = (event) => { 
    setNewItem(event.target.value)
  }

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [...items]
    copyItems.push({name: newItem, isPurchased: false})
    setItems(copyItems)
    setNewItem("")  
  }

  const prioritiseItem = (index) => {
    const copyItems = [...items]
    copyItems[index].isPriority = true;
    setItems(copyItems)
  }


  return (
    <div className="App">
      
    <h1>Todo List</h1>
    <hr></hr>
      
    <ul>
      {itemNodes}
    </ul>
      
    <form onSubmit={saveNewItem}>
    <label htmlFor="new-item">Add a new task:</label>   
        <input id="new-item" type="text" value={newItem} onChange={handleItemInput}/>                 
        <input type="submit" value="Save New Task" />    
    </form>
    <p>Select priority:</p>
    <div>
        <input type="radio" name="high-priority-button" value="high" id="high"/>
        <label for="high">High</label>
    </div>
    <div>
        <input type="radio" name="low-priority-button" value="low" id="low"/>
        <label for="low">Low</label>
    </div>
          
      
    </div>
  );

  
};

export default App;
