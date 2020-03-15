<template>
	<b-container fluid style="height: calc(100vh - 56px/*104px*/);">
		<b-row class="h-100" no-gutters>
			<b-col cols="4">
				<contact-list-component @conversationSelected="changeActiveConversation($event)"></contact-list-component>
			</b-col>
			<b-col cols="8">
				<active-conversation-component
				v-if="selectConversation"
				:contact-id="selectConversation.contact_id">

			</active-conversation-component> 
		</b-col>
	</b-row>
</b-container>
</template>

<script>
export default {
	data() {
		return {
			selectConversation: null
		};
	},
	mounted() {
		Echo.channel('example')
		.listen('MessageSent', (e) => {
			console.log("Datos retornados -> ", e);
		});
	},
	methods: {
		changeActiveConversation(conversation){
    		//console.log("Nueva seleccion", conversation);
    		this.selectConversation = conversation;
    	}
    }
}
</script>