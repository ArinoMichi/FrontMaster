<template>
  <div>
    <button class="btn btn-danger" @click="playMusic()">Play</button>
  </div>
</template>

<script>
import music from './../assets/audio/champions.mp3'

export default {
    name: "MusicaComponent",
    methods: {
      playMusic(){
        var audio = new Audio(music)
        audio.play()
      }
    }
}
</script>

<style>

</style>