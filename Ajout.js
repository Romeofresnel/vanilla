const valider= document.querySelector('.btn2')
const bloc= document.querySelector('.bloc-container')
const cote= document.querySelector('.sous')

// valider.addEventListener('click',(e)=>{
//     e.preventDefault()
//     console.log('hello');
// })
//afficher les donnees a l'ecran
async function getTache(){
    const tache = await fetch('http://localhost:5000/tache/', {
        method: 'GET',
        headers:{
            "Accept":"font-end"
        }
    })
        if(tache.ok== true){
            return tache.json()
        }
    throw new Error('ce connecter au serveur')
}
console.log(bloc);
const getData= getTache().then(tache=>
    tache
    .sort((a,b)=> a.updatedAt-b.updatedAt)
    .map((tache)=>
    bloc.innerHTML+=`
    <div class="carte">
        <div class="h4">
            <div class="titres">${tache.titre}</div>
            <div class="info">
                <div class="heure">${tache.updatedAt}</div>
                <i class="fas fa-ellipsis"></i>
            </div>
        </div>
        <div class="p">${tache.contenue}</div>
    </div>
`));
//enregistrer ou poster des donnees
const form= document.querySelector("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const form= e.currentTarget
    const data= new FormData(form)

    const newTache=fetch('http://localhost:5000/tache/',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            titre: data.get('titre'),
            contenue: data.get('contenue')
        })
    }).then(res=> res.json())
    .then(data=> console.log(data))
    .catch(err=> console.log(err))
    console.log(newTache);
})
//animation pour le formuler deplacement avec le clurseur
// const forms= document.querySelector('.form')
// forms.addEventListener('mousedown',(e)=>{
//     form.style.left=e.pageX + "px";
//     form.style.top=e.pageY + "px";
// })
