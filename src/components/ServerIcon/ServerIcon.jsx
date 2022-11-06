import './ServerIcon.css';
import ReactTooltip from "react-tooltip";

export default function ServerIcon(props){
    console.log(props.server)
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