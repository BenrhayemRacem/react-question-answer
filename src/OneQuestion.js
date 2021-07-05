
import {MdExpandLess ,MdExpandMore } from "react-icons/md";
import {useState} from "react";


const OneQuestion =(props) => {
    const [showMore , setShowMore] = useState(false);
    const iconToDisplay = showMore ? <MdExpandLess/> : <MdExpandMore/> ;
    const {title,info} = props.question;
    const paragraph = showMore ? info : '' ;
    return (
        <div>
        <h3>{title} <span>
                <button onClick={()=>setShowMore(!showMore)}> {iconToDisplay} </button>
            </span> </h3>

            <p>
                {paragraph}
            </p>
        </div>
    )


}

export default OneQuestion;