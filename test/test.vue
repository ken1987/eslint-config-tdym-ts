<template>
  <div>
    <Test
      v-for="i in 8"
      :key="i"
      :prop-a="a"
      long-text="loooooooooooooooongText"
    >
      test
    </Test>
  </div>
</template>
<script lang="ts" src="./test.ts"></script>
