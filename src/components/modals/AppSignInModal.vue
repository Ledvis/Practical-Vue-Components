<template>
  <AppModal name="signin" >
    <template slot="body" slot-scope="{ params }">
      Hello, {{params.name}}
      <button type="submit" @click.prevent="signOut">Sign Out</button>
      <div>{{ courses }}</div>
    </template>
  </AppModal>
</template>

<script>
import axios from 'axios';
import AppModal from '@/components/AppModal'

export default {
  data() {
    return {
      courses: null
    }
  },
  components: {
    AppModal
  },
  methods: {
    signOut() {
      this.$modal.hide('signin');
    },
    async loadCourses(done) {
      const courses = await axios.get('https://api.codecourse.com/api/courses');

      setTimeout(() => {
        this.courses = courses;
        done();
      }, 2000);
    }
  }
}
</script>