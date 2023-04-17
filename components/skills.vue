<template>
  <div
    class="skills sdp-container border-[#ffffff] border-t-[2px] border-b-[2px] md:border-b-[0] pb-[40px] md:pb-[0] pt-[42px] lg:mt-[104px] md:mt-[60px] mt-[80px]"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-[30px] text-center md:text-left"
    >
      <skillItem>
        <template #skill>HTML</template>
        <template #length>20</template>
      </skillItem>
      <skillItem>
        <template #skill>CSS</template>
        <template #length>20</template>
      </skillItem>
      <skillItem>
        <template #skill>Javascript</template>
        <template #length>15+</template>
      </skillItem>
      <skillItem>
        <template #skill>WordPress</template>
        <template #length>15+</template>
      </skillItem>
      <skillItem>
        <template #skill>Vue Js</template>
        <template #length>2</template>
      </skillItem>
      <skillItem>
        <template #skill>Nuxt Js</template>
        <template #length>2</template>
      </skillItem>
    </div>
  </div>
</template>

<script setup>
import skillItem from "./modules/skillItem.vue";
</script>

<style scoped>
.skills {
  position: relative;
}
.skills::after {
  content: "";
  display: flex;
  width: 540px;
  height: 129px;
  position: absolute;
  background-image: url("../assets/images/pattern-rings.svg");
  background-repeat: no-repeat;
  right: -260px;
  top: 90px;
  opacity: 0.25;
}
</style>
