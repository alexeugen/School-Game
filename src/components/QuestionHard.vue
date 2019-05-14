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
      <div class="row">
      <div class="col-md-4 text-center">
        <div class="answer-card answer-card-1 mx-auto" @click="answer(1)">
          <img src="../assets/answers-medium/puppet.png" class="ans-img" v-if="index == 0" alt="">
          <img src="../assets/answers-medium/fly.png" class="ans-img" v-if="index == 1" alt="">
          <img src="../assets/answers-medium/fox-cat.png" class="ans-img" v-if="index == 2" alt="">
          <img src="../assets/answers-medium/tomatoe.png" class="ans-img" v-if="index == 3" alt="">
          <img src="../assets/answers-medium/liar.jpg" class="ans-img" v-if="index == 4" alt="">
          <img src="../assets/answers-medium/sad.png" class="ans-img" v-if="index == 5" alt="">
          <p>{{selectedQuestion.ans1}}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="answer-card answer-card-2 mx-auto" @click="answer(2)">
          <img src="../assets/answers-medium/clock.png"  v-if="index == 0" class="ans-img" alt="">
          <img src="../assets/answers-medium/float.png"  v-if="index == 1" class="ans-img" alt="">
          <img src="../assets/answers-medium/donkey-bear.png"  v-if="index == 2" class="ans-img" alt="">
          <img src="../assets/answers-medium/coins.png"  v-if="index == 3" class="ans-img" alt="">
          <img src="../assets/answers-medium/clever.png"  v-if="index == 4" class="ans-img" alt="">
          <img src="../assets/answers-medium/bored.png"  v-if="index == 5" class="ans-img" alt="">
          <p>{{selectedQuestion.ans2}}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="answer-card answer-card-3 mx-auto" @click="answer(3)">
          <img src="../assets/answers-medium/train.png" class="ans-img"  v-if="index == 0" alt="">
          <img src="../assets/answers-medium/walk.png" class="ans-img"  v-if="index == 1" alt="">
          <img src="../assets/answers/father.png" class="ans-img"  v-if="index == 2" alt="">
          <img src="../assets/answers-medium/shoes.png" class="ans-img"  v-if="index == 3" alt="">
          <img src="../assets/answers-medium/boring.png" class="ans-img"  v-if="index == 4" alt="">
          <img src="../assets/answers-medium/happy.jpg" class="ans-img"  v-if="index == 5" alt="">
          <p>{{selectedQuestion.ans3}}</p>
        </div>
      </div>
        

      </div>
   
  </div>
</template>

<script>
  export default {
    name: 'QuestionMedium',
    data: function () {
      return {
        questions: [{
          question: "What does Geppetto usually make?",
          ans1: "puppets",
          ans2: "clocks",
          ans3: "toy trains",
        },{
          question: "Pinocchio was made from wood, so he could:",
          ans1: "fly",
          ans2: "float",
          ans3: "walk",
        },{
          question: "On the way to the school, Pinocchio meets:",
          ans1: "Fox and Cat",
          ans2: "Donkey and Bear",
          ans3: "his father",
        },{
          question: "At the Fair, the spectators threw:",
          ans1: "tomatoes",
          ans2: "coins",
          ans3: "shoes",
        },{
          question: "At the start of the story, Pinocchio was:",
          ans1: "a liar",
          ans2: "a clever boy",
          ans3: "a boring child",
        },{
          question: "When Geppetto saw Pinocchio alive, he is:",
          ans1: "sad",
          ans2: "bored",
          ans3: "happy",
        }],
        selectedQuestion: {},
        index: {},
        answers: [2, 2, 1, 2, 1, 3]
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
      margin-top: 80px !important;
      font-size: 25px;
      max-width: 143px;
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

  .ans-img {
    position: absolute;
    max-width: 70px;
    max-height: 80px;
    left: 50%;
    margin-left: -40px;
    margin-top: 10px;
  }
</style>