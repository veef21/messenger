<template>
    <b-media :right-align="writtenByMe" vertical-align="center" class="mb-2">
        <template v-slot:aside>
            <b-img :src="image" v-bind="imgChat" alt="Usuario"/>
        </template>
        <b-card no-body bg-variant="primary" text-variant="white" style="border-radius: 5rem;">
            <b-card-text style="margin: 5px;">
                <slot></slot>
            </b-card-text>                        
        </b-card>
    </b-media>
</template>

<script>
export default {
    props: {
        writtenByMe: Boolean,
        image: String
    }, 
    data() {
        return {
            imgChat: { rounded:'circle', width: 48, height: 48, class: 'm1' }
        };
    },
    mounted() {
        //console.log("writtenByMe", this.writtenByMe);
        }
}
</script>
