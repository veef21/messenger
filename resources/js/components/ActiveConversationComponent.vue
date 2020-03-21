<template>
    <b-row class="h-100">
        <b-col cols="8">
            <b-card no-body
                    footer-bg-variant="light"
                    footer-border-variant="dark"
                    class="h-100">
                    <b-card-body class="card-body-scroll"> 
                        <message-conversation-component 
                                v-for="message in messages" :key="message.id"
                                :written-by-me="message.written_by_me"
                                :image="message.written_by_me ? myImage : selectedConversation.contact_image">
                                {{ message.content }}
                        </message-conversation-component>
                    </b-card-body>
                    <div slot="footer">
                        <b-form class="mb-0" @submit.prevent="postMessage" autocomplete="off">
                            <b-input-group>
                                <b-form-input class="text-center"
                                        type="text"
                                        v-model="newMessage"
                                        placeholder="Escribe un mensaje...">
                                </b-form-input>
                                <b-input-group-append>
                                    <b-button type="submit" variant="primary">Enviar</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form>
                    </div>
                </b-card>
            </b-col>
            <b-col cols="4">
                <b-img :src="selectedConversation.contact_image" v-bind="imgUser" alt="Imagen del usuario"></b-img>
                <p class="mb-1">{{ selectedConversation.contact_name }}</p>
                <hr>
                <b-form-checkbox>
                    Desactivar notificación
                </b-form-checkbox>
            </b-col>
        </b-row>
</template>

<style> 
.card-body-scroll {
    max-height: calc(100vh - 121px);
    overflow-y: auto;
}
</style>

<script>
    export default {
        data() {
            return {
                newMessage: '',
                imgUser: { rounded:'circle', width: 48, height: 48, class: 'm1' },
            };
        },
        methods: {
            postMessage() {
                this.$store
                .dispatch('postMessage', this.newMessage)
                .then(() => {
                    this.newMessage = '';
                });
            },
            scrollToBottom() {
                const el = document.querySelector('.card-body-scroll');
                el.scrollTop = el.scrollHeight;
            }
        },
        computed: {
            myImage() {
                return `/users/${this.$store.state.user.image}`
            },
            messages() {
                return this.$store.state.messages;
            },
            selectedConversation() {
                return this.$store.state.selectedConversation;
            },
        },
        updated() {
            this.scrollToBottom();
            console.log('messages ha cambiado');
        }
    }
</script>
