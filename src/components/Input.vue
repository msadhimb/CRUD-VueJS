<template>
  <div>
    <header>
      <h1 class="mt-5 mb-5">Data Mahasiswa</h1>
    </header>
    <main>
      <h3>Input Mahasiswa</h3>
      <div class="pt-3 pb-3 d-flex justify-content-center">
        <form style="width: 500px" @submit.prevent="addData">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="nim"
              placeholder="NIM"
              :value="nim"
              @input="(event) => (nim = event.target.value)"
            />
          </div>
          <div class="mb-3">
            <input
              type="nama"
              class="form-control"
              id="nama"
              placeholder="Nama"
              :value="nama"
              @input="(event) => (nama = event.target.value)"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "DataStudents",
  inject: ["student"],
  data() {
    return {
      nim: "",
      nama: "",
    };
  },
  methods: {
    addData() {
      this.student.push({
        id: Math.random(10 - 20000),
        nim: this.nim,
        nama: this.nama,
      });
      this.nim = "";
      this.nama = "";
      console.log(this.student);
    },
  },
  provide() {
    return {
      nim: this.nim,
      nama: this.nama,
    };
  },
};
</script>

<style></style>
