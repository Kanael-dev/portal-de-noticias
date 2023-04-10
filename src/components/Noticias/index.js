import React, { useState, useEffect } from 'react';
import Card from '../Card'
import './Noticias.css'

function Noticias(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://chamadaapimongo.onrender.com/noticias')
        .then(response => response.json())
        .then(data => setData(data.slice(0, 5)));
    }, []);

    return(
        <section id='noticias'>
            <h1 className='text-noticia'>Portal de Noticias</h1>

            {data.map(items => (
                <Card key={items._id}  item={items.title} valueFoto={items.linkurl}/>
            ))}
        </section>
    )
}

export default Noticias