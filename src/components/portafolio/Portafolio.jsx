import {useEffect, useState} from 'react'
import './portafolio.scss'
import PortafolioList from "../portafolioList/PortafolioList"
import {featuredPortafolio, webPortafolio, mobilePortafolio, designPortafolio, contentPortafolio} from "../data"

export default function Portafolio() {
    const [selected,setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "content",
            title: "Content"
        }
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortafolio);
                break;
            case "web":
                setData(webPortafolio);
                break;
            case "mobile": 
                setData(mobilePortafolio);
                break;
            case "design":
                setData(designPortafolio);
                break;
            case "content": 
                setData(contentPortafolio);
                break;
            default:
            setData(featuredPortafolio)
                
        }
    }, [selected])
    return (
        <div className="portafolio" id="portafolio">
            <h1>Portafolio</h1>
            <ul>
            {list.map((item) => (
                <PortafolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
            ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img src={d.img} alt=""/> 
                    <h3>{d.title}</h3>
                </div>
            ))}
            </div>
        </div>
    )
}
