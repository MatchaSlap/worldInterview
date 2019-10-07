import firebase from 'firebase'
import firebaseUtil from '../util/firebaseUtil'
const fbu = new firebaseUtil()
export default {
    data: () => ({
        question:{},
        answer:"",
    }),
    computed:{
        today:function(){
            let d = new Date()
            return d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate()
          },
    },
    created(){
        this.getQuestions(this.today.replace("/","").replace("/",""))
    },
    methods:{
        getQuestions:function(date){
            const question = firebase.database().ref('question')
            question.orderByChild("date").equalTo(date).on("child_added",this.addQuestion)
        },
        test:async function(){
            // let p={
            //     date:"2019/09/29",
            //     text:"Where do you want to go for travel?",
            // }
            // firebase.database().ref('question').push(p,()=>{console.log(p)})
            // console.log(await fbu.getUser())
        },
        addQuestion:function(snap){
            const questions = snap.val()
            this.question = {
                key:snap.key,
                date:questions.date,
                text:questions.text,
            }
        },
        post:async function(){
            // データ登録(answer)
            const user = await fbu.getUser()
            const date = this.today.replace("/","").replace("/","")
            let p = {
                _createdAt:user.uid,
                _updatedAt:user.uid,
                userName:user.displayName,
                qid:this.question.key,
                date:date,
                text:this.answer,
                eval:{
                    like:0,
                    wow:0,
                }
            }
            firebase.database().ref('answer').push(p)
            // 遷移(Answers)
            this.$router.push('/answers/'+date)
        },
    }
};