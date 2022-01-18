var containerEl=document.createElement('div')
containerEl.setAttribute('class', 'container')






function renderPokemonItem(pokemon=pokemons[0]){
    let  colEl=document.createElement('div')
    colEl.setAttribute('class', 'col-12 col-sm-6  col-md-4 ')
    console.log(pokemon)
    let pokemonItem=document.createElement('div')
    pokemonItem.setAttribute('class', 'card position-relative')
    

    let pokemonImg=document.createElement('img')
    pokemonImg.setAttribute('src', pokemon.img)
    pokemonImg.setAttribute('class',' card-image-top    pokemon-emage ')
    pokemonImg.setAttribute('alt',' pokemon Image  here ')
    pokemonImg.addEventListener('error',() => {
        pokemonImg.setAttribute('src', ' http:picsum.photos/200/200')
    })

    let pokemonBody=document.createElement('div')
    pokemonBody.setAttribute('class', 'card-body')

    let pokemonNameEl= document.createElement( 'h3')
    pokemonNameEl.setAttribute('class', 'text-success ')
    pokemonNameEl.textContent=pokemon.name

    let pokemonEggEl=document.createElement('div')
    pokemonEggEl.setAttribute('class','rounded p-2 border pokemonSpawn_time spawn_time')
    pokemonEggEl.textContent="egg: "+pokemon.egg



    let pokemonNum=document.createElement('div')
    pokemonNum.setAttribute('class', 'position-absolute top-0 end-0 p-3 rounded-circle bg-danger text-white ')
    pokemonNum.textContent=pokemon.num

    let pokemonCandyEl=document.createElement('div')
    let pokemonCandy=pokemon.candy.split(',')

    for(let candy of pokemonCandy){
        let candyItem=document.createElement('div')
        candyItem.setAttribute('class', 'badge ms-2 me-2 bg-success text-white')
        candyItem.textContent=candy
        pokemonCandyEl.appendChild(candyItem)
    }


    
    let pokemonSpawn_timeEl=document.createElement('div')
    pokemonSpawn_timeEl.setAttribute('class','rounded p-2 border pokemonSpawn_time spawn_time')
    pokemonSpawn_timeEl.textContent="	spawn_time:"+ pokemon.spawn_time
    
    let pokemonSpawn_chanceEl=document.createElement('div')
    pokemonSpawn_chanceEl.setAttribute('class','rounded p-2 border mb-1 borderpokemonSpawn_chanceEl spawn_time')
    pokemonSpawn_chanceEl.textContent="spawn_chance:"+ pokemon.spawn_chance

    let pokemonAvg_spawnsEl=document.createElement('div')
    pokemonAvg_spawnsEl.setAttribute('class','rounded p-2 border mb-1 borderpokemonSpawn_chanceEl spawn_time')
    pokemonAvg_spawnsEl.textContent="avg_spawns:"+pokemon.avg_spawns

    pokemonBody.appendChild(renderPokemonCandy(pokemon))
    pokemonBody.appendChild(pokemonNameEl)
    pokemonBody.appendChild(pokemonNum)
    pokemonBody.appendChild(pokemonEggEl)
    pokemonBody.appendChild(pokemonAvg_spawnsEl)
    pokemonBody.appendChild(pokemonSpawn_chanceEl   )
    pokemonBody.appendChild(pokemonSpawn_timeEl)
    pokemonBody.appendChild(renderPokemonType(pokemon))
    pokemonItem.appendChild(pokemonImg)
    pokemonItem.appendChild(pokemonBody)
    colEl.appendChild(pokemonItem)
    return colEl
}


function renderPokemonType (pokemon){
    let pokemonTypeEl=document.createElement('div')


    for(let type of pokemon.type){
        let typeItem=document.createElement('div')
        typeItem.setAttribute('class', 'badge ms-2 me-2 bg-danger text-white')
        typeItem.textContent=type
        pokemonTypeEl.appendChild(typeItem)
    }

    return pokemonTypeEl
}

// function renderPokemonMultipliers (pokemon){
//     let PokemonMultipliersmonTypeEl=document.createElement('div')
//     let pokemonMultipliers=pokemon.multipliers.join(' ')

//     for(let multipliers of pokemonMultipliers){
//         let MultipliersItem=document.createElement('div')
//         MultipliersItem.setAttribute('class', 'badge ms-2 me-2 bg-success text-white')
//         MultipliersItem.textContent=multipliers
//         PokemonMultipliersmonTypeEl.appendChild(MultipliersItem)
//     }
//     return PokemonMultipliersmonTypeEl
// }
console.log(pokemons[i].multipliers)
for(let j=0; j<pokemons[i].multipliers.length;j++){
    var h5Element=document.createElement('h5')
    h5Element.textContent="muly:"+movies[i].genres[j]

}





function renderPokemonCandy (pokemon){
    let pokemonCandyEl=document.createElement('div')
    let pokemonCandy=pokemon.candy.split(',')

    for(let candy of pokemonCandy){
        let candyItem=document.createElement('div')
        candyItem.setAttribute('class', 'badge ms-2 me-2 bg-success text-white')
        candyItem.textContent=candy
        pokemonCandyEl.appendChild(candyItem)
    }

    return pokemonCandyEl
}

function renderPokemonRows( pokemons=[]){

    let  rowEl=document.createElement('div')
    rowEl.setAttribute('class', 'row mt-3 g-4 mb-3')

    for(let pokemon of pokemons){
        let pokemonItem=renderPokemonItem(pokemon)
        rowEl.appendChild(pokemonItem)
    }
    return  rowEl
}


containerEl.appendChild(renderPokemonRows(pokemons))

document.body.appendChild(containerEl)