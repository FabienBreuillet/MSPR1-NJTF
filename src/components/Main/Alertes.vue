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
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">{{ $t('alerte.button') }}</router-link>
                    </div>
                </div>
                <div class="slide slide_2">
                    <div class="slide-content">
                        <h5>{{ $t('alerte.titreSlide2') }}</h5>
                        <p>{{ $t('alerte.texteSlide2') }}</p>
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">{{ $t('alerte.button') }}</router-link>
                    </div>
                </div>
                <div class="slide slide_3">
                    <div class="slide-content">
                        <h5>{{ $t('alerte.titreSlide3') }}</h5>
                        <p>{{ $t('alerte.texteSlide3') }}</p>
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">{{ $t('alerte.button') }}</router-link>
                    </div>
                </div>
                <div class="slide slide_4">
                    <div class="slide-content">
                        <h5>{{ $t('alerte.titreSlide4') }}</h5>
                        <p>{{ $t('alerte.texteSlide4') }}</p>
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">{{ $t('alerte.button') }}</router-link>
                    </div>
                </div>
                <div class="slide slide_5">
                    <div class="slide-content">
                        <h5>{{ $t('alerte.titreSlide5') }}</h5>
                        <p>{{ $t('alerte.texteSlide5') }}</p>
                        <router-link to="/Actualites" type="button" class="btn btn-secondary btn-sm">{{ $t('alerte.button') }}</router-link>
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
