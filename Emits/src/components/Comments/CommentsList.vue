<template>
  <div>
    <ul>
      <CommentItem
        v-bind="comments"
        v-for="(comments, index) in CommentsData"
        :key="index"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import CommentsData from '@/data/CommentsData'
import CommentItem from './CommentItem.vue'
</script>
<style scoped></style>

<!-- 
    <CommentItem 
    :id="comments.id"
    :author="comments.author"
    :body="comments.body"
    :date="comments.date"v-for="comments in CommentsData">
    <template #icon?>
        <div>

        </div>
    </template>
    <h1>
        {{ comments.title }}
    </h1>
</CommentItem>

-->
