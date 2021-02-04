<template>
<div class="plan">
    <h4>Repérez-vous sur la carte </h4>
    <iframe class="map" src="https://www.google.com/maps/d/embed?mid=1eFBxxfmG-vf5_dQJUu8MM48WyzQTN1fZ" width="370" height="480" z-index="0"></iframe>
</div>
</template>

<style>
.map {
    z-index: 0;
    position: absolute, center;
    border-style: solid;
    border-radius: 15px;
}

.legende {
    color: #ffffff;
}
</style>
