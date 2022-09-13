<template>
    <div class="container">
        <h2>Users</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>User Id</th>
                <th>Firstname</th>
                <th>Nickname</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item._id">
                  <td>{{ item._id }}</td>
                  <td>{{ item.firstName }}</td>
                  <td>{{ item.nickName }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'UsersComponent',
        props: ['users']
     }
</script>