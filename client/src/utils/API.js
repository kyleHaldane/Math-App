import axios from "axios";

export default {
  // Gets 10 questions
  getQuestions: function() {
    return axios.get("/api/questions");
  },

  // Saves a book to the database
  saveQuestions: function(q) {
    return axios.post("api/questions", q);
  }
};