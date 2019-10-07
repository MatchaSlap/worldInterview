<template>
  <v-app>
  <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense v-for="(nItem,i) in navItems">
        <v-list-item @click="pageTransition(nItem.path,nItem.q)">
          <v-list-item-action>
            <v-icon>{{nItem.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{nItem.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>    
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>World Interview</span>
        <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
      <v-btn class="ma-2" text icon v-on:click="login">
          <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn class="ma-2" text icon v-on:click="logout">
          <v-icon>mdi-logout</v-icon>
      </v-btn>

    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import firebase from 'firebase'
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    status:false,
    nav:false,
    drawer:false,
    navItems:[
      {icon:"mdi-contact-mail",title:"Home",path:"/home",q:"uid"},
      {icon:"mdi-contact-mail",title:"Profile",path:"/user",q:"uid"},
      {icon:"mdi-contact-mail",title:"Today's Interview",path:"/interview"},
      {icon:"mdi-contact-mail",title:"Answers",path:"/answers",q:"date"},
    ]
  }),
  computed:{
      today:function(){
          let d = new Date()
          return d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate()
        },
  },

  methods:{
      login:function(){
          console.log("login push");
          var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(async function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // 
            this.nav = true
            this.$router.push("/home/"+user.uid)
          }.bind(this))
          // })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorMessage)
          });
      },
      logout:function(){
        firebase.auth().signOut().then(function(){
            console.log("logout success")
        })
        .then(()=>{
            this.$router.push("/")
        })
        .catch(function(error){
          console.log("logout error")
          console.log(error)
        })
      },
      getUser:function(uid){
        return new Promise((resolve,reject)=>{
          const user = firebase.database().ref('user')
          const tmp =  user.orderByChild("uid").equalTo(uid).on("child_added",snap=>{
            console.log("AAAA",snap)
            resolve(snap)
          })
          console.log(tmp)
        })
      },
      pageTransition:function(path,query){
        if(!query) this.$router.push(path)
        else{
          let q = ""
          const user = firebase.auth().currentUser
          if(query=="uid") q = user.uid
          else if (query=="date") q = this.today.replace("/","").replace("/","")
          this.$router.push(path+"/"+q)
        }
      }
  }
};
</script>
