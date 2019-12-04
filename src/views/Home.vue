<template>
  <div class="home">
    <!-- creacion de tareas -->
    <el-row :gutter="20">
      <el-col :span="12" :offset="8">
        <Tareas />
      </el-col>
    </el-row>

    <!-- listado de tareas -->
    <el-row style="margin-top: 30px">
      <ListadoTareas />
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Tareas from "@/components/Tareas.vue";
import ListadoTareas from "@/components/ListadoTareas.vue";

export default {
  name: "home",
  components: {
    Tareas,
    ListadoTareas
  }
};
</script>

<style></style>
