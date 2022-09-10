<template>
  <NavBarView />
  <MainSectionView />
  <RecentBlogView />
  <AdContainerView v-if="!userState" />
  <FooterView />
  <LoadingView v-if="loading" />
</template>

<script>
  import NavBarView from '../components/NavBarView.vue';
  import MainSectionView from '../components/MainSectionView.vue';
  import RecentBlogView from '../components/RecentBlogView.vue';
  import AdContainerView from '../components/AdContainerView.vue';
  import FooterView from '../components/FooterView.vue';
  import LoadingView from '../components/LoadingView.vue';
  import {
    mapState
  } from 'vuex';

  export default {
    name: "HomeView",
    components: {
    NavBarView,
    MainSectionView,
    RecentBlogView,
    AdContainerView,
    FooterView,
    LoadingView
},
    data() {
      return {
        loading: false
      }
    },
    computed: {
      ...mapState(['userState'])
    }
  }
</script>