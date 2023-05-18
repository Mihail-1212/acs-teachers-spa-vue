<template>
	<div class="search-block">
		<!-- <input class="search-block__input" type="text" placeholder="Search field"> -->
		<button class="btn search-block__btn">
			<font-awesome-icon :icon="['fas', 'magnifying-glass']" />
			<span class="visually-hidden">Поиск</span>
		</button>
	</div>	
</template>

<script>
export default {
	name: "SearchBlockLayout"
}
</script>

<style lang="scss">

/* Search block */

.search-block {
	height: 100%;
	display: flex;
	align-items: stretch;
	justify-content: stretch;
}

.search-block__input {
/*TODO: ADD	*/
}

.search-block__btn {
	text-decoration: none;
	cursor: pointer;
	padding: 10px 20px;
	font-size: 14pt;
	background-color: transparent;
	border: 3px solid transparent;
	border-radius: 10px;

	color: inherit;
}

.search-block__btn:hover {
	border-color: var(--dark-text-color);
}
</style>