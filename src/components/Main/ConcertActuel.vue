<template>
<div>
    <h4> {{ $t('ConcertActuel.titre') }} </h4>
    <table class="container">
        <tr>
            <td>
                <img src="https://agendaculturel.emstorage.fr/crop350x200/mona-kazu-20180827195907.jpg" class="card-img-top">
            </td>
            <td>
                <strong>Mona Kazu</strong> <br> {{ $t('ConcertActuel.date1') }}<br> {{ $t('ConcertActuel.heure1') }} <br> {{ $t('ConcertActuel.numeroScene1') }} <br>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://agendaculturel.emstorage.fr/crop350x200/tetra-hydro-k-49894898.jpg" class="card1-img-top">
            </td>
            <td>
                <strong>Hydroo</strong> <br> {{ $t('ConcertActuel.date2') }} <br> {{ $t('ConcertActuel.heure2') }} <br> {{ $t('ConcertActuel.numeroScene2') }} <br>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
export default {}
</script>
