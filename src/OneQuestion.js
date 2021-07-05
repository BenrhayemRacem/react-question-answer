
import {MdExpandLess ,MdExpandMore } from "react-icons/md";
import {useState} from "react";
import {Row,Button,Alert} from "react-bootstrap";






const OneQuestion =(props) => {
    const [showMore , setShowMore] = useState(false);
    const iconToDisplay = showMore ? <MdExpandLess/> : <MdExpandMore/> ;
    const {title,info} = props.question;
    const paragraph = showMore ? <Alert variant="info">{info}</Alert> : '' ;
    return (
        <Row>
        <h3>{title} <span>
                <Button onClick={()=>setShowMore(!showMore)}> {iconToDisplay} </Button>
            </span> </h3>


            <p>
                {paragraph}
            </p>


        </Row>
    )


}

export default OneQuestion;