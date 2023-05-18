<template>
	<header class="header body__header header-delimiter">
		<div class="header-inner container-wrapper">
			<div class="container-wrapper__main-container header-nav-block">
				<div class="header-nav-block__section">
					<SubNavbarLayout></SubNavbarLayout>
				</div>
				<div class="header-nav-block__section header-nav-block__section--search">
					<SearchBlockLayout></SearchBlockLayout>
				</div>
			</div>

			<div class="container-wrapper__addition-container">
				<ProfileLayout></ProfileLayout>
			</div>
		</div>
	</header>
</template>

<script>
import SubNavbarLayout from "@/views/layout/SubNavbarLayout.vue"
import SearchBlockLayout from "@/views/layout/SearchBlockLayout.vue"
import ProfileLayout from "@/views/layout/ProfileLayout.vue"

export default {
	name: "HeaderLayout",
	components: { SubNavbarLayout, SearchBlockLayout, ProfileLayout }
}
</script>

<style lang="scss">
/* Header */

.header {
	background-color: var(--block-background-color);
}

.header-inner {
	
}

.header-inner__main-container {
	flex: 1;
}

.header-nav-block {
	display: flex;
	flex-direction: row;
	align-items: center;

	width: 100%;
}

.header-nav-block__section {
	height: 100%;
}

.header-nav-block__section--search {
	flex: 1;
  
}
</style>
