import './Card.css'

const Card = (props) =>{
    return(
        <div className='card-item'>
            <div className='item1'>
                <img src={props.valueFoto} alt='logo' />
            </div>
            <div className='item2'>
                <h5>{props.item}</h5>
            </div>
            <div className='item3'>
                <button>Leia mais</button>
            </div>
        </div>
    )
}

export default Card