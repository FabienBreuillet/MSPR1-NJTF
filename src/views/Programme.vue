<template>
<div>
    <table id="v-for-concerts" class="xXx">
        <tr>
            <td><strong>Nom</strong></td>
            <td><strong>Date du début du concert</strong></td>
            <td><strong>Date de fin de concert</strong></td>
            <td><strong>Description</strong></td>
        <tr v-for="(concert,index) in concerts" :key="index">
            <td>
                {{concert.nom}}
            </td>

            <td>
                {{concert.dateDebut.date}}
            </td>
            <td>
                {{concert.dateFin.date}}
            </td>
            <td>
                <router-link to="/" class="btn btn-secondary btn-sm" role="button" aria-pressed="true">Voir la description</router-link>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            concerts: []
        }
    },
    created() {
        this.axios.get("/concert.json").then((response) => {
            console.log(response.data)
            this.concerts = response.data
        })
    },
    methods: {}
}
</script>
