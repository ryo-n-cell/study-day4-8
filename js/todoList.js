var vm = new Vue({
  el: "#todo",
  data: {
    inputData: "テストDです",
    selectLists: "",
    todoList: [
      { comment: "テストAです", isDone: false },
      { comment: "テストBです", isDone: true },
      { comment: "テストCです", isDone: false }
    ]
  },
  methods: {
    addtodo: function() {
      let item = {
        comment: this.inputData,
        isDone: false
      };
      this.todoList.push(item);
      this.inputData = "";
    },
    remove: function(index) {
      this.todoList.splice(index, 1);
    },
    done: function(index) {
      console.log(this.todoList[index].isDone);
      this.todoList[index].isDone = !this.todoList[index].isDone;
    }
  },

  computed: {
    remaining: function() {
      return this.todoList.filter(function(item) {
        return !item.isDone;
      });
    },
    complete: function() {
      return this.todoList.filter(function(item) {
        return item.isDone;
      });
    }
  }
});
