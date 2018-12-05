new Vue({
    el: '#vue-app',
    data: {
      health: 100,
      ended: false,
      half: false
    },
    methods: {
      punch() {
        this.health -= 10
        let snd = new Audio("/sound/punch.wav")
        snd.play()

        if(this.health === 0) {
          this.ended = true
          alert('Game Over! Click Restart to play again.');
        }

        if(this.health <= 50) {
          this.half = true
        }
      },
      restart() {
        this.health = 100
        this.ended = false
        this.half = false
      }
    },
    computed: {

    }
});
