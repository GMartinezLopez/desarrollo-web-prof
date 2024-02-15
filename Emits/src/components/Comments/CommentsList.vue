<template>
  <div>
    <button @click="clicked($event)">CLICKEAME</button>
    <ul>
      <CommentItem @say-good-bye="clicked($event)" v-bind="comments" v-for="(comments, index) in CommentsData"
        :key="index" />
    </ul>

    <input type="number" v-model="validation" />
    <span v-if="validation">{{ age }}</span>

    <input type="number" v-model="dolars" />
    {{ dolars }}
    {{ total }}
  </div>
</template>

<script setup lang="ts">
import CommentsData from '@/data/CommentsData'
import CommentItem from './CommentItem.vue'
import { ref, computed } from 'vue';
//import { onBeforeMount, onMounted } from 'vue';

const clicked = (event: any) => {
  console.log(event);
}
const name = ref('')
const age = ref(0)
const dolars = ref(0)

const validation = computed(() => age.value > 18)
const total = computed(() => dolars.value * 2)

// const validation = () => {
//   if(age.value > 0){
//     console.log('si')
//   }else
//   console.log('no')
// }

// onMounted(() => {
//   console.log("despues de ...")
// })
// onBeforeMount(async () => {
//   const data = await fetch("/url");
// })

</script>

<!-- <script lang="ts">
import { defineComponent } from 'vue';
import CommentsData from '@/data/CommentsData'
import CommentItem from './CommentItem.vue'

export default defineComponent({

  name: 'CommentsList',

  setup() { },

  methods: {
    clicked(event: any) {
      console.log(event);
    }
  },
  data() {
    return {
      CommentsData,
      CommentItem
    }
  },

  components: CommentItem,

  onBeForeMount() {

  },

  onMounted() {

  },

  beforeCreate() {

  },

  created() {

  },

})

</script> -->
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
