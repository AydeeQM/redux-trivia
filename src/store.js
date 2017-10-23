import createStore from "redux-zero";

let ITEMS = [
    { 
        question: "Which is the oldest airline in the world?", 
        options : [ "Avianca", "KLM", "Qantas"] ,
        image:"img/foto1.png",
        answer : "KLM"
    },
    { 
        question: "Which is the largest port in the world?", 
        options:  ["Port of Shangai", "Port of Singapore", "Port Rotterdam"] ,
        image :"img/foto2.png",
        answer : "Port of Shangai"
    },
    { 
        question: "What is the longest distance cycling backwards?", 
        options:["89.30 km", "675.10 km", "337.60 km"], 
        image:"img/foto3.png",
        answer : "337.60 km"
    },
    { 
        question: "What is the highest speed ever reached by a school bus?", 
        options : ["590 km/h", "320 km/h","245 km/h"],
        image:"img/foto5.png",
        answer : "590 km/h"
    },
    { 
        question: "What is the longest car trip on one tank of gas?", 
        options :["2617 km", "3568 km","1732 km"],
        image :"img/foto4.png",     
        answer : "2617 km"
    }
 ];

 const initialState = {
    items: ITEMS,
    answers : [],
    count : 0,
    checking : false,
    compare:false,
    score: 0
 };

 const store = createStore(initialState);
 export default store;
