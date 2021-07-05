import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data";
import OneQuestion from "./OneQuestion"
import {Container} from "react-bootstrap";




function App() {
    const answerQuestion = data.map((question)=> <OneQuestion key={question.id} question={question}/>);
  return (

          <Container>
            {answerQuestion}
          </Container>


  );
}

export default App;
