//js file regarding fetching pokemon sprites 
document.querySelector('.butt').addEventListener('click',()=>{
    let search=document.querySelector('.search').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then(res=>
    res.json()
).then(val=>{
    document.querySelector('.empty').innerHTML=
    `<img src="${val.sprites.back_default}">`
}
).catch(err=>{
    document.querySelector('.empty').innerHTML='Not found'
})
})
