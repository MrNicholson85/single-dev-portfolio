<template>
  <div id="footer" class="bg-[#242424] mt-[139px] pt-[84px] pb-[92px]">
    <div class="sdp-container">
      <div
        class="grid gap-12 lg:gap-0 lg:flex justify-center lg:justify-between mb-[92px] lg:mb-0"
      >
        <div class="text-center lg:text-left">
          <h2>Contact</h2>
          <div class="w-[323px] md:w-[445px] mt-9">
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
        <div>
          <form action="" class="grid gap-y-8 relative">
            <input class="inputStyles" type="text" placeholder="Name" />
            <input class="inputStyles" type="text" placeholder="Email" />
            <textarea
              class="textAreaStyles"
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              class="border-[#4EE1A0] grid border-b-[1px] text-base leading-[26px] tracking-[2.29px] relative right-0 h-[38px] w-[144px] uppercase pb-[10px] justify-self-end"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div
        class="grid md:flex justify-center md:justify-between border-t-[1px] border-[#fff] pt-[47px]"
      >
        <div class="mb-[20px] text-center">Darryl Nicholson</div>
        <div
          class="flex gap-6 md:gap-8 z-10 mx-auto md:mx-0 w-[153px] md:w-[192px]"
        >
          <div><img :src="GitIcon" /></div>
          <div><img :src="FemIcon" /></div>
          <div><img :src="LdIcon" /></div>
          <div><img :src="TwIcon" /></div>
        </div>
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

<style lang="scss" scoped></style>
