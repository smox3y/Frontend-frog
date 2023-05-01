<template>
    <div>
      <form @submit.prevent="submitForm">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
  
        <div>
          <button type="button" class="user-type-button" @click="login()">Login</button>
        </div>
  
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
      username: '',
      password: '',
    }
    },
    methods: {
        async login() {
            try {
                console.log(this.username);
                console.log(this.password);
                const basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
                console.log(basicAuth);
                const response = await axios.post('http://localhost:8080/api/v1/users/login', {}, {
                    headers: {
                        Authorization: basicAuth
                    }
                });
                console.log(response.data);
                const token = response.data.data.token;
                localStorage.setItem('token',token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                const roles = response.data.data.userInfo.roles;
                console.log("ROLE IS >>> " + roles);

              const id = response.data.data.id
                  
                this.$emit('login', roles);
                this.$router.push('/admin/add-student');


            } catch (error) {
                console.error(error);
                this.errorMessage = error.response.data.message;
            }
        }
    }
  }
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px #ccc;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    display: block;
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button[type="submit"] {
    display: block;
    margin: 0 auto;
    padding: 5px 10px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }


  </style>
  