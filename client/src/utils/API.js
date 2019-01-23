import axios from "axios";

export default {
  getBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title + "&key=AIzaSyAdfHFBZa4g248H4DSW-s-ckR6lCAzMpDY")
  }
};
