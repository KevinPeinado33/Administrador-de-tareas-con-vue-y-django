<template>
  <div>
    <el-col :span="8" v-for="tarea of tareas" :key="tarea.id">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>{{tarea.titulo}}</span>
          <el-button
            style="float: right"
            type="danger"
            icon="el-icon-delete"
            circle
          ></el-button>
          <el-button
            style="float: right"
            type="warning"
            icon="el-icon-edit"
            circle
          ></el-button>
        </div>
        <div class="text item">
          {{ tarea.descripcion }}
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ListadoTareas",
  computed: {
    ...mapState(["tareas"])
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 400px;
}
</style>
