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
          <img src="../assets/answers-medium/flag-italy.png" class="ans-img" v-if="index == 0" alt="">
          <img src="../assets/answers-medium/red.png" class="ans-img" v-if="index == 1" alt="">
          <img src="../assets/answers-medium/school.png" class="ans-img" v-if="index == 2" alt="">
          <img src="../assets/answers-medium/jacket.png" class="ans-img" v-if="index == 3" alt="">
          <img src="../assets/answers-medium/cartoon.png" class="ans-img" v-if="index == 4" alt="">
          <img src="../assets/answers-medium/whale.png" class="ans-img" v-if="index == 5" alt="">
          <img src="../assets/answers-medium/puppet.png" class="ans-img" v-if="index == 6" alt="">
          <img src="../assets/answers-medium/robot.png" class="ans-img" v-if="index == 7" alt="">
          <img src="../assets/answers-medium/grandfather.png" class="ans-img" v-if="index == 8" alt="">
          <img src="../assets/answers-medium/puppet.png" class="ans-img" v-if="index == 9" alt="">
          <p>{{selectedQuestion.ans1}}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="answer-card answer-card-2 mx-auto" @click="answer(2)">
          <img src="../assets/answers-medium/flag-germany.png"  v-if="index == 0" class="ans-img" alt="">
          <img src="../assets/answers-medium/green.png"  v-if="index == 1" class="ans-img" alt="">
          <img src="../assets/answers-medium/church.png"  v-if="index == 2" class="ans-img" alt="">
          <img src="../assets/book.png"  v-if="index == 3" class="ans-img" alt="">
          <img src="../assets/answers-medium/room.png"  v-if="index == 4" class="ans-img" alt="">
          <img src="../assets/answers-medium/shark.jpg"  v-if="index == 5" class="ans-img" alt="">
          <img src="../assets/answers-medium/clock.png"  v-if="index == 6" class="ans-img" alt="">
          <img src="../assets/answers-medium/elephant.png"  v-if="index == 7" class="ans-img" alt="">
          <img src="../assets/answers/father.png" class="ans-img"  v-if="index == 8" alt="">
          <img src="../assets/answers-medium/airplane.png" class="ans-img"  v-if="index == 9" alt="">
          <p>{{selectedQuestion.ans2}}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="answer-card answer-card-3 mx-auto" @click="answer(3)">
          <img src="../assets/answers-medium/flag-france.png" class="ans-img"  v-if="index == 0" alt="">
          <img src="../assets/answers-medium/blue.png" class="ans-img"  v-if="index == 1" alt="">
          <img src="../assets/answers-medium/park.png" class="ans-img"  v-if="index == 2" alt="">
          <img src="../assets/answers-medium/schoolbag.png" class="ans-img"  v-if="index == 3" alt="">
          <img src="../assets/answers-medium/birdcage.png" class="ans-img"  v-if="index == 4" alt="">
          <img src="../assets/answers-medium/dolphin.png" class="ans-img"  v-if="index == 5" alt="">
          <img src="../assets/answers-medium/house.png" class="ans-img"  v-if="index == 6" alt="">
          <img src="../assets/answers-medium/donkey.png" class="ans-img"  v-if="index == 7" alt="">
          <img src="../assets/answers-medium/uncle.png" class="ans-img"  v-if="index == 8" alt="">
          <img src="../assets/answers-medium/dance.png" class="ans-img"  v-if="index == 9" alt="">
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
          question: "Geppetto lived in:",
          ans1: "Italy",
          ans2: "Germany",
          ans3: "France",
        },{
          question: "The bright star was:",
          ans1: "Red Fairy",
          ans2: "Green Fairy",
          ans3: "Blue Fairy",
        },{
          question: "Pinocchio was going to:",
          ans1: "the school",
          ans2: "the church",
          ans3: "the park",
        },{
          question: "Pinocchio sold his:",
          ans1: "jacket",
          ans2: "schoolbooks",
          ans3: "an schoolbag",
        },{
          question: "Pinocchio was locked in:",
          ans1: "a box",
          ans2: "a room",
          ans3: "a birdcage",
        },{
          question: "Pinocchio was eaten by:",
          ans1: "a whale",
          ans2: "a shark",
          ans3: "a dolphin",
        },{
          question: "What did Geppetto make for himself?",
          ans1: "a puppet",
          ans2: "a clock",
          ans3: "a house",
        },{
          question: "Pinocchio transformed into:",
          ans1: "a robot",
          ans2: "an elephant",
          ans3: "a donkey",
        },{
          question: "Who is Geppetto for Pinocchio?",
          ans1: "grandfather",
          ans2: "father",
          ans3: "uncle",
        },{
          question: "The Fair was :",
          ans1: "a puppet show",
          ans2: "an acrobatic show",
          ans3: "a dance show",
        }],
        selectedQuestion: {},
        index: {},
        answers: [1, 3, 1, 2, 3, 1, 1, 3, 2, 1]
      }
    },
    watch: {
      index: function (val) { 
        if(val < 10) {
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