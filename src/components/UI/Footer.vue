<template>
<div>
    <SocialNetwork></SocialNetwork>
    <div class="container">
        <div class="row" id="contact">
            <div class="col">
                <h5 class="white-text skinny">Informations utiles</h5>
                <h6 class="grey-text text-lighten-4">
                    <div class="valign-wrapper">
                        <i class="material-icons">Email :&nbsp;</i><span class="contact"><a href="mailto:test@wistest.com" target="_top" style="color: white;">Nationsounds@gmail.com</a></span>
                    </div>
                    <div class="valign-wrapper">
                        <i class="material-icons">Http :&nbsp; </i><span class="contact"><a href="https://www.liveevents.com/" style="color: white;">www.LiveEvents.com</a></span>
                    </div>
                    <div class="valign-wrapper">
                        <i class="material-icons">Adresse :&nbsp; </i><span class="contact"><a href="" style="color: white;">12 rue du Lavoir 75018 PARIS</a></span>
                    </div>
                    <div class="valign-wrapper">
                        <i class="material-icons">Téléphone :&nbsp; </i><span class="contact"><a href="" style="color: white;">+(33) 1 40 65 77 78 90</a></span>
                    </div>
                    <div class="valign-wrapper">
                        <i class="material-icons">Mentions Légales :&nbsp; </i><span class="contact"><a href="index.html#/Mentions" style="color: white;">ICI</a></span>
                    </div>
                </h6>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SocialNetwork from '../UI/SocialNetwork.vue'
export default {
    components: {
        SocialNetwork
    }
};
</script>
