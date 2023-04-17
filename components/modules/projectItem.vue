<template>
  <div class="projectItem grid overflow-hidden gap-y-5">
    <slot name="itemImage">
      <slot name="backgroundimage" class="h-[400px] bg-contain relative mb-5">
        <slot name="projectImage">
          <img src="../../assets/images/thumbnail-project-1-large.webp" />
        </slot>
        <div class="projectActive">
          <div class="viewProject uppercase font-bold">
            <slot name="viewProject">
              <NuxtLink to="/" class="viewProject">View Project</NuxtLink>
            </slot>
          </div>
          <div class="viewCode">
            <slot name="viewCode">
              <NuxtLink to="/">View Core</NuxtLink>
            </slot>
          </div>
        </div>
      </slot>
    </slot>
    <div>
      <slot name="itemTitle">DESIGN PORTFOLIO</slot>
    </div>

    <slot name="itemSkills">
      <ul class="flex">
        <li>html</li>
        <li>CSS</li>
      </ul>
    </slot>
  </div>
</template>

<script setup></script>

<style scoped>
.projectItem .projectActive {
  transition: all ease-in-out 0.2s;
}

.projectItem .projectActive .viewProject {
  display: none !important;
}

.projectItem .projectActive:hover .viewProject {
  display: block !important;
}

.projectItem .projectActive .viewCode {
  display: none !important;
}

.projectItem .projectActive:hover .viewCode {
  display: block !important;
}

.projectItem .projectActive:hover {
  display: grid !important;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
