const { createApp } = Vue

createApp({
  data() {
    return {
        tasks: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: true
            }
        ],
      newTask: ''
    }
  },
  methods: {
    deleteTask(array, index) {
        array.splice(index, 1);
    },
    addTask(array, variable) {
        if (variable.trim().length > 0) {
            array.unshift({
                text: variable,
                done: false
            });
            this.newTask = '';
        };
    },
    isDone(array, index) {
        array[index].done = !array[index].done
    }
  }
}).mount('#app')