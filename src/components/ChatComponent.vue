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

<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: [],
    };
  },
  mounted() {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      this.messages = JSON.parse(savedMessages);
    } else {
      this.messages = [
        { text: 'First test message :)', type: 'sent' },
        { text: 'Hello!', type: 'received' },
        { text: 'Hello!', type: 'sent' },
        { text: 'Response test', type: 'received' },
        { text: 'Hi!!!!!', type: 'sent' },
        { text: 'OMG', type: 'received' },
        { text: '😂', type: 'sent' },
        { text: 'What do you think?', type: 'sent' },
        { text: 'Incredible job 👌', type: 'received' },
        { text: 'Merci', type: 'sent' },
      ];
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        const message = { text: this.newMessage, type: 'sent' };
        this.messages.push(message);
        this.newMessage = '';
        localStorage.setItem('chatMessages', JSON.stringify(this.messages));
      }
  },
  clearChat() {
      this.messages = [];
      localStorage.removeItem('chatMessages');
    }
}
};
</script>

<style>
.chat-container {
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f7f7f7;
}

.chat-header h2{
font-family:'DM Sans', sans-serif;
font-size: 18px;

}

.back-btn {
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: grey;
  margin-right: 10px;
}

.chat-messages {
  padding: 10px;
  height: 350px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.message {
  display: flex;
  align-items: center;
  max-width: 100%;
}

.message.sent {
  align-self: flex-end;
  flex-direction: row-reverse;
  gap: 9px;
  
}

.message.received {
  align-self: flex-start;
  flex-direction: row;
  gap: 9px;
}

.message-text {
  padding:7px 12px;
  border-radius: 10px;
  max-width: 100%;
  background-color: #ff7f00;
  white-space: normal;
  word-wrap: break-word;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px
}

.message.sent .message-text {
  background-color: #ff7f00;
  border-radius: 20px 20px 0px 20px;
  color: white;
}

.message.received .message-text {
  background-color: #e0e0e0;
  border-radius: 20px 20px 20px 0px;
  color: black;
}

.message-img img {
  width: 30px;
  height: 30px;
  align-items: center;
  padding: 3px;
  
}

.message-img{
  border-radius: 20px;
  background-color: #ffecd7;
}

.chat-header img {
  width: 30px;
  height: 30px;
  object-fit: cover;
  
}


.chat-input-wrapper {
  position: sticky;
  bottom: 0;
  background-color: white;
  padding: 5px;
  z-index: 10;
}
.chat-input {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 100px;
  background-color: #fff;
  width: 100%;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: none;
}

.logocapy {
  width: 20px;  
  height: 20px; 
  object-fit: cover;
  margin-right: 10px;
  transform: scaleX(-1);
}

.attach-btn {
  background-color: transparent;
  border: none;
  padding: 10px;
  border-radius: 50%;
}

.attach-btn i {
  font-size: 20px;
  color: #ff7f00;
}

.send-btn {
  background-color: #ff7f00;
  padding: 6px;
  border-radius: 50%;
  border: none;
  margin-right: 4px;
}

.send-btn i {
  font-size: 20px;
  color: white;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 127, 0, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(255, 127, 0, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 127, 0, 0);
  }
}

.send-btn:active,
.attach-btn:active {
  animation: pulse 0.4s ease;
}

@media (min-width: 768px) {
  .chat-container {
    max-width: 600px;
  }

  .chat-header h2 {
    font-size: 24px;
  }

  .chat-messages {
    padding: 20px;
    height: 450px;
  }

  .message-text {
    font-size: 16px;
  }

  .send-btn,
  .attach-btn {
    font-size: 24px;
    border-radius: 50%;
  }

  .send-btn{
    margin-right: 10px;
  }
  .attach-btn{
    margin-left: 10px;
  }
}

@media (min-width: 1200px) {
  .chat-container {
    max-width: 800px;
  }

  .chat-header h2 {
    font-size: 28px;
  }

  .chat-messages {
    padding: 30px;
    height: 500px;
  }

  .message-text {
    font-size: 18px;
  }

  .chat-input{
    padding: 4px 0px;
  }
  .send-btn,
  .attach-btn {
    font-size: 24px;
    border-radius: 50%;
  }

  .send-btn{
    margin-right: 10px;
  }
  .attach-btn{
    margin-left: 10px;
  }
}



</style>