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
          <label for="Event Name">Event Title</label>
          <input type="text" id="EventName" v-model="EventTitle">
        </div>
        <div class="input-container">
          <label for="Address">Address</label>
          <input type="text" id="Address" v-model="Address">
        </div>
      </div>
      <div class="row">
        <div class="input-container">
          <label for="EventDate">Event Date</label>
          <input type="text" id="EventDate" v-model="EventDate">
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
          EventTitle: '',
          Address: '',
          EventDate: '',
        };
      },
      methods: {
      async submitRequest() {
        let data = JSON.stringify({
          "reqFirstName": "test",
          "reqLastName": "B",
          "reqPhoneNumber": "1234567890",
          "reqEmail": "asda@gmail.com",
          "appearanceType": "PRIVATE",
          "title": "Wedding",
          "orgName": "none",
          "address": "6612 trail bluff dr plano tx 75024",
          "mileage": 2.5,
          "eventDate": "2023-12-25",
          "startTime": "17:23:00",
          "endTime": "19:23:00",
          "status": "PENDING",
          "desc": "party",
          "onCampus": false,
          "instructions": "none",
          "expenses": "none",
          "outsideOrg": "none",
          "assignedName":null,
          "assignedId":null
        });

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://localhost:8080/api/v1/appearances',
          headers: { 
            'Content-Type': 'application/json', 
          },
          data : data
        };

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

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
  