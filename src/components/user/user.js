import firebase from 'firebase'
import firebaseUtil from '../util/firebaseUtil'
const fbu = new firebaseUtil()
export default {
    props:{
        id:String,
    },
    data: () => ({
        displayName:"",
    }),
    computed:{
    },
    created(){
        const user = firebase.auth().currentUser
        this.displayName = user.displayName
    },
    methods:{
        updUser:function(){
            const user = firebase.auth().currentUser
            user.updateProfile({
                displayName:this.displayName,
            })
            .then(this.$router.push("/home"))
        },
        loadUser:function(){
            console.log("a")
        }
    }
};