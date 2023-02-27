<template>
  <div class="container">
    <AppHeader @toggle-add-task="toggleAddTask" title="Task Tracker"
    :showAddTask="showAddTask"
    />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>
    <AllTasks @delete-task="deleteTask" :tasks="tasks"/>
    <router-view></router-view>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
import AllTasks from './components/AllTasks.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AllTasks,
    AddTask,
  },
  data(){
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods : { 
    async addTask(task){
      const res = await fetch('http://localhost:8080/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),

      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },

    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },

    async deleteTask(id){
      if(confirm('Are you sure?')){
        const res = await fetch(`http://localhost:8080/tasks/${id}`, {
          method: 'DELETE'
        })

        res.status === 200 ? ( 
          this.tasks = this.tasks.filter((task) => task.id != id)) : alert('Error deleting task')
      }
    },

    async fetchTasks(){
      const res = await fetch('http://localhost:8080/tasks')

      const data = await res.json()
      return data

    },
    async fetchTask(id){
      const res = await fetch(`http://localhost:8080/tasks/${id}`)

      const data = await res.json()
      return data

    }
  },
  async created(){
    this.tasks = await this.fetchTasks()
  }
}
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
