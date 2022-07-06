<style>
.todo-item {
    opacity: 1;
    color: rgba(23, 62, 103, 1);
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    line-height: 18px;
}
</style>
<template>
    <b-card body-class="p-0" class="custom-radius">
        <div class="p-3">
            <h5 class="fw-bold m-0">To-do List</h5>
        </div>
        <hr class="m-0">
        <div class="todo-list p-4 ">
            <div class="item">
                <b-row class="bg-light custom-radius-10 mb-2" v-for="data in todoData" :key="data">
                    <b-col sm="11" md="11" lg="11" class="todo-item p-3">{{ data.todoItem }}</b-col>
                    <b-col col="1" md="1" lg="1">
                        <b-form-checkbox class="todo-checkbox" :v-model="data.status" value="1" unchecked-value="0">
                        </b-form-checkbox>
                    </b-col>
                </b-row>
            </div>
            <div class="todo-form">
                <b-form @submit="onSubmit">
                    <b-row>
                        <b-col sm="10" md="10" lg="10">
                            <b-form-group id="input-group-todo">
                                <b-form-input id="input-todo" v-model="newTodo" placeholder="Add Task" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="2" md="2" lg="2">
                            <b-button type="submit" variant="primary">Add</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </div>
        </div>
    </b-card>
</template>
<script>
export default {
    name: "task-list",
    data() {
        return {
            status: 0,
            newTodo: "",
            todoData: [{
                todoItem: "Search database for clien’s name.",
                status: 1,
            },
            {
                todoItem: "Send emails to all the firm members to advise them of conflict results.",
                status: 0,
            },]
        };
    },
    computed: {

    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            this.todoData.push(
                { todoItem: this.newTodo, status: 0 }
            );
            this.newTodo = '';
        },
    }
};

</script>