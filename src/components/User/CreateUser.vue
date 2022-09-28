<template>
  <div class="container text-center">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create User</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" class="form-control" v-model="firstName" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" class="form-control" v-model="nickName" name="nickname" id="nickname" placeholder="Last Name" />
                    </div>
                </div>
                
                <button type="button" @click='createUser()' class="btn btn-success">Create</button>
                <button type="button" @click='deleteUsers()' class="btn btn-danger m-2">Delete all users</button>
        
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateUser',
  data() {
    return {
      firstName: '',
      nickName: '',
    }
  },
  methods: {
      createUser() {
          const payload = {
              firstName: this.firstName,
              nickName: this.nickName,
          }
          this.$emit('createU', payload)
          this.clearForm();
      },
      deleteUsers(){
        this.$emit('deleteU')
      },
      clearForm() {
          this.firstName = "";
          this.nickName = "";
      }
  }
}
</script>