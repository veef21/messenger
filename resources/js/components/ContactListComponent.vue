<template>
    <b-list-group>
        <contact-component
        v-for="conversation in conversationsFiltered"
        :key="conversation.id"
        :conversation="conversation"
        :selected="isSelected(conversation)"
        @click.native="selectConversation(conversation)">
    </contact-component>
    </b-list-group>
</template>

<script>
export default {
    data() {
        return {
            //selectConversationId: null
        };
    },
    mounted() {
    },
    methods: {
        selectConversation(conversation){
            this.$router.push(`/chat/${conversation.id}`, () => {
                    this.$store.dispatch('getMessages', conversation);
                });
            //this.selectConversationId = conversation.id;
            //this.$store.dispatch('getMessages', conversation);
            //this.$emit('conversationSelected', conversation);
            //eventBus.$emit('example', conversation);
        },
        isSelected(conversation) {
                if (this.selectedConversation)
                    return this.selectedConversation.id === conversation.id;
                return false;
            }
    },
    computed: {
            selectedConversation() {
                return this.$store.state.selectedConversation;
            },
            conversationsFiltered() {
                return this.$store.getters.conversationsFiltered;
            }
        }
}
</script>
