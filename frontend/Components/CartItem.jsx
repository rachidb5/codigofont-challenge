export default function CartItem(props) {
    return(
        <div className="bg-light">
            <ul>
                <li>{props.name}</li>
                <li>{props.price}</li>
            </ul>
        </div>
    )
}