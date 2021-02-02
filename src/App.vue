<template>
<div id="app">
    <div id="wrapper">
        <Header />
        <div class="container">
            <router-view />
            <Footer />
        </div>
    </div>
</div>
</template>

<script>
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

export default {
    name: "App",
    components: {
        Header,
        Footer,

    }
};
</script>
