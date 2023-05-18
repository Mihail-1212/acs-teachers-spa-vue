<template>
	<nav class="sub-navigation">
		<ul class="sub-navigation__list">
			<li class="sub-navigation__list-item">
				<a class="link sub-navigation__link" href="#">Dashboard</a>
			</li>
			<li class="sub-navigation__list-item">
				<a class="link sub-navigation__link" href="#">Список студентов</a>
			</li>
			<li class="sub-navigation__list-item">
				<a class="link sub-navigation__link sub-navigation__link--active" href="#">События</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "SubNavbarLayout"
}
</script>

<style lang="scss" scoped>
/* NAV BLOCK  */

.sub-navigation {
	display: flex;
	flex-direction: row;
	align-items: stretch;
	height: 100%;
}

.sub-navigation__list {
	/* Disable list styles */
	list-style-type: none;
	padding: 0;
	margin: 0;

	display: flex;
	flex-direction: row;
	align-items: stretch;
	height: 100%;
}

.sub-navigation__list-item {
	display: flex;
	align-items: stretch;
}

.sub-navigation__list-item:not(:last-child) {
	margin-right: 1rem;
}

.sub-navigation__link {
	padding: 8px 12px;
	display: flex;
	align-items: center;
	font-size: 14pt;

	position: relative;
	transition: .2s;
}

.sub-navigation__link:after {
	position: absolute;
	bottom: 0; left: 50%;
	transform: translateX(-50%);
	width: 0;

	content: "";
	border-bottom: 1px solid var(--dark-text-color);
	transition: .2s;
}

.sub-navigation__link:hover:after {
	width: 60%;
}

.sub-navigation__link:active {
	color: var(--additive-text-color);
}

.sub-navigation__link:active:after {
	width: 100%;
	border-color: var(--additive-text-color);
}

.sub-navigation__link--active {}

.sub-navigation__link--active:after {
	border-width: 3px;
	width: 80%;
}

</style>