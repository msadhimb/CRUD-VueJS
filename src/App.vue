<template>
  <main>
    <Input />
    <Show />
  </main>
</template>

<script>
import Show from "./components/Show.vue";
import Input from "./components/Input.vue";
import { computed } from "vue";

export default {
  name: "App",
  components: {
    Show,
    Input,
  },
  data() {
    return {
      student: [
        {
          id: 0,
          nim: "123456789",
          nama: "John Doe",
        },
        {
          id: 1,
          nim: "987654321",
          nama: "Jane Doe",
        },
      ],
      deletedData: "",
    };
  },
  provide() {
    return {
      student: computed(() => this.student),
      deleteData: this.deleteData,
    };
  },
  methods: {
    deleteData(id) {
      this.deletedData = this.student.filter((item) => item.id === id);
      this.student = this.student.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
