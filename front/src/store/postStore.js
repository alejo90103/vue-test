/*
 * Project: test
 * Author: Alejandro Herrera (alejo901003@hotmail.com)
 * File Create: Thursday, 16th February 2023 6:59:30 pm
 * Last Modified: Thursday, 16th February 2023 6:59:30 
 */

import Vue from 'vue'
import _ from 'lodash'
import {
  posts,
  rating
} from '../config'

const state = {
  posts: [],
  rating: 0
}

const getters = {
  posts: state => {
    return state.posts;
  },
  rating: state => {
    return state.rating;
  },
}

const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  },
  SET_RATING(state, rating) {
    state.rating = rating
  }
}

const actions = {
  loadPosts({ commit }) {
    Vue.http.get(posts)
      .then((response) => {
        commit('SET_POSTS', response.data.posts)
      })
      .catch(function (error) {
        console.log(error);
      })
  },
  downloadRating({ commit }) {
    var a = document.createElement("a");
    a.style = "display: none";
    a.href = rating;
    a.download = "Rating Post.csv";
    document.body.appendChild(a);
    a.click();
    // For Firefox
    setTimeout(function () {
      document.body.removeChild(a);
    }, 100);
  },
  searchRatingByText({ commit }, text) {
    Vue.http.get(`${rating}/${text}`)
      .then((response) => {
        commit('SET_RATING', response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

export default {
  state, mutations, actions, getters
}
