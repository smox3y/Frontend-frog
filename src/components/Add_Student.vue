<template>
    <div class="signup-container">
      <div class="row">
        <div class="input-container">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" v-model="firstName">
        </div>
        <div class="input-container">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" v-model="lastName">
        </div>
      </div>
      <div class="row">
        <div class="input-container">
          <label for="phone-number">Phone Number</label>
          <input type="tel" id="phone-number" v-model="phoneNumber">
        </div>
        <div class="input-container">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email">
        </div>
      </div>
      <div class="row">
        <div class="input-container">
          <label for="physical-address">Physical Address</label>
          <input type="text" id="physical-address" v-model="physicalAddress">
        </div>
        <div class="input-container">
            <button type="submit" class="submit-button">Submit</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        physicalAddress: '',
      };
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    margin-left: 60px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .input-container {
    flex: 1;
    margin-right: 0.5rem;
    margin: 30px;
  }
  
  .input-container:last-child {
    margin-right: 0;
    align-self: flex-end;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  