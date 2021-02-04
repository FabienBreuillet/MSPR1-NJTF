<template>
<div class=header>
    <nav class="mobilescreen">
        <div title="Menu" id="menuToggle">
            <div class='newburgerintown'>
                <input type="checkbox">
                <table id="menu">
                    <tr>
                        <td>
                            <img src="https://zupimages.net/up/21/03/s1by.png">
                        </td>
                        <td>
                            <router-link to="/">{{ $t('menu.accueil') }} </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://zupimages.net/up/21/03/mfrm.png">
                        </td>
                        <td>
                            <router-link to="/Programme">{{ $t('menu.programme') }}</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://zupimages.net/up/21/03/4lug.png">
                        </td>
                        <td>
                            <router-link to="/Actus">{{ $t('menu.actu') }}</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://zupimages.net/up/21/03/5dqr.png">
                        </td>
                        <td>
                            <router-link to="/Carte">{{ $t('menu.carte') }}</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://zupimages.net/up/21/03/bwt6.png">
                        </td>
                        <td>
                            <router-link to="/Nospartenaires">{{ $t('menu.partenaires') }}</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://zupimages.net/up/21/03/hr8c.png">
                        </td>
                        <td>
                            <router-link to="/FAQ">FAQ</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://zupimages.net/up/21/03/q1me.png">
                        </td>
                        <td>
                            <router-link to="/Contact">Contact</router-link>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </nav>
</div>
</template>
