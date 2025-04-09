const forgotPasswordTemplate = ({ name, otp })=>{
    return `
<div>
    <p>Mr/Mlle, ${name}</p>
    <p>Votre requette de changement de mot de passe. Veuillez utilisé le code OTP pour changer votre mot de passe.</p>
    <div style="background:yellow; font-size:20px;padding:20px;text-align:center;font-weight : 800;">
        ${otp}
    </div>
    <p>Ce code otp est d'une (1) heure de validité. Entrer ce code otp sur le site Agro sfer pour continuer.</p>
    <br/>
    </br>
    <p>Merci!</p>
    <p>Agro sfer</p>
</div>
    `
}

export default forgotPasswordTemplate