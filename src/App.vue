<template>
  <div id="app">
    <Navigation/>
    <br>
    <TasksList/>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import TasksList from '@/components/TasksList'
  export default {
    name: 'app',
    components:{
      Navigation,
      TasksList
    }
  }
</script>