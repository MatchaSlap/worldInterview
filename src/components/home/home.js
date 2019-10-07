import firebase from 'firebase'
import firebaseUtil from '../util/firebaseUtil'
const fbu = new firebaseUtil()
export default {
    props:{
        id:String,
    },
    data: () => ({
          answers:{},
          questions:{},
    }),
    computed:{
        today:function(){
            let d = new Date()
            return d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate()
          },
    },
    created(){
        this.getQuestions()
        this.getAnswers()
    },
    methods:{
        getQuestions:function(date){
            const question = firebase.database().ref('question')
            if(date) question.orderByChild("date").equalTo(date).on("child_added",this.addQuestion)
            else question.orderByChild("date").limitToLast(20).on("child_added",this.addQuestion)
        },
        addQuestion:function(snap){
            const question = snap.val()
            this.$set(this.questions,snap.key,{
                key:snap.key,
                date:question.date,
                text:question.text,
            })
        },
        getAnswers:function(qid){
            const answer = firebase.database().ref('answer')
            if(qid) answer.orderByChild("qid").equalTo(qid).limitToLast(20).on("child_added",this.addAnswer)
            else answer.orderByChild("qid").limitToLast(20).on("child_added",this.addAnswer)
        },
        addAnswer:function(snap){
            const answer = snap.val()
            this.$set(this.answers,snap.key,{
                qid:answer.qid,
                question:answer.question,
                text:answer.text,
                icon:"",
                eval:answer.eval,
                comments:{},
                preComment:"",
                show:false,
            })
            if(answer.comments!=undefined){
                const cids = Object.keys(answer.comments)
                this.addComments(snap.key, cids)
            }
        },
    }
};