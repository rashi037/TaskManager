<template>
    <div :key="task.id" v-for="task in tasks">
        <OneTask @delete-task="$emit('delete-task', task.id)" :task="task"/>
    </div>
</template>

<script>
import OneTask from './OneTask.vue';


export default {
    name: 'AddTasks',
    props: {
        tasks : Array
    },
    components: {
        OneTask,
    },
    emits: ['delete-task'],
    
}
</script>
