<template>
  <div class="header">
    <img class="header-img" src="../assets/logo.png" alt="logo" />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid white;
}
.header-img {
  width: 100%;
  max-width: 500px;
  margin: auto;
}

@media (max-width: 1024px) {
  .header-img {
    width: 60%;
  }
}
</style>
