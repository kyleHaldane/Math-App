const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const questonSeed = [
  {
    question: "Which of the following is equivalent to 3(x+5)-6?",
    choiceA: "3x-3",
    choiceB: "3x-1",
    choiceC: "3x+9",
    choiceD: "13x-6",
    answered: false,
    correct: "3x+9",
    date: new Date(Date.now())
  },
  {
    question: "x=y-3\n (x/2)+2y=6\n\n Which ordered pair(x, y) satisfies the system of equations shown here?",
    choiceA: "(-3, 0)",
    choiceB: "(0, 3)",
    choiceC: "(6, -3)",
    choiceD: "",
    answered: false,
    correct: "(0, 3)",
    date: new Date(Date.now())
  },
  {
    question: "A company that makes wildlife videos purchases camera equipment for $32,400. The equipment depreciates in value at a constant rate for 12 years, after which it is considered to have no monetary value. How much is the camera equipment worth 4 years after it is purchased?",
    choiceA: "$10,800",
    choiceB: "$16,200",
    choiceC: "$21,600",
    choiceD: "$29,700",
    answered: false,
    correct: "$21,600",
    date: new Date(Date.now())
  },
  {
    question: "Ken is working this summer as part of a crew on a farm. He earned $8 per hour for the first 10 hours he worked this week. Because of his performance, his crew leader raised his salary to $10 per hour for the rest of the week. Ken saves 90% of his earnings from each week. What is the least number of hours he must work the rest of the week to save at least $270 for the week?",
    choiceA: "38",
    choiceB: "33",
    choiceC: "22",
    choiceD: "16",
    answered: false,
    correct: "22",
    date: new Date(Date.now())
  },
  {
    question: "The function f is defined by f(x)=(x+3)(x+1). The graph of f in the xy-plane is a parabola. Which of the following interval contains the x-coordinate of the vertex of the graph of f?",
    choiceA: "-4<x<-3",
    choiceB: "-3<x<1",
    choiceC: "1<x<3",
    choiceD: "3<x<4",
    answered: false,
    correct: "-3<x<1",
    date: new Date(Date.now())
  },
  {
    question: "A certain package requires 3 centimeters of tape to be closed securely. What is the maximum number of packages of this type that can be secured with 6 meters of tape? (1 meter=100 cm)",
    choiceA: "100",
    choiceB: "150",
    choiceC: "200",
    choiceD: "300",
    answered: false,
    correct: "200",
    date: new Date(Date.now())
  },
  {
    question: "A market researcher selected 200 people at random from a group of people who indicated that they liked a certain book. The 200 people were shown a movie based on the book and then asked whether they liked or disliked the movie. Of those surveyed, 95% said they disliked the movie. Which of the following inferences can appropiately be drawn from this survey result?",
    choiceA: "At least 95% of people who go to see movies will dislike this movie.",
    choiceB: "At least 95% of people who read books will dislike this movie.",
    choiceC: "Most people who dislike this book will like this movie.",
    choiceD: "Most people who like this book will dislike this movie.",
    answered: false,
    correct: "Most people who like this book will dislike this movie.",
    date: new Date(Date.now())
  },
  {
    question: "5+5+6+8+8*6",
    choiceA: "72",
    choiceB: "70",
    choiceC: "81",
    choiceD: "38",
    answered: false,
    correct: "72",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
