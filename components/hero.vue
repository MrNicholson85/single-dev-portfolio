<template>
  <div class="hero sdp-container hero__container">
    <div class="block md:grid sdp-grid">
      <div
        class="hero-image bg-cover mb-10 mb:mb-0 bg-center -z-[1] w-full block md:hidden hero_bg_image"
      ></div>
      <div
        class="hero-content block md:grid lg:h-[407px] w-full md:w-[445px] lg:w-[906px]"
      >
        <h1 class="hero_heading">
          Nice to meet you! I'm
          <span class="heading_callout">Darryl Nicholson</span>.
        </h1>
        <p class="hero_text">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <div class="hero_contact_btn">Contact Me</div>
      </div>
      <div
        class="hero-image bg-cover bg-center -z-[1] w-full hidden md:block hero_bg_image"
      ></div>
    </div>
  </div>
</template>

<script setup>
import HeroImg from "../assets/images/image-profile-desktop.webp";
</script>

<style scoped>
.sdp-grid {
  grid-template-columns: repeat(5, 1fr);

  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  height: 100%;
}
.hero-content,
.hero-image {
  grid-row: 1 / 2;
}

.hero-image {
  grid-column: 4 / -1;
}

.hero-content {
  grid-column: 1 / -1;
  align-self: center;
}
.hero::before {
  content: "";
  display: flex;
  width: 540px;
  height: 129px;
  position: absolute;
  background-image: url("../assets/images/pattern-rings.svg");
  background-repeat: no-repeat;
  left: -260px;
  top: 90px;
  opacity: 0.25;
}

.hero::after {
  content: "";
  left: 54%;
  top: 547px;
  position: absolute;
  display: flex;
  width: 129px;
  height: 129px;
  background-image: url("../assets/images/pattern-circle.svg");
  background-repeat: no-repeat;
}
</style>
