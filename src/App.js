import './App.css';
import PlacementCell from './components/placement-cell/PlacementCell';
// import TodoApp from './components/todo/TodoApp';
// import Counter from './components/counter/Counter';

function App () {
  return (
    <div className='App'>
      {/* <PlayingWithProps property1="1" property2="2"/> */}
      {/* <TodoApp/> */}
      <PlacementCell/>
    </div>
  )
}
  // function PlayingWithProps(properties) {
  //   console.log(properties.property1);
  //   console.log(properties.property2);
  //   return (
  //     <div className="PlayingWithProps">Props</div>
  //   );
  // }

  // function PlayingWithProps({property1, property2}) {
  //   console.log(property1);
  //   console.log(property2);
  //   return (
  //     <div className="PlayingWithProps">Props</div>
  //   );
  // }
  
export default App;
