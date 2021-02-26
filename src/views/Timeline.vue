<template>
  <div>
    <div>
      <button @click="runnersGo">GO!</button>
    </div>
    <img src="../assets/runner.png" alt="runner" class="runner first" />
    <img src="../assets/runner.png" alt="runner" class="runner second" />
    <img src="../assets/runner.png" alt="runner" class="runner third" />
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Timeline",
  methods: {
    runnersGo() {
      let tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      tl.to(".first", { x: 700, duration: 2, ease: "expo.out" });
      tl.to(".second", { x: 700, duration: 2.5, ease: "expo.out" }, "<");
      tl.to(".third", { x: 700, duration: 1.75, ease: "expo.out" }, "<");
      //   this.runnersReset();
      console.log(tl.duration());
    },
    runnersReset() {
      let tl = gsap.timeline();
      tl.to(".first", { x: 5, duration: 0, ease: "expo.in" }, "-=1");
      tl.to(".second", { x: 5, duration: 0, ease: "expo.in" }, "-=1");
      tl.to(".third", { x: 5, duration: 0, ease: "expo.in" }, "-=1");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>