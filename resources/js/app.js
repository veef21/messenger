require('./bootstrap');

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import VueRouter from 'vue-router'

import MessengerComponent from './components/MessengerComponent.vue'
import ExampleComponent from './components/ExampleComponent.vue'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Install VueRouter
Vue.use(VueRouter);;

//window.Vue = require('vue'); //es lo mismo a: import Vue from 'vue'
//window.eventBus = new Vue();

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

/*Vue.component('messenger-component',
	require('./components/MessengerComponent.vue').default
	);*/

Vue.component('status-component',
	require('./components/StatusComponent.vue').default
	);

Vue.component('profile-form-component',
	require('./components/ProfileFormComponent.vue').default
	);

Vue.component('contact-form-component',
	require('./components/ContactFormComponent.vue').default
	);

const routes = [
  { path: '/chat', component: MessengerComponent },
  { path: '/chat/:conversationId', component: MessengerComponent },
  { path: '/example', component: ExampleComponent },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

const app = new Vue({
	el: '#app',
    store,// == store: store, NOTA: cuando un atributo tiene el mismo nombre que la variable se puede abreviar porque estamos usando ecmascript 6.
    router,
    methods:{
    	logout(){
    		document.getElementById('logout-form').submit();
    	}
    }
});
