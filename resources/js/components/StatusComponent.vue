<template>
	<b-img v-bind="imgAct" rounded="circle" blank width="10" height="10" alt="Status"
	:title="online ? 'Conectado' : 'Desconectado'"
	:blank-color="online ? 'green' : 'gray'" />
</template>

<script>
export default {
	props: {
		online: Boolean
	},
	data() {
		return {
			imgAct: { blank: true, width: 10, height: 10 }
		};
	},
}
</script>