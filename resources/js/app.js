require('./bootstrap');

window.Vue = require('vue');

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('contact-component',
	require('./components/ContactComponent.vue').default
	);

Vue.component('contact-list-component',
	require('./components/ContactListComponent.vue').default
	);

Vue.component('active-conversation-component',
	require('./components/ActiveConversationComponent.vue').default
	);

Vue.component('message-conversation-component',
	require('./components/MessageConversationComponent.vue').default
	);

Vue.component('messenger-component',
	require('./components/MessengerComponent.vue').default
	);


const app = new Vue({
    el: '#app',
    methods:{
    	logout(){
    		document.getElementById('logout-form').submit();
    	}
    }
});
