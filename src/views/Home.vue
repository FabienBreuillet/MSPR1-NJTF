<template>
<div>
    <Menu></Menu>    
    <h1> {{ $t('home.titre') }} </h1>
    

    <Alertes></Alertes>
    <ConcertActuel></ConcertActuel>
    <ConcertProchain></ConcertProchain>
     <router-link to="/nospartenaires" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Toutes nos actus</router-link>
    <Actu></Actu>
    <Presentation></Presentation>
    
    <router-link to="/Carte">La carte</router-link> <br>
    <router-link to="/Contact">Contact</router-link><br>
    <router-link to="/Programme">Le programme du festival</router-link><br>
    <router-link to="/FAQ">FAQ</router-link><br>
    <button type="button" class="btn btn-primary btn-sm">Small button</button>

</div>
</template>

<script>
import Alertes from '../components/Main/Alertes.vue'
import ConcertActuel from '../components/Main/ConcertActuel.vue'
import ConcertProchain from '../components/Main/ConcertProchain.vue'
import Actu from '../components/Main/Actu.vue'
import Presentation from '../components/Main/Presentation.vue'
import Menu from '../components/UI/Menu.vue'

export default {
    components: {
        Alertes,
        ConcertActuel,
        ConcertProchain,
        Actu,
        Presentation,
        Menu
    }
}
</script>