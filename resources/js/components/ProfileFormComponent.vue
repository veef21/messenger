<template>
	<b-container>
		<b-row align-h="center">
			<b-col cols="6">
				<b-card title="Modificar Perfil" header-tag="header" class="my-4">
					<b-form action="" method="post" enctype="multipart/form-data">
						<input type="hidden" name="_token" v-model="csrfToken">

						<b-form-group label="Correo Electrónico:">
							<b-form-input type="email" disabled
							name="email" v-model="user.email"
							placeholder="Ingresa tu correo">
						</b-form-input>
					</b-form-group>

					<b-form-group label="Usuario:">
						<b-form-input type="text" required
						name="name" v-model="user.name"
						placeholder="Ingresa tu usuario"
						></b-form-input>
					</b-form-group>

					<b-form-group label="Nueva contraseña:"
					description="Sólo si se desea modificar.">
					<b-form-input type="password"
					name="password"
					placeholder="Ingresa una nueva contraseña"
					></b-form-input>
				</b-form-group>

				<b-form-group label="Imagen de perfil:"
				description="Sólo si se desea modificar.">
				<b-input-group class="mb-2">
					<b-form-file name="image" multiple placeholder="Sube una nueva imagen">
						<template slot="file-name" slot-scope="{ names }">
							<b-badge variant="dark">{{ names[0] }}</b-badge>
							<b-badge v-if="names.length > 1" variant="dark" class="ml-1">
								+ {{ names.length - 1 }} More files
							</b-badge>
						</template>
					</b-form-file>
					<b-img v-b-modal.viewImg style="cursor: pointer" :src="image" rounded="right" width="50" height="38" alt="Imagen de perfil" title="Ver imagen Actual" class="m1"/>
				</b-input-group>
			</b-form-group>

			<b-modal id="viewImg" centered hide-footer title="Imagen de perfil">
				<b-img :src="image" rounded centered fluid alt="Imagen de perfil" title="Imagen de perfil" class="m1"/>
			</b-modal>

			<b-button type="submit" variant="primary">Actualizar
			</b-button>
		</b-form>
	</b-card>
</b-col>
</b-row>
</b-container>
</template>

<script>
export default {
	props:{
		user: Object,
		csrfToken: String
	},
	data() {
		return {
		}
	},
	methods: {
	},
	computed: {
		image() {
			return `/users/${this.user.image}`;
		}
	}
}
</script>