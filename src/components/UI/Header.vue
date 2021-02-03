<template>
<div>
    <Menu></Menu>
    <Register></Register>
    <Login></Login>
</div>
</template>

<script>
import Menu from '../UI/Menu.vue'
import Login from '../User/Login.vue'
import Register from '../User/Register.vue'

export default {
    components: {
        Menu,
        Register,
        Login
    }
};
</script>