import {Link} from 'react-router-dom'

export default function generateNavigationLine(arr) {
    const elements = arr.map((el,idx)=><li key={idx}><Link to={`/${resolveLocation(el.toLocaleLowerCase())}`}>{el}</Link></li>)
    return (<ul className="bar__content">
        {elements}
    </ul>)
}

function resolveLocation(nav) {
    if(nav === "home") return "main"
    return nav
}