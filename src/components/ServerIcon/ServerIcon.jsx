import './ServerIcon.css';
import ReactTooltip from "react-tooltip";
import {selectSelectedServer, setSelectedServer} from "../../redux/globalSlice";
import {useDispatch, useSelector} from "react-redux";

export default function ServerIcon(props){

    const dispatch = useDispatch()
    const selectedServer = useSelector(selectSelectedServer)

    function doIt(){
        dispatch(setSelectedServer(props.server.server_id))
    }

    return(
        <div
            className={`servericon ${selectedServer === props.server.server_id && "servericon-selected"}`}
            onClick={doIt}
        >
            <img
                className={`servericon__icon ${selectedServer === props.server.server_id && "servericon-selected"}`} src={props.server.icon}
                data-tip={props.server.server_id}
                data-for={props.server.server_id}
            />
            <ReactTooltip
                className="servericon__tooltip"
                id={props.server.server_id}
                place="right"
                effect="solid"
                backgroundColor="black"
                offset="{'right': 12}"
                padding="10px"
            >
                {props.server.name}
            </ReactTooltip>
            <div className={`${selectedServer === props.server.server_id ? "servericon__selected" : "servericon__indicator"}`}></div>
        </div>
    )
}