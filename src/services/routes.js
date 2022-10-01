
import WelcomePage from "./../views/WelcomePage.vue";
import UserProfilePage from "./../views/UserProfilePage.vue";
import FirstInputRoom from "./../views/FirstInputRoom.vue";
import MasterDashboard from "./../views/MasterDashboard.vue";
import MasterPasswordPage from "./../views/MasterPasswordPage.vue";

export default [
    { path: '/', component: WelcomePage },
    { path: '/roomPlayer', component: FirstInputRoom },
    { path: '/playerProfile/:firstName', component: UserProfilePage },

    { path: '/gameMasterPassword', component: MasterPasswordPage },
    { path: '/gameMasterProfile', component: MasterDashboard }
]
