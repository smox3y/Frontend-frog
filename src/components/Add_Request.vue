<template>

    <div class="signup-container">

        <div class="row">

            <h1>Request</h1>

        </div>
    
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
            <button type="submit" class="submit-button" @click="submitRequest">Submit</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
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
    methods: {
    async submitRequest() {
      const data = JSON.stringify({
        // Update the data object with the appropriate form field values
        email: this.email,
        phoneNumber: this.phoneNumber,
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.physicalAddress,
      });

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/v1/appearances', // Update the API URL for requests
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoic3VwZXJmcm9nc2NoZWR1bGVyY2l0ZTMwMzYzQGdtYWlsLmNvbSIsImlkIjoxLCJleHAiOjE2ODIzODQxNDUsImlhdCI6MTY4MjM3Njk0NSwiYXV0aG9yaXRpZXMiOiJST0xFX1NQSVJJVERJUkVDVE9SIFJPTEVfU1VQRVJGUk9HIn0.Zq6QXKCfQKE9Saodkl8BntEy17GUUtI9WTzSZapTSJwJYX0Touy9XZ9fsOnxb6OIYQOWWkfQBDeLgyoBc6yu2UrilvWgblL0-nryMwIBqLFznNmydrFJRIEGp4Rgt0j3ua48tmHmPRX76Z0NedRDUNSLaS2mStyXF_TeCl_SEGLHZnsNBK7aH-vHt8dOnTxSQN_cZ7_WqUIr176Xu-3i_pBbD1MF7bnf8xCqsf7ugXIR_X14jYKtuUkgHl-N3oU8kwCoyW3BmV9AdCTlgSUgwavH6xxZxoMG6Cdqb6bernIHfn417GLlMRNjQOnjy_rSztnT4IYYjpZhXgnVSg9vCQ', // Replace with the appropriate access token
        },
        data: data,
      };

      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    },
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
  