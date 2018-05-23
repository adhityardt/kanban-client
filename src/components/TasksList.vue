<template>
  <div class="content">

    <div class="card text-white bg-primary mb-3" style="width: 17rem;">
      <div class="card-header">Back-Log</div>
      <div class="card-body">
        <div v-for="task of tasks" :key="task['.key']">
          <div v-if="task.status === 'back-log'">
            <div class="card mb-2 text-dark">
              <div class="card-header">
                <button type="button" class="close" @click="deleteTask(task['.key'])" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h6 class="card-text">{{ task.title }}</h6>
              </div>
              <div class="card-body">
                <p>{{ task.content }}</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary" @click="changeStatus(task['.key'], 'todo')"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card text-white bg-secondary mb-3" style="width: 17rem;">
      <div class="card-header">To-Do</div>
      <div class="card-body">
        <div v-for="task of tasks" :key="task['.key']">
          <div v-if="task.status === 'todo'">
            <div class="card mb-2 text-dark">
              <div class="card-header">
                <button type="button" class="close" @click="deleteTask(task['.key'])" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h6 class="card-text">{{ task.title }}</h6>
              </div>
              <div class="card-body">
                <p>{{ task.content }}</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary" @click="changeStatus(task['.key'], 'back-log')"><i class="fas fa-arrow-left"></i></button>
                <button class="btn btn-primary" @click="changeStatus(task['.key'], 'doing')"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card text-white bg-success mb-3" style="width: 17rem;">
      <div class="card-header">Doing</div>
      <div class="card-body">
        <div v-for="task of tasks" :key="task['.key']">
          <div v-if="task.status === 'doing'">
            <div class="card mb-2 text-dark">
              <div class="card-header">
                <button type="button" class="close" @click="deleteTask(task['.key'])" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h6 class="card-text">{{ task.title }}</h6>
              </div>
              <div class="card-body">
                <p>{{ task.content }}</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary" @click="changeStatus(task['.key'], 'todo')"><i class="fas fa-arrow-left"></i></button>
                <button class="btn btn-primary" @click="changeStatus(task['.key'], 'done')"><i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card text-white bg-danger mb-3" style="width: 17rem;">
      <div class="card-header">Done</div>
      <div class="card-body">
        <div v-for="task of tasks" :key="task['.key']">
          <div v-if="task.status === 'done'">
            <div class="card mb-2 text-dark">
              <div class="card-header">
                <button type="button" class="close" @click="deleteTask(task['.key'])" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h6 class="card-text">{{ task.title }}</h6>
              </div>
              <div class="card-body">
                <p>{{ task.content }}</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary" @click="changeStatus(task['.key'], 'doing')"><i class="fas fa-arrow-left"></i></button>
                <button class="btn btn-primary" @click="finishTask(task['.key'])"><i class="fas fa-check"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import alertify from 'alertifyjs'
import {ref} from '../firebase'
export default {
  name: 'TasksList',
  firebase: {
    tasks: ref
  },
  methods: {
    changeStatus (key, status) {
      ref.child(key).update({ status: status })
    },
    deleteTask(key){
      alertify.confirm("Are you sure to delete ?",
        function(){
          alertify.success('Ok');
          ref.child(key).remove()
        },
        function(){
          alertify.error('Cancel');
        });
    },
    finishTask(key){
      ref.child(key).remove()
      alertify.success('You have finished the task');
    }
  }
}
</script>

<style>
.content{
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

</style>
