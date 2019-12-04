<template>
  <div>
    <el-card shadow="always" class="box-card">
      <div slot="header" class="clearfix">
        <span>Tarea Nueva</span>
        <el-button
          style="float: right;"
          type="primary"
          icon="el-icon-circle-plus-outline"
          round
          >Agregar</el-button
        >
      </div>
      <div class="text item">
        <el-input placeholder="Titulo de mi tarea" v-model="titulo"></el-input>
        <el-input
          type="textarea"
          autosize
          placeholder="Hoy tengo que ..."
          v-model="descripcion"
          style="margin-top:20px"
        >
        </el-input>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Tareas",
  data() {
    return {
      titulo: "",
      descripcion: ""
    };
  }
};
</script>

<style scoped>
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
  width: 480px;
}
</style>
