export default function Card(props){
    const badge = (props.item.openSpots === 0) ? 'SOLD OUT' : (props.item.location === "Online") ? 'ONLINE' : ''
    return(
        <div>
            <div className="relative">
                <img src={`/images/${props.item.coverImg}`} alt={props.item.description}
                className="ComponentCard__Img"/>
                {badge && <p className="ComponentCard__P absolute">{badge}</p>}
            </div>
            <p className="ComponentCard__P firstP">☆{props.item.stats.rating} ({props.item.stats.reviewCount}) {props.item.location}</p>
            <p className="ComponentCard__P SecondP">{props.item.title}</p>
            <p className="ComponentCard__P ThirdP"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}