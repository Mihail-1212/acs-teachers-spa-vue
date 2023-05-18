<template>
  <aside class="sidebar body__sidebar">
    <div class="sidebar__inner sidebar-inner">
      <div class="sidebar-inner__section header-delimiter">
        <button class="sidebar__btn sidebar-btn hamburger">
          <font-awesome-icon :icon="['fas', 'bars']" :class="['sidebar-btn__icon']" />
          <span class="sidebar-btn__text">Меню</span>
        </button>
      </div>

      <div class="sidebar-inner__section">
        <MainNavbarLayout></MainNavbarLayout>
      </div>

      <div class="sidebar-inner__section sidebar-inner__section--group-chat">
        <button class="sidebar-btn sidebar-btn--additive">
          <font-awesome-icon :icon="['far', 'message']" :class="['sidebar-btn__icon']" />
          <span class="sidebar-btn__text">Открыть чат</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
import MainNavbarLayout from "@/views/layout/MainNavbarLayout.vue"

export default {
  name: "SidebarLayout",
  components: { MainNavbarLayout }
}
</script>

<style lang="scss">
/* Sidebar */

/*
.sidebar {
  .sidebar__inner {
    .sidebar__section,
    .sidebar__section,
    .sidebar__section
  }
}
*/

.sidebar {
  background-color: var(--block-background-color);
}

.sidebar--opened {

}

.sidebar__inner {
  /* Position */
  position: sticky;
  top: 0;
}

.sidebar-inner {
  /* Styling	*/
  background-color: var(--block-background-color);
  /* Scale */
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  padding: 0 10px;
}

.sidebar-inner__section {

}

.sidebar-inner__section:first-child {
  position: relative;
}

.sidebar-inner__section:first-child:after {
  /* Style	*/
  content: "";
  border: 1px solid var(--light-text-color);
  /* Scale */
  width: 80%;
  /* Position */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.sidebar-inner__section--group-chat {
  margin-top: auto;
  padding: 10px 0;
}

/* Sidebar button styling */

.sidebar__btn {
  margin: auto;
}

.sidebar-btn {
  /* Scale  */
  /*	padding: .8rem 1.2rem;*/
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 3.0rem;
  width: 3.5rem;
  /* Style */
  border: 2px solid  var(--block-background-color);
  border-radius: 15px;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  color: var(--light-text-color);
  background-color: var(--block-background-color);

  transition: .2s;
}	

.sidebar-btn:hover {
  background-color: var(--body-background-color);
}

.sidebar-btn:active {
  color: var(--additive-text-color);
/*	border-color: var(--additive-text-color);*/
}

.sidebar-btn--additive {
  background-color: var(--body-background-color);
  color: var(--additive-text-color);
}

.sidebar-btn--additive:hover {
  background-color: var(--block-background-color);
}

.sidebar-btn__icon {

}

.sidebar-btn__text {
  width: 0;
  display: none;
  
  font-size: 14pt;
  color: var(--additive-ligth-text-color);
}

/* On sidebar open */

.sidebar--opened .sidebar-btn {
	width: initial;
	justify-content: flex-start;
}

.sidebar--opened .sidebar-btn__text {
	display: inline-block;
	width: initial;
}

.sidebar--opened .sidebar-btn__icon {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: none;
	width: 3rem;

	color: var(--additive-ligth-text-color);
}

</style>