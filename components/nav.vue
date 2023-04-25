<template>
  <div class="sdp-container relative mt-4 mb-4 mx-auto md:h-8">
    <div class="grid gap-5 md:gap-0 md:flex md:justify-between">
      <div
        class="text-center md:text-left text-8 font-bold leading-8 -tracking-[0.4px]"
      >
        adamkeyes
      </div>
      <div
        class="flex gap-6 md:gap-8 z-10 mx-auto md:mx-0 w-[153px] md:w-[192px] md:pr-[30px]"
      >
        <div><img :src="GitIcon" /></div>
        <div><img :src="FemIcon" /></div>
        <div><img :src="LdIcon" /></div>
        <div><img :src="TwIcon" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import GitIcon from "~~/assets/images/icon-github.svg";
import FemIcon from "~~/assets/images/icon-frontend-mentor.svg";
import LdIcon from "~~/assets/images/icon-linkedin.svg";
import TwIcon from "~~/assets/images/icon-twitter.svg";
</script>

<style scoped></style>
