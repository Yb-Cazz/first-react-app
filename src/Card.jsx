import  nature1 from './asset/nature3.webp'
import './card.css'

function Card(prop)
{

    return(
        <main className='card'>
            <img src={prop.image}/>
            <h3>{prop.price}</h3>
            <h2>{prop.name}</h2>
            <p>{prop.details}</p>
        </main>
    )
}

export default Card;