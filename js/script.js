const {createApp} = Vue;

createApp({
  data(){
    return{
      title:'Hello VUE',
      words: '',
      clock: '',
      counter: 0,
      isEven: false,
    }
  },

  methods:{

    printClock(){
      const d =  new Date();
      const s = d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds();
      const m = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes();
      const h = d.getHours() < 10 ? '0'+d.getHours() : d.getHours();
      this.clock = `${h}:${m}:${s}`;
    },
  
    startClock(){
      
      setInterval(() => {
        this.printClock()
     
      }, 1000)
    },
    
    increase(){
      this.counter++

      if(this.counter % 2 === 0){
        this.isEven = true;
      }else{
        this.isEven = false;
      }
    },
  },
  
  mounted(){
    this.startClock();
    this.printClock();
  },
}).mount('#app');