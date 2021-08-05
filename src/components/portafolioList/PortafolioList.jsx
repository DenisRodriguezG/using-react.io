import "./portafolioList.scss";

export default function PortafolioList({id, title, active, setSelected}) {
    return (
        <li className={active ? "portafolioList active" : "portafolioList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
