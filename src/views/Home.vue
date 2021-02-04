<template>
<div>
   
    <h1> {{ $t('home.titre') }} </h1>
    <Alertes></Alertes>
    <ConcertActuel></ConcertActuel>
    <ConcertProchain></ConcertProchain>
    <Actu></Actu>
    <Presentation></Presentation>
</div>
</template>

<script>
import Alertes from '../components/Main/Alertes.vue'
import ConcertActuel from '../components/Main/ConcertActuel.vue'
import ConcertProchain from '../components/Main/ConcertProchain.vue'
import Actu from '../components/Main/Actu.vue'
import Presentation from '../components/Main/Presentation.vue'

export default {
    components: {
        Alertes,
        ConcertActuel,
        ConcertProchain,
        Actu,
        Presentation
    }
}
</script>