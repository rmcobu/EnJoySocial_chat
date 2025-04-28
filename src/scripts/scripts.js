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