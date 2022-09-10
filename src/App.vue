<template>
  <router-view v-if="contentLoaded" />
  <LoadingView v-else />
</template>


<script>
  import {
    auth,
    colRef,
    newBlogsRef
  } from './firebase/index.js';
  import {
    onAuthStateChanged
  } from 'firebase/auth';
  import LoadingView from './components/LoadingView.vue';
  import {
    onSnapshot
  } from 'firebase/firestore';
  import {
    mapGetters,
    mapState
  } from 'vuex';
  export default {
    name: "App",
    components: {
      LoadingView
    },
    data() {
      return {
        currentUser: false
      }
    },
    created() {
      onAuthStateChanged(auth, (user) => {
        this.$store.commit("updateUserState", user);
        if (user) {
          this.$store.dispatch("getNewUserData");
        }
        this.currentUser = user;
      });
      onSnapshot(colRef, async () => {
        if (this.currentUser) {
          this.$store.dispatch("getNewUserData");
        }
        this.$store.commit("resetUserNames");
        this.$store.commit("resetUsers");
        await this.$store.dispatch("getUsers");
      })
      onSnapshot(newBlogsRef, async () => {
        this.$store.commit("resetBlogs");
        this.$store.commit("resetTotalBlogTags");
        await this.$store.dispatch("getPosts");
      })
    },
    computed: {
      ...mapState(["contentLoaded"]),
      ...mapGetters(['blogAdmins'])
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;

    *::selection {
      background-color: #42b883;
    }

    figure {
      display: table;
      margin: 1rem auto
    }

    pre {
      color: #000;
      background: 0 0;
      text-shadow: 0 1px #fff;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      -moz-tab-size: 4;
      tab-size: 4;
      -webkit-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
      background: #f5f2f0;
      padding: 1em;
      margin: .5em 0;
      overflow: auto;
    }

    figure figcaption {
      color: #999;
      display: block;
      margin-top: .25rem;
      text-align: center
    }

    hr {
      border-color: #ccc;
      border-style: solid;
      border-width: 1px 0 0 0
    }

    code {
      background-color: #e8e8e8;
      border-radius: 3px;
      padding: .1rem .2rem
    }

    .mce-content-body:not([dir=rtl]) blockquote {
      border-left: 2px solid #ccc;
      margin-left: 1.5rem;
      padding-left: 1rem
    }

    .mce-content-body[dir=rtl] blockquote {
      border-right: 2px solid #ccc;
      margin-right: 1.5rem;
      padding-right: 1rem
    }

    .html-blog {
      img {
        max-width: 850px;
        width: 100%;
        height: auto;
      }
    }
  }
</style>