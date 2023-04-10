import CardProjetos from '../CardProjetos'
import './Projetos.css'


const Projetos = () =>{
    return(
        <section id='projetos'>
            <h1 className='text-projetos'>Projetos em andamento</h1>
            <div className='card-projetos-pai'>
                <CardProjetos />
                <CardProjetos />
                <CardProjetos />
                <CardProjetos />
            </div>
        </section>
    )
}

export default Projetos