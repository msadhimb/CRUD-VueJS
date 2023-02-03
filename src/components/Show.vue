<template>
  <div>
    <header>
      <h3 class="mt-3">List Data Student</h3>
    </header>
    <main>
      <div class="pt-3 pb-3 d-flex justify-content-center">
        <table class="table table-striped" style="width: 800px">
          <thead>
            <tr>
              <th scope="col">NIM</th>
              <th scope="col">Nama</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="students in student" :key="students.nim">
              <td>{{ students.nim }}</td>
              <td>{{ students.nama }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-primary me-2"
                  @click="handleEdit(students.id)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-danger"
                  v-on:click="deleteData(students.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form @submit.prevent="updateData">
              <div class="modal-body">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="nim"
                    placeholder="NIM"
                    :value="nimEdit"
                    @input="(event) => (nimEdit = event.target.value)"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="nama"
                    class="form-control"
                    id="nama"
                    placeholder="Nama"
                    :value="namaEdit"
                    @input="(event) => (namaEdit = event.target.value)"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ShowStudents",
  inject: ["student", "deleteData"],
  data() {
    return {
      idEdit: "",
      nimEdit: "",
      namaEdit: "",
    };
  },
  methods: {
    handleEdit(id) {
      const data = [...this.student];
      const findStudent = data.find((item) => item.id === id);
      this.nimEdit = findStudent.nim;
      this.namaEdit = findStudent.nama;
      this.idEdit = findStudent.id;
    },

    updateData() {
      const data = [...this.student];
      data.forEach((item) => {
        if (item.id === this.idEdit) {
          item.nim = this.nimEdit;
          item.nama = this.namaEdit;
        }
      });
    },
  },
};
</script>

<style></style>
