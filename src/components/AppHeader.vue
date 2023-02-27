<template>
    <header>
        <h1>{{ title }}</h1>
        <AddButton @toggle-add-task="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'AddTask'" 
        :color="showAddTask ? 'red' : 'green'"/>
    </header>
</template>

<script>
//import { title } from 'process';
import AddButton from './AddButton'

export default{
    name: 'AppHeader',
    props: {
        title: String,
        showAddTask: Boolean
    },
    components: {
        AddButton
    }
}
</script>

<style scoped>
 header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
 }
</style>