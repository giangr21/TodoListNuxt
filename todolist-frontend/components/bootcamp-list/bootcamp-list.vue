<template>
  <ul class="list">
    <transition-group name="list">
      <li
        v-for="item in itemsList"
        v-bind:key="item._id"
        :class="{'list__item--completed': item.checked}"
        class="list__item"
      >
        {{ item.description }}
        <span class="options">
          <button
            @click="actionItemList('delete', item)"
            class="remove-item"
          >
            <img
              class="icon"
              src="/icon-delete.svg"
              alt="Delete task"
            />
          </button>
          <button
            @click="actionItemList('toggle', item, item.checked == 1 ? '2' : '1')"
            class="complete-item"
          >
            <img
              class="icon"
              src="/icon-check.svg"
              alt="Complete task"
            />
          </button>
        </span>
      </li>
    </transition-group>
  </ul>
</template>

<script src="./bootcamp-list.js" />
<style src="./bootcamp-list.scss" lang="scss" scoped />
