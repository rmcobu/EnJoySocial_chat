<template>
  <div class="chat-container">
    <div class="chat-header">
      <button class="back-btn">
        <i class="fas fa-arrow-left"></i>
      </button>
      <img class="logocapy" src="/images/capy.webp" alt="Capy" />
      <h2>EnJoy Social</h2>
    </div>

    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.type]">
        <span class="message-img">
          <img src="/images/capy.webp" alt="Capy" />
        </span>
        <span class="message-text">{{ message.text }}</span>
      </div>
    </div>

    <div class="chat-input-wrapper">
      <div class="chat-input">
        <button class="attach-btn">
          <i class="fas fa-paperclip"></i>
        </button>
        <input v-model="newMessage" placeholder="Message" @keyup.enter="sendMessage"/>
        <button class="send-btn" @click="sendMessage">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/scripts.js"></script>

<style src="../assets/css/styles.css"></style>