const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      newMail: "",
    };
  },
  methods: {
    getMail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((email) => {
          this.newMail = email.data.response;
        });
      return this.newMail;
    },
  },

  mounted() {},
}).mount("#app");
