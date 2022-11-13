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
    // const [data2, setData2] = useState();

    useEffect(() => {
        async function fetchPrevious(){
            const response = await axios.get(url);
            console.log(response);
            setPrev(response.data.previous);
            setNext(response.data.next)
            const result0 = await fetchPokemonData(response.data.results[0].url);
            const uppercase = result0.data.species.name.toUpperCase();
			console.log("testing git ");
            setData1({
                id: result0.data.id,
                name: uppercase,
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
        fetchPrevious();
    }, [url])


   console.log(useState());
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

// //    function handlePrev(){
//     async function fetchPrevious(){
//         const previous = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0');
//         //console.log("hey i am previous",  previous.map(item =>{item}));
//         setPrev(previous.prev);
//         //setName(response.data.results.name);

//     }
//     fetchPrevious();
// }
// 


//use array.forEach() or array.map() to extract data
//use event handlers for previous and next
//

//https://pokeapi.co/api/v2/pokemon/1/ - 
//name":"bulbasaur - 
//img https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

// useEffect( () =>{
    // async function fetchData(){
    //     // const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0');
    //     const data1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    //      setImage(data1.data.sprites.other.dream_world.front_default);
    //      setId(data1.data.id);
    //      setName(data1.data.species.name);
 
    //      const data2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    //      setImage(data2.data.sprites.other.dream_world.front_default);
    //      setId(data2.data.id);
    //      setName(data2.data.species.name);
 
    //      const data3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
    //      setImage(data3.data.sprites.other.dream_world.front_default);
    //      setId(data3.data.id);
    //      setName(data3.data.species.name);
    //      }
    //      fetchData();
    //  }, []);
 

