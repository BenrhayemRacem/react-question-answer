
import data from "./data";
import OneQuestion from "./OneQuestion"


function App() {
  return (
      data.map((question)=> <OneQuestion key={question.id} question={question}/>)
  );
}

export default App;
