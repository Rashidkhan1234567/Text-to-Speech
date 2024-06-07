function speak(){
    let synth = window.speechSynthesis
    let voice = new SpeechSynthesisUtterance(`${textbox.value}`)
    synth.speak(voice)
}