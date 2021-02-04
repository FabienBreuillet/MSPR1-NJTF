<template>
<div>
    <h4> {{ $t('ConcertProchain.titre') }}</h4>
    <table>
        <tr>
            <td>
                <img src="https://agendaculturel.emstorage.fr/crop350x200/caravan-palace-30382953.jpg" class="card-img-top">
            </td>
            <td>
                <h3 class="card3-title">Car Palace</h3>
                <p class="card-text">{{ $t('ConcertProchain.date1') }}<br> {{ $t('ConcertProchain.heure1') }} <br>{{ $t('ConcertProchain.numeroScene1') }} <br></p>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://agendaculturel.emstorage.fr/crop350x200/violett-pi-56267975.jpg" class="card1-img-top">
            </td>
            <td>
                <h3 class="card4-title">VioletP</h3>
                <p class="card2-text">{{ $t('ConcertProchain.date2') }} <br> {{ $t('ConcertProchain.heure2') }} <br> {{ $t('ConcertProchain.numeroScene1') }} <br></p>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
export default {}
</script>
