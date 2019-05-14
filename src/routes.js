import Question from './components/Question.vue'
import QuestionMedium from './components/QuestionMedium.vue'
import QuestionHard from './components/QuestionHard.vue'


export default [
  {path: '/', component: Question},
  {path: '/medium', component: QuestionMedium},
  {path: '/hard', component: QuestionHard},
]