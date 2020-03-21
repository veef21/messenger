import Vue from 'vue'
import Vuex from 'vuex'

// Install Vuex
Vue.use(Vuex);

//Un "store" es básicamente un contenedor que contiene el estado de su aplicación.
export default new Vuex.Store({
    state: {
        messages: [],
        selectedConversation: null,
        conversations: [],
        querySearch: '',
        user: null
    },
    mutations: {
        newMessagesList (state, messages) {
            state.messages = messages;
        },
        addMessage(state, message) {
            const conversation = state.conversations.find((conversation) => {
                return conversation.contact_id == message.from_id || 
                    conversation.contact_id == message.to_id;
            });

            const author = state.user.id === message.from_id ? 'Tú' : conversation.contact_name;
            
            conversation.last_message = `${author}: ${message.content}`;
            conversation.last_time = message.created_at;

            if (state.selectedConversation.contact_id == message.from_id
                || state.selectedConversation.contact_id == message.to_id)
                state.messages.push(message);
        },
        selectConversation (state, conversation) {
            state.selectedConversation = conversation;
        },
        newQuerySearch (state, newValue) {
            state.querySearch = newValue;
        },
        newConversationsList (state, conversations) {
            state.conversations = conversations;
        },
        setUser (state, user) {
            state.user = user;
        }
    },
    actions: {
        getMessages(context, conversation) {
            axios.get(`/api/messages?contact_id=${conversation.contact_id}`)
            .then(
                response => {
                    context.commit('selectConversation', conversation);
                    context.commit('newMessagesList', response.data);
                }
            );
        },
        getConversations(context) {
            return axios.get('/api/conversations')
                .then(response => 
                    context.commit('newConversationsList', response.data)
                );
        },
        postMessage(context, newMessage) {
            const params = {
                to_id: context.state.selectedConversation.contact_id,
                content: newMessage
            };

           return axios.post('/api/messages', params)
            .then(response => {
                if (response.data.success) {
                    const message = response.data.message;
                    message.written_by_me = true;
                    context.commit('addMessage', message);
                }
            });
        }
    },
    getters: {
        conversationsFiltered(state) {
            return state.conversations.filter(
                conversation => 
                    conversation.contact_name
                        .toLowerCase()
                        .includes(state.querySearch.toLowerCase())
            );
        },
        getConversationById(state) {
            return conversationId => {
                return state.conversations.find(
                    conversation => conversation.id == conversationId
                );
            };            
        }
    }
});
