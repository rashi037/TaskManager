<template>
    <div class="task">
        <!-- <h3>{{ task.text }}<i @click="onDelete(task.id)" class="fas fa-times"></i></h3> -->
        <h3>{{ task.text }}<i @click="$emit('delete-task' ,task.id)" class="fas fa-times"></i></h3>
        <p>{{ task.day }}</p>
    </div>
    
</template>

<script>

export default{
    name: 'OneTask',
    props: {
        task: Object,
    },
    // methods:{
    //     onDelete(id){
    //         this.$emit('delete-task',id)
    //     }
    // }
}
</script>

<style>
.fas{
    color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>