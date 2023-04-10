import './Introducao.css'

const Introducao = () =>{
    return(
        <section id='home'>
            <div className='introducao-text'>
                <h1>Planejamento de Agências</h1>
                <a className='btn-introducao' href='#links'>Links utéis</a>
            </div>
            <div className='banner'>
                <img src='/logo192.png' />
            </div>
        </section>
    )
} 

export default Introducao