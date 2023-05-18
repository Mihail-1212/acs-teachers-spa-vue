<template>
  <div class="body">
    <SidebarLayout></SidebarLayout>

    <div class="body__content">
      <HeaderLayout></HeaderLayout>
      <ContentLayout></ContentLayout>
    </div>
  </div>
</template>

<script>
import SidebarLayout from "@/views/layout/SidebarLayout.vue"
import HeaderLayout from "@/views/layout/HeaderLayout.vue"
import ContentLayout from "@/views/layout/ContentLayout.vue"

export default {
  name: 'MainView',
  components: { SidebarLayout, HeaderLayout, ContentLayout }
}
</script>

<style lang="scss">
.body {
  display: flex;
  flex-direction: row;
  gap: var(--block-gap);
  font-size: 12pt;

  background-color: var(--body-background-color);

  font-family: 'Roboto', sans-serif;
  color: var(--dark-text-color);
}

.body--dark {
  --body-background-color: #1C1C1E;
  --block-background-color: #2C2C2E;
  --dark-text-color: #fff;
  --additive-text-color: #5f27cd;
}

.body__sidebar {
}


.body__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--block-gap);
}

/* Buttons, links, inputs etc */

.btn {
  text-decoration: none;
  cursor: pointer;
}

.link {
  color: inherit;
  text-decoration: inherit;
}

.hamburger {}

</style>