import Card from './Card'
import './Main.css'
import nature3 from './asset/nature3.webp'
import nature5 from './asset/nature5.jpg'

function Main()
{
    const card_items = [
        {
            image : nature3,
            price : '$4500',
            name : 'Appartment',
            details : 'Get started by choosing from one of our pre-built page templates to showcase your properties'
        },

        {
            image : nature5,
            price : '$3000',
            name : 'Office',
            details : 'Get started by choosing from one of our pre-built page templates to showcase your properties'
        },

        {
            image : nature3,
            price : '$7500',
            name : 'Classic Home',
            details : 'Get started by choosing from one of our pre-built page templates to showcase your properties'
        }

    ]
    return(
        <main className="container">
            {/* <Card image={nature3} price={'$ 4500'} name={'Appartment'} details={'Get started by choosing from one of our pre-built page templates to showcase your properties'}/>

            <Card image={nature5} price={'$ 3000'} name={'Office'} details={'Get started by choosing from one of our pre-built page templates to showcase your properties'}/>

            <Card image={nature3} price={'$ 7500'} name={'Classic Home'} details={'Get started by choosing from one of our pre-built page templates to showcase your properties'}/> */}

            {
                card_items.map((card_item,index)=>{
                    return <Card image={card_item.image} price={card_item.price} name={card_item.name} details={card_item.details}/>
                })
            }
        </main>
    )
}

export default Main;