(function (window) {
    var hellospeaker = {};
    var speakword = "Hello";
    hellospeaker.speak = function speak(name) {
        console.log(speakword + " " + name)
    }
    window.hellospeaker = hellospeaker;
})(window)