
import WelcomePage from "./components/Pages/WelcomePage.vue";
import UserProfilePage from "./components/Pages/UserProfilePage.vue";
import FirstInputRoom from "./components/Pages/FirstInputRoom.vue";
import MasterDashboard from "./components/Pages/MasterDashboard.vue";
import MasterPasswordPage from "./components/Pages/MasterPasswordPage.vue";

export default [
    { path: '/', component: WelcomePage },
    { path: '/roomPlayer', component: FirstInputRoom },
    { path: '/playerProfile/:firstName', component: UserProfilePage },

    { path: '/gameMasterPassword', component: MasterPasswordPage },
    { path: '/gameMasterProfile', component: MasterDashboard }
]
