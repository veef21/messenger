<template>
    <b-media :right-align="writtenByMe" vertical-align="center" class="mb-2">
        <template v-slot:aside>
            <b-img v-bind="imgChat" alt="2"></b-img>
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
        writtenByMe: Boolean
    }, 
    data() {
        return {
            content: 'abc',
            imgChat: { blank: true, rounded:'circle', blankColor: '#777', width: 48, height: 48, class: 'm-1' }
        };
    },
    mounted() {
        //console.log("writtenByMe", this.writtenByMe);
        }
}
</script>
