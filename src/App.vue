<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

:root {
	--body-background-color: #F2F2F7;
	--block-background-color: #FFF;
	--light-text-color: #D0D1D2;
	--gray-text-color: #636e72;

	--additive-text-color: #422F8A;
	--additive-ligth-text-color: #7459D9;

	--dark-text-color: #11263C;

	/* Sizing  */
	--block-gap: .4rem;
	--addition-container-width: 250px;
}


* {
	box-sizing: border-box;
}

/* Body styles */
body {
	margin: 0;
	padding: 0;
	min-height: 100vh;

}


/* Utils */

.header-delimiter {
	height: 80px;
	display: flex;
}

.container-wrapper {
	display: flex;
	flex-direction: row;
	align-items: center;

	width: 100%;
}

.container-wrapper__main-container {
	flex: 1;
	padding: 10px 20px;

	height: 100%;
}

.container-wrapper__addition-container {
	padding: 10px 10px;
	width: var(--addition-container-width);

	height: 100%;
	display: flex;
}

.visually-hidden {
	position: absolute; 
	overflow: hidden; 
	clip: rect(0 0 0 0); 
	height: 1px; width: 1px; 
	margin: -1px; padding: 0; border: 0; 
}



</style>
