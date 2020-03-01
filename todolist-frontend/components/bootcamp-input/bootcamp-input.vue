<template>
  <div>
    <form
      id="todolistbootcamp"
      @submit.prevent="addItemList"
    >
      <label class="title" for="input">
        What will you do
      </label>
      <div class="input-box">
        <input
          id="input"
          :class="{'has-items': itemsList.length, 'alert': this.state == 'warning'}"
          v-model="valueInput"
          type="text"
          :placeholder="getMessagePlaceholder"
          :disabled="this.state == 'warning'"
          autocomplete="off"
        >
        <button
          :class="{active: valueInput.length}"
          class="add-item"
        >
          <img class="icon" src="/icon-plus.svg" alt="Add item" />
        </button>
      </div>
    </form>
  </div>
</template>

<script src="./bootcamp-input.js" />
<style src="./bootcamp-input.scss" lang="scss" scoped />
