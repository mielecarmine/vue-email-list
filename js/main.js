const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      newMails: [],
    };
  },
  methods: {
    getMails() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((email) => {
            console.log(email.data.response);
            this.newMails.push(email.data.response);
          });
      }
    },
  },

  created() {
    console.log("asdas");
    this.getMails();
  },
}).mount("#app");
