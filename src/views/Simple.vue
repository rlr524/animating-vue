<template>
  <!-- Remember that appear causes the transition to happen upon the initial render of the component;
we're using js lifecycle hooks not css animations so we're passing in methods using the js lifecycles-->
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <div class="card"></div>
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0,0)";
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 2.5,
        opacity: 1,
        scale: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.card {
  display: block;
  margin: 0 auto 0 auto;
  height: 6.5em;
  width: 6.5em;
  border-radius: 1%;
  background-color: #16c0b0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
}
</style>
