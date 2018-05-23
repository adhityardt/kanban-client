<template>
  <div>
    <div class="topnav">
      <a class="active" style="cursor:pointer" data-toggle="modal" data-target="#exampleModal" @click="clearData">Submit New Task</a>
      <h2 style="float:left; color: #f2f2f2;">KANBAN</h2>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Task</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <div class="padding-item">
                  <label for="title">Title</label>
                  <input class="form-control" type="text" v-model="title"><br>
                  <label for="title">Content</label>
                  <input class="form-control" type="text" v-model="content"><br>
                  <label for="title">Assigned To</label>
                  <input class="form-control" type="text" v-model="assignedTo"><br>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button class="btn btn-outline-success" type="button" @click="submitTask" data-dismiss="modal">Add Task</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from '../firebase'
export default {
  name: 'Navigation',
  data() {
    return {
      title: '',
      content: '',
      assignedTo: '',
      status: 'back-log'
    }
  },
  methods: {
    clearData () {
      this.title = ''
      this.content = ''
      this.assignedTo = ''
    },
    submitTask () {
      ref.push({
        title: this.title,
        content: this.content,
        assignedTo: this.assignedTo,
        status: this.status
      })
    }
  }
}
</script>

<style>
/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
    background-color: #4CAF50;
    color: white;
}

</style>
