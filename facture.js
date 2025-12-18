const nom=document.getElementById("nom");
const prenom=document.getElementById("prenom");
const prix_clavier=document.getElementById("prix_clavier");
const qte_clavier=document.getElementById("qte_clavier");
const prix_souris=document.getElementById("prix_souris");
const qte_souris=document.getElementById("qte_souris");
const prix_scanner=document.getElementById("prix_scanner");
const qte_scanner=document.getElementById("qte_scanner");
document.getElementById("btn_vaalider").addEventListener('click',()=>{
document.querySelectorAll('.error').forEach((e)=>e.textcontent="")
let test=true
if(nom.value.trim()===""){
    nom.parentElement.querySelector(".error").textContent="Veuillez vérifier le nom!";
            test=false;
}
if(prenom.value.trim()===""){
    prenom.parentElement.querySelector(".error").textContent="Veuillez vérifier le prenom!";
            test=false;
}
if(qte_clavier.value==="" || Number(qte_clavier)<=0)
{
    qte_clavier.parentElement.querySelector(".error").textContent="Veuillez vérifier la quantité";
            test=false;
}
if(prix_clavier.value==="" || Number(prix_clavier)<=0)
{
    prix_clavier.parentElement.querySelector(".error").textContent="Veuillez vérifier le prix";
            test=false;
}
if(qte_souris.value==="" || Number(qte_souris)<=0)
{
    qte_souris.parentElement.querySelector(".error").textContent="Veuillez vérifier la quantité";
            test=false;
}
if(prix_souris.value==="" || Number(prix_souris)<=0)
{
    prix_souris.parentElement.querySelector(".error").textContent="Veuillez vérifier le prix";
            test=false;
}
if(qte_scanner.value==="" || Number(qte_scanner)<=0)
{
    qte_scanner.parentElement.querySelector(".error").textContent="Veuillez vérifier la quantité";
            test=false;
}
if(prix_scanner.value==="" || Number(prix_scanner)<=0)
{
    prix_scanner.parentElement.querySelector(".error").textContent="Veuillez vérifier le prix";
            test=false;
}
})
