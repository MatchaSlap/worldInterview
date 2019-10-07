import firebase from 'firebase'
import firebaseUtil from '../util/firebaseUtil'
const fbu = new firebaseUtil()
export default {
    props:{
        id:String,
    },
    data: () => ({
        user:"",
        show:false,
        answers:{},
        question:{},
    }),
    computed:{
        today:function(){
            let d = new Date()
            return d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate()
          },
    },
    created(){
        this.getQuestions(this.id)
        this.getAnswers(this.question.key)
    },
    methods:{
        getQuestions:function(date){
            const question = firebase.database().ref('question')
            question.orderByChild("date").equalTo(date).on("child_added",this.addQuestion)
        },
        addQuestion:function(snap){
            const questions = snap.val()
            this.question = {
                key:snap.key,
                date:questions.date,
                text:questions.text,
            }
        },
        getAnswers:function(qid){
            const answer = firebase.database().ref('answer')
            answer.orderByChild("qid").equalTo(qid).limitToLast(20).on("child_added",this.addAnswer)
        },
        addAnswer:function(snap){
            const answer = snap.val()
            const thre = 50
            let shortText = answer.text.length > thre ? answer.text.slice(0,thre-1)+"...": answer.text 
            this.$set(this.answers,snap.key,{
                text:answer.text,
                shortText:shortText,
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
        postComment:async function(aid){
            const user = await fbu.getUser()
            const c ={
                text:this.answers[aid].preComment,
                date:this.today,
                uid:user.uid,
                _createdAt:user.uid,
                _updatedAt:user.uid,
            }
            const cPush = firebase.database().ref('comment').push()
            cPush.set(c)
            const cid = cPush.key
            firebase.database().ref('answer').child(aid).child("comments").update({[cid]:true})
            //
            this.addComments(aid,[cid])
            this.answers[aid].preComment = ""
        },
        addComments:function(aid, cids){
            const comments = firebase.database().ref('comment')
            cids.forEach(cid => {
                comments.orderByKey().equalTo(cid).on("child_added",snap=>{this.loadComments(snap,aid)}) 
            });
        },
        loadComments:function(snap,aid){
            const comment = snap.val()
            this.$set(this.answers[aid].comments,snap.key,{
                icon:"mdi-account",
                date:"2019/09/29",
                text:comment.text
            })
        },
        count:function(aid,icon){
            this.answers[aid].eval[icon] += 1
            firebase.database().ref('answer').child(aid).child("eval").update({[icon]:this.answers[aid].eval[icon]})
        }
    }
};