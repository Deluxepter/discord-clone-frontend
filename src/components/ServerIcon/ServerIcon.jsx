import './ServerIcon.css';
import ReactTooltip from "react-tooltip";
import {useEffect, useState} from "react";

export default function ServerIcon(props){

    const [server, setServer] = useState();

    useEffect(() => {

    }, [])
    return(
        <div className="servericon">
            <img
                className="servericon__icon" src={props.server.image_link}
                data-tip={props.server.id}
                data-for={props.server.id}
            />

            <ReactTooltip
                className="servericon__tooltip"
                id={props.server.id}
                place="right"
                effect="solid"
                backgroundColor="black"
                offset="{'right': 12}"
                padding="10px"
            >
                {props.server.server_name}
            </ReactTooltip>
        </div>
    )
}