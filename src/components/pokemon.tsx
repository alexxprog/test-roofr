import React from 'react';
import {PokemonProps} from '../types';

function Pokemon({name, stats, frontSprite, backSprite, primaryType, moves}:PokemonProps) {
    return (
        <div className='group flex flex-auto even:flex-row-reverse'>
            <div className='flex-1 m-8'>
                <div className='flex border border-1 border-black rounded p-6'>
                    <div className='flex-1 text-xl font-bold'>{name}</div>
                    <div className='flex-1 w-64 group-odd:bg-green-300 group-even:bg-blue-400 rounded-full text-center border border-1 group-odd:border-green-500 group-even:border-blue-600'>{moves[0].move.name}: {stats}</div>
                </div>
            </div>
            <div className='flex-none w-48 h-48 group-odd:visible'>
                <img className='w-full h-full group-even:hidden group-odd:visible' alt={name} src={frontSprite}/>
                <img className='w-full h-full group-even:visible group-odd:hidden' alt={name} src={backSprite}/>
            </div>
        </div>
    )
}

export default Pokemon;