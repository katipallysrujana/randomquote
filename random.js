let quote = document.querySelector(".quote")
let dataquotes = [
    "All that we are is the result of what we have thought. ",

    "If you judge people, you have no time to love them. ",

    "The most courageous act is still to think for yourself. ",

    "The greatest wealth is to live content with little. ",

    "The future belongs to those who prepare for it today.",

    " I have no special talent. I am only passionately curious.",

    "The successful warrior is the average man, with laser-like focus.",

    "Those who dare to fail miserably can achieve greatly.",

    "A great man is always willing to be little.",

    "The root of suffering is attachment.",

    "Wisely, and slow. They stumble that run fast.",


    "Keep calm and carry on.",

    "To be, or not to be, that is the question.",

    "That's one small step for a man, one giant leap for mankind.",


    "Ask not what your country can do for you, but what you can do for your country. ",


    "Family is the most important thing in the world. ",

    "All I was doing was trying to get home from work. ",

    "I came, I saw, I conquered. ",

    "I think, therefore I am. "


];
function generateQuote(){
    let a=Math.floor(Math.random()*dataquotes .length

    )
    console.log(a)
    quote.textContent=dataquotes[a]
}