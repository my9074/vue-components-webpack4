<template>
  <div class="sk-container">
    <div class="sk-container-code--title">
      <h2>{{title}}</h2>
      <small>{{description}}</small>
    </div>
    <div class="sk-container-code--demo">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Container',
  props: ['title', 'description']
}
</script>

<style lang="less" scoped>
  .sk-container {
    border: 1px solid #ebebeb;
    padding: 20px;
    border-radius: 4px;
    background-color: #f4f4f4;

    &-code--title {
      h2 {
        padding: 0;
        margin: 0;
        border-bottom: none;
        font-size: 18px;
      }

      small {
        font-size: 14px;
        display: inline-block;
        margin: 10px 0;
        color: #5e6d82;
      }
    }
  }
</style>


