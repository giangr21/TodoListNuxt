<template>
  <div class="page--todolist">
    <nuxt-link to="/" class="back-link">Back to Beginning</nuxt-link>
    <div :class="{active: itemsList.length > 0}" class="content">
      <bootcamp-input
        :itemsList="itemsList"
        @addItemList="addItemList"
      />
      <bootcamp-list
        v-if="itemsList.length"
        :itemsList="itemsList"
        @actionItemList="actionItemList"
      />
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" />