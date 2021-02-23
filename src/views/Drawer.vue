<template>
  <div>
    <button @click="isOpen = !isOpen">My Profile</button>
    <!-- :css="false" tells Vue that it doesn't need to handle the transition classes, we're going to use JavaScript hooks instead -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <div v-if="isOpen" class="drawer">
        <img src="../assets/avatar.png" alt="avatar" />
        <div><p>Name: Madison Hu</p></div>
        <div><p>Age: 18</p></div>
        <div><p>Sex: Female</p></div>
        <div><p>Level: 23</p></div>
      </div>
    </transition>
  </div>
</template>

<script>
// velocity.js
import Velocity from "velocity-animate";

export default {
  name: "Drawer",
  data: function () {
    return {
      isOpen: false,
    };
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.width = "0em";
    },
    // We're using an easing spring option from velocity on the enter method
    // 60 is the tension and 10 is the friction; a higher tension (default is 500) increases speed and bounciness
    // a lower friction (default is 20) increases ending vibration speed
    // On the leave method, we're using a standard easeInCubic easing (adopted from jQuery)
    enter: function (el, done) {
      Velocity(
        el,
        { opacity: 1, width: "12em" },
        { duration: 1000, easing: [60, 10], complete: done }
      );
    },
    leave: function (el, done) {
      Velocity(
        el,
        { opacity: 0, width: "0em" },
        { duration: 500, easing: "easeInCubic", complete: done }
      );
    },
  },
};
</script>

<style scoped>
img {
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
}

.drawer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12em;
  height: 26em;
  border-radius: 1%;
  background-color: #e0e0e0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  padding: 0.7em 0;
}
.drawer div {
  height: 6em;
  width: 95%;
  margin-top: 0.6em;
  background-color: #f0f0f0;
  border: 0.02em solid #ababab;
  border-radius: 1%;
}
</style>
