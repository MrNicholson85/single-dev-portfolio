<template>
  <div class="sdp-container pt-[100px]">
    <div class="flex flex-nowrap justify-between mb-[60px] content-center">
      <h1>Project</h1>
      <div class="contact-btn">contact me</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[69px]">
      <projectItemVue>
        <template #projectImage>
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ax9kvjgksws1lz8vrlim.jpg"
          />
        </template>
        <template #viewProject>
          <a
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            href="https://audiophile-ebon.vercel.app/"
            target="_blank"
            >View Project</a
          >
        </template>
        <template #viewCode>
          <NuxtLink
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            to="https://github.com/MrNicholson85/audiophile"
            >View Code</NuxtLink
          >
        </template>
        <template #itemTitle>
          <h3>Audiophile e-commerce website</h3>
        </template>
        <template #itemSkills>
          <ul class="flex gap-x-4">
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              Vue Js
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              Nuxt
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              HTML
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              Tailwind
            </li>
          </ul>
        </template>
      </projectItemVue>
      <projectItemVue>
        <template #projectImage>
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/t26y9p3veejvbc9biv3f.jpg"
          />
        </template>
        <template #viewProject>
          <NuxtLink
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            to="https://stat-preview-challenge.vercel.app/"
            >View Project</NuxtLink
          >
        </template>
        <template #viewCode>
          <NuxtLink
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            to="https://github.com/MrNicholson85/StatPreviewChallenge"
            >View Code</NuxtLink
          >
        </template>
        <template #itemTitle>
          <div>Stats preview card component</div>
        </template>
        <template #itemSkills>
          <ul class="flex gap-x-4">
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              HTML
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              SCSS
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              Bootstrap
            </li>
          </ul>
        </template>
      </projectItemVue>
      <projectItemVue>
        <template #projectImage>
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/qqz8vfg0jzmrtk2liteo.jpg"
          />
        </template>
        <template #viewProject>
          <NuxtLink
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            to="https://expense-chart-component-eight.vercel.app/"
            >View Project</NuxtLink
          >
        </template>
        <template #viewCode>
          <NuxtLink
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            to="https://github.com/MrNicholson85/StatPreviewChallenge"
            >View Code</NuxtLink
          >
        </template>
        <template #itemTitle>
          <div>Expenses chart component</div>
        </template>
        <template #itemSkills>
          <ul class="flex gap-x-4">
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              JavaScript
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              SCSS
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              HTML
            </li>
          </ul>
        </template>
      </projectItemVue>
      <projectItemVue>
        <template #projectImage>
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/zvkqvpshdas9rtdkubkx.jpg"
          />
        </template>
        <template #viewProject>
          <NuxtLink
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            to="https://photosnap-rho.vercel.app/"
            >View Project</NuxtLink
          >
        </template>
        <template #viewCode>
          <NuxtLink
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            to="https://github.com/MrNicholson85/photosnap"
            >View Code</NuxtLink
          >
        </template>
        <template #itemTitle>
          <div>Photosnap multi-page website</div>
        </template>
        <template #itemSkills>
          <ul class="flex gap-x-4">
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              Vue
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              SCSS
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              JavaScript
            </li>

            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              HTML
            </li>
          </ul>
        </template>
      </projectItemVue>
      <projectItemVue>
        <template #projectImage>
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ksbsn4xdmhyssrra7ztz.jpg"
          />
        </template>
        <template #viewProject>
          <NuxtLink
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            to="https://planet-facts-challenge-vue.vercel.app/"
            >View Project</NuxtLink
          >
        </template>
        <template #viewCode>
          <NuxtLink
            class="uppercase border-[#4EE1A0] border-b-[2px]"
            to="https://github.com/MrNicholson85/Planet-Facts-Challenge-Vue"
            >View Code</NuxtLink
          >
        </template>
        <template #itemTitle>
          <div>Planets fact site</div>
        </template>
        <template #itemSkills>
          <ul class="flex gap-x-4">
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              Vue
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              SCSS
            </li>
            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              JavaScript
            </li>

            <li
              class="hover:border-[#4EE1A0] hover:border-b-[2px] border-b-[2px] border-transparent"
            >
              HTML
            </li>
          </ul>
        </template>
      </projectItemVue>
    </div>
  </div>
</template>

<script setup>
import projectItemVue from "./modules/projectItem.vue";
</script>

<style scoped></style>
