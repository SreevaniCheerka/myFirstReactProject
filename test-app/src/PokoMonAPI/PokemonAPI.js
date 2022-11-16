import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon.css'

const PokemonAPI = () => {

    const Object = {
        id: "",
        name: "",
        imageURL: ""
    }
    const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0');
    const [prev, setPrev] = useState();
    const [next, setNext] = useState();
    const [data1, setData1] = useState(Object);
    const [data2, setData2] = useState(Object);
    const [data3, setData3] = useState(Object);

    useEffect(() => {
        async function fetch(){
            const response = await axios.get(url);
            setPrev(response.data.previous);
            setNext(response.data.next)
            const result0 = await fetchPokemonData(response.data.results[0].url);
            setData1({
                id: result0.data.id,
                name: result0.data.species.name.toUpperCase(),
                imageURL: result0.data.sprites.other.dream_world.front_default,
            })
            const result1 = await fetchPokemonData(response.data.results[1].url);
            setData2({
                id: result1.data.id,
                name: result1.data.species.name.toUpperCase(),
                imageURL: result1.data.sprites.other.dream_world.front_default,
            })
            const result2 = await fetchPokemonData(response.data.results[2].url);
            setData3({
                id: result2.data.id,
                name: result2.data.species.name.toUpperCase(),
                imageURL: result2.data.sprites.other.dream_world.front_default,
            })

            async function fetchPokemonData(url) {
                const response = await axios.get(url);
                return response;
            }
        }
        fetch();
    }, [url])

  return (
    <>
    <div className='layout'>
        <div className='div'>
            <div className= 'head'>
            <div>{(data1.name)}</div>
            <div className='id'>ID: {data1.id}</div> 
            </div>
            <div> <img src = {data1.imageURL} className='image'/> </div>
        </div>
        <div className='div'>
            <div className='head'>
            <div>{(data2.name)}</div> 
            <div className='id'> ID: {data2.id}</div>
            </div>
            <div > <img src = {data2.imageURL} className='image'/> </div>
        </div>
        <div className='div'>
            <div className='head' >
            <div>{(data3.name)}</div>
            <div className='id'>ID: {data3.id}</div>  
            </div>
            <div> <img src = {data3.imageURL} className='image' /> </div>
        </div>
    </div>
    <div className='btn'>
        <button onClick={() => setURL(prev)} className = "prevbtn">Prev</button>
        <button onClick={() => setURL(next)} className = 'nextbtn'>Next</button>
    </div>
        
    </>
  )
}

export default PokemonAPI
