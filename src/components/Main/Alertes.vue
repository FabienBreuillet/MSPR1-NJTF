<template>
<div id="slider">
    <input checked="" type="radio" name="slider" id="slide1">
    <input type="radio" name="slider" id="slide2">
    <input type="radio" name="slider" id="slide3">
    <input type="radio" name="slider" id="slide4">
    <input type="radio" name="slider" id="slide5">

    <div id="slides">
        <div id="overflow">
            <div class="inner">
                <div class="slide slide_1">
                    <div class="slide-content">
                        <h5> {{ $t('alerte.titreSlide1') }} </h5>
                        <p>{{ $t('alerte.texteSlide1') }}</p>
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">En savoir plus</router-link>
                    </div>
                </div>
                <div class="slide slide_2">
                    <div class="slide-content">
                        <h5>Tests PCR</h5>
                        <p>La tente Covid est ouverte aux tests de 10h à 17h tous les jours</p>
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">En savoir plus</router-link>
                    </div>
                </div>
                <div class="slide slide_3">
                    <div class="slide-content">
                        <h5>Vaccins</h5>
                        <p>Un réunion d'information aura lieue Samedi sous le chapiteau</p>
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">En savoir plus</router-link>
                    </div>
                </div>
                <div class="slide slide_4">
                    <div class="slide-content">
                        <h5>Poste de secours</h5>
                        <p>Nos secouristes sont présents à l'entrée du parc</p>
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">En savoir plus</router-link>
                    </div>
                </div>
                <div class="slide slide_5">
                    <div class="slide-content">
                        <h5>Alerte Covid19</h5>
                        <p>0 cas détecté depuis le début du Festival</p>
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">En savoir plus</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="bullets">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
        <label for="slide5"></label>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>
