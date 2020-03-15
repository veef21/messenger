<template>
    <b-row class="h-100">
        <b-col cols="8">
            <b-card footer-bg-variant="light" footer-border-variant="dark" title="Conversación activa" class="h-100">

                <message-conversation-component
                v-for="message in messages"
                :key="message.id"
                :written-by-me="message.written_by_me">
                {{ message.content }}
            </message-conversation-component>

            <div slot="footer">
                <b-form class="mb-0" @submit.prevent="postMessage" autocomplete="off">
                    <b-input-group>
                        <b-form-input class="text-center"
                        type="text"
                        v-model="newMessage"
                        placeholder="Buscar contacto..."></b-form-input>
                        <b-input-group-append>

                            <b-button type="submit" variant="primary">Enviar</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form>
            </div>
        </b-card>
    </b-col>
    <b-col cols="4">
        <b-img v-bind="imgUser" alt="Circle image"></b-img>
        <p class="mb-1">Usuario Seleccionado</p>
        <hr>
        <b-form-checkbox>
            Desactivar notificación
        </b-form-checkbox>
    </b-col>
</b-row>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            newMessage: '',
            imgUser: { blank: true, rounded:'circle', blankColor: '#777', width: 60, height: 60, class: 'm-1' },
            imgChat: { blank: true, rounded:'circle', blankColor: '#777', width: 48, height: 48, class: 'm-1' }
        }
    },
    mounted() {
        this.getMessages();
    },
    methods: {
        getMessages(){
            axios.get('/messenger/public/api/messages')
            .then((response) => {
               this.messages = response.data;   
           });
        },
        postMessage(){
            const params = {
                to_id: 2,
                content: this.newMessage
            };
            axios.post('/messenger/public/api/messages', params)
            .then((response) => {
                if (response.data.success){
                    this.newMessage = '';
                    this.getMessages();
                }
           });
        }
    }
}
</script>
