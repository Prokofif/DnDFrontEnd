<template>
  <div class="buttons">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :roomNumber="post.roomNumber"
        @enlarge="postFontSize += 0.1"
      />
    </div>
  </div>
</template>

<script>
import BlogPost from "../BlogPost.vue";
export default {
  components: {
    BlogPost,
  },

  data() {
    return {
      posts: [
        { id: 1, roomNumber: "1311" },
        { id: 2, roomNumber: "2232" },
        { id: 3, roomNumber: "3443" },
        { id: 4, roomNumber: "4664" },
      ],
      postFontSize: 2,
    };
  },
};
</script>

<style scoped>
.buttons {
  width: 100%;
  display: inline;
}

</style>