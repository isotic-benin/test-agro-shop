const verifyEmailTemplate = ({name,url})=>{
    return`
<p>Mr//Mlle ${name}</p>    
<p>Merci d'avoir choisir note plateforme agrosfershop.</p>   
<a href=${url} style="color:black;background :orange;margin-top : 10px,padding:20px,display:block">
    Vérifier votre adresse email
</a>
`
}

export default verifyEmailTemplate