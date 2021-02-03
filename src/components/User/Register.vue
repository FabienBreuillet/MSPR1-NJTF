<template>
<div>
    <div>
        <a href="/index.html"><img src="https://zupimages.net/up/21/01/fgez.png" alt="" position="fixed" /></a> 
        <!-- Button to open the modal -->
        <button onclick="document.getElementById('id02').style.display='block'"><img src="https://zupimages.net/up/21/03/p9di.png" alt="" /></button>

        <button1 onclick="document.getElementById('id01').style.display='block'"><img src="https://zupimages.net/up/21/03/c3pp.png" alt="" /></button1>

        <!-- The Modal (contains the Sign Up form) -->
        <div id="id01" class="modal">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal"></span>
            <form class="modal-content" action="/action_page.php">
                <div class="container">
                    <h4>Nation <br>Sounds</h4>
                    <p>Création de votre compte</p>
                    <hr>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Entrer Email" name="email" required>

                    <label for="psw"><b>Mot de passe</b></label>
                    <input type="password" placeholder="Entrer Mot de passe" name="psw" required>

                    <label for="psw-repeat"><b>Retaper Mot de passe</b></label>
                    <input type="password" placeholder="Répéter Mot de passe" name="psw-repeat" required>

                    <label>
                        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Se souvenir de moi
                    </label>

                    <p>En créant votre compte, vous acceptez nos conditions générales <a href="#" style="color:#b70258">CGV</a>.</p>

                    <div class="clearfix">
                        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Annuler</button>
                        <button type="submit" class="signup">OK</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {}
</script>
