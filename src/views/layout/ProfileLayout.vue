<template>
	<div class="profile-block">
		<div class="profile-block__section short-profile-info">
			<p class="short-profile-info__name">Михаил Мокрушин Анатольевич</p>
			<button class="short-profile-info__btn-toggle-profile-menu profile-menu profile-block__btn">
				<span class="visually-hidden profile-menu__text">Подробнее</span>
				<font-awesome-icon :icon="['fas', 'list']" :class="['profile-menu__icon']" />
			</button>
		</div>
		<div class="profile-block__section">
			<button class="btn btn-brightness profile-block__btn">
				<span class="visually-hidden btn-brightness__text">Переключение режима</span>
				<font-awesome-icon :icon="['fas', 'moon']" :class="['btn-brightness__icon']" />
			</button>
		</div>
	</div>	
</template>

<script>
export default {
	name: "ProfileLayout"
}
</script>

<style lang="scss" scoped>
/* Profile block */

.profile-block {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: .8rem;

	align-items: center;
}

.profile-block__section {

}

.short-profile-info {
	display: grid;
	grid-template-columns: 1fr auto;

	align-items: center;
}

.short-profile-info__name {
	margin: 0;

	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.short-profile-info {}

.profile-block__btn {
	height: 2.5rem; width: 2.5rem;

	cursor: pointer;
	
	font-size: 12pt;
	background-color: transparent;

	border: 1px solid transparent;
	border-radius: 100%;

	transition: .2s;

	color: inherit;
}

.profile-block__btn:hover {
	color: var(--additive-text-color);
	border-color: var(--additive-text-color);
}

.profile-block__btn:active {
	background-color: var(--additive-text-color);
	color: var(--block-background-color);
}

.short-profile-info {

}

.btn-brightness {

}

.btn-brightness__icon {

}
</style>