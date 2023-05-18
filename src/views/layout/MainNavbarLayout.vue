<template>
	<nav class="main-navigation">
		<ul class="main-navigation__list">
			<li class="main-navigation__list-item">
				<a class="sidebar-btn main-navigation__link sidebar-btn--red" href="#">
					<font-awesome-icon :icon="['fas', 'school']" :class="['sidebar-btn__icon']" />
					<span class="sidebar-btn__text">Дисциплины</span>
				</a>
			</li>
			<li class="main-navigation__list-item">
				<a class="sidebar-btn main-navigation__link sidebar-btn--green" href="#">
					<font-awesome-icon :icon="['fas', 'graduation-cap']" :class="['sidebar-btn__icon']" />
					<span class="sidebar-btn__text">Учебные группы</span>
				</a>
			</li>
			<li class="main-navigation__list-item">
				<a class="sidebar-btn main-navigation__link sidebar-btn--blue" href="#">
					<font-awesome-icon :icon="['fas', 'calendar-days']" :class="['sidebar-btn__icon']" />
					<span class="sidebar-btn__text">Года обучения</span>
				</a>
			</li>
			<li class="main-navigation__list-item">
				<a class="sidebar-btn main-navigation__link sidebar-btn--red" href="#">
					<font-awesome-icon :icon="['fas', 'book']" :class="['sidebar-btn__icon']" />
					<span class="sidebar-btn__text">Журналы</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "MainNavbarLayout"
}
</script>

<style lang="scss">
/*
.main-navigation {
	.main-navigation__list {
		.main-navigation__list-item {
			.main-navigation__link {}
		}
	}
}
*/

.main-navigation {
	padding: 15px 0;
}

.main-navigation__list {
	/* Disable list style */
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.main-navigation__list-item {

}

.main-navigation__link {
}
</style>