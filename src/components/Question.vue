<template>
  <div id="question" class="container">
    <img src="../assets/indemn.png" class="pinochio" id="indemn" alt="">
    <img src="../assets/wrongi.png" class="pinochio" id="wrongi" alt="">
    <img src="../assets/righti.png" class="pinochio" id="righti" alt="">
    <img src="../assets/restart.svg" alt="" id="restart" @click="restart">
    <div class="" id="dancing">
      <h2>You won!</h2>
      <img src="../assets/happy.gif" alt="" id="dancing">
    
    </div>
    <div class="row">
      <div class="question-card text-center mx-auto">
        <img src="../assets/question_mark.png" width="160px" alt="">
        <p class="mx-auto">{{ selectedQuestion.question }}</p>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
      <div class="row">
      <div class="col-md-4 text-center">
        <div class="answer-card answer-card-1 mx-auto" @click="answer(1)">
          
          <p>{{selectedQuestion.ans1}}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="answer-card answer-card-2 mx-auto" @click="answer(2)">
          <p>{{selectedQuestion.ans2}}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="answer-card answer-card-3 mx-auto" @click="answer(3)">
          <p>{{selectedQuestion.ans3}}</p>
        </div>
      </div>
        

      </div>
   
  </div>
</template>

<script>
  export default {
    name: 'Question',
    data: function () {
      return {
        questions: [{
          question: "The doll Pinocchio was made of:",
          ans1: "paper",
          ans2: "wood",
          ans3: "glass",
          img1: "../assets/answers/paper.png",
          img2: "../assets/answers/wood.png",
          img3: "../assets/answers/glass.png"
        },{
          question: "Who is Geppetto?",
          ans1: "Pinocchio‘s teacher",
          ans2: "Pinocchio‘s friend",
          ans3: "Pinocchio‘s father",
        },{
          question: "Sometimes, Pinocchio has a big:",
          ans1: "nose",
          ans2: "arm",
          ans3: "head",
        },{
          question: "What is Cricket?",
          ans1: "a fox",
          ans2: "a parrot",
          ans3: "an insect",
        },{
          question: "What did Geppetto buy for Pinocchio?",
          ans1: "a computer game",
          ans2: "a book",
          ans3: "a ball",
        },{
          question: "In “Paradise Land”, Pinocchio became:",
          ans1: "a policeman",
          ans2: "a doctor",
          ans3: "a donkey",
        }],
        selectedQuestion: {},
        index: {},
        answers: [2, 3, 1, 3, 2, 3]
      }
    },
    watch: {
      index: function (val) { 
        if(val < 6) {
          this.selectedQuestion = this.questions[val];
          this.hideCongrats();
        } else {
          this.displayCongrats();
        }
      }
    },
    mounted() {
      this.index = 0;
      this.displayIndemn();
    },
    methods: {
      answer: function(val) {
        if(val == this.answers[this.index]) {
          this.displayRighti();
          this.index++;
        } else {
          this.displayWrongi();

        }
      },
      restart: function() {
        this.index = 0;
      },
      displayWrongi: function() {
        document.getElementById('indemn').style.visibility = 'hidden';
        document.getElementById('righti').style.visibility = 'hidden';
        document.getElementById('wrongi').style.visibility = 'visible';
        setTimeout(this.displayIndemn, 3000);
      },
      displayRighti: function() {
        document.getElementById('indemn').style.visibility = 'hidden';
        document.getElementById('wrongi').style.visibility = 'hidden';
        document.getElementById('righti').style.visibility = 'visible';
        setTimeout(this.displayIndemn, 3000);
      },
      displayIndemn: function() {
        document.getElementById('wrongi').style.visibility = 'hidden';
        document.getElementById('righti').style.visibility = 'hidden';
        document.getElementById('indemn').style.visibility = 'visible';
      },
      displayCongrats: function() {
        document.getElementById('dancing').style.visibility = 'visible';
      },
      hideCongrats: function() {
        document.getElementById('dancing').style.visibility = 'hidden';
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .question-card {
    width: 300px;
    height: 160px;
    background-image: url('../assets/question_pancard.svg');
    border-radius: 5px;

    p {
      margin-top: 50px;
      font-size: 24px;
      max-width: 220px;
      font-weight: 800;
    }

    img {
      position: absolute;
      margin-left: 60px;
      transform: rotate(20deg);
    }
  }

  .answer-card {
    width: 160px;
    height: 176px;
    overflow: auto;
    position: relative;
    background-image: url('../assets/answer_pancard.svg');
    cursor: pointer;


    p {
      color: white;
      margin-top: 86px !important;
      font-size: 25px;
      max-width: 140px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .pinochio {
    position: absolute;
    margin-left: -660px;
    margin-top: 40px;
  }

  #restart {
    width: 110px;
    position: absolute;
    right: 260px;
    cursor: pointer;
  }

  

  #dancing {
    img{
    position: absolute;
    z-index: 9;
    width: 700px;
    margin-left: -350px;
    }
    h2 {
      font-size: 70px;
      color: rgb(255, 255, 132);
    }
  }
</style>