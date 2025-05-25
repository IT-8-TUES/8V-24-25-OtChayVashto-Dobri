const answers = {
    flavor : null,
    taste : null,
    intensity : null,
    caffeine : null,
};

function selected_answer(question, answer, selected_button){
    answers[question] = answer;
    console.log(`currently selected in ${question} is ${answer}`);

    const btn_container = selected_button.parentElement;
    const buttons = btn_container.querySelectorAll('.q-button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    selected_button.classList.add('selected');

}


function get_result(){

    const none_answered = Object.values(answers).every(answer => answer === null);

    if(none_answered){
        alert("Please answer atleast one question.")
        return 1;
    }



    const tea_stats = {

        "daisy-bloom" : {flavor: "floral", taste: "bitter", intensity: "gentle", caffeine: "none", score: 0, url: "../Tsveta/products/product.html"},

        "rose-kiss" : {flavor: "floral", taste: "sweet", intensity: "medium", caffeine: "none", score: 0, url: "../Tsveta/products/rose.html"},

        "lavender-veil" : {flavor: "floral", taste: "sweet", intensity: "rich", caffeine: "none", score: 0, url: "../Tsveta/products/lavender.html"},

        "lush-lemon" : {flavor: "fruity", taste: "sour", intensity: "rich", caffeine: "none", score: 0, url: "../Tsveta/products/lemon.html"},

        "balkan-brew" : {flavor: "floral", taste: "sour", intensity: "gentle", caffeine: "none", score: 0, url: "../Tsveta/products/balkan.html"},

        "mountain-mist" : {flavor: "floral", taste: "sweet", intensity: "medium", caffeine: "none", score: 0, url: "../Tsveta/products/mountain.html"},

        "apple-orchard" : {flavor: "fruity", taste: "sweet", intensity: "rich", caffeine: "none", score: 0, url: "../Tsveta/products/apple.html"},

        "leafy" : {flavor: "herbal", taste: "bitter", intensity: "medium", caffeine: "medium", score: 0, url: "../Tsveta/products/leafy.html"},

        "dark-steep" : {flavor: "floral", taste: "bitter", intensity: "rich", caffeine: "high", score: 0, url: "../Tsveta/products/dark.html"},

        "inner-berry" : {flavor: "fruity", taste: "sweet", intensity: "medium", caffeine: "none", score: 0, url: "../Tsveta/products/berry.html"},

        "pure-thyme" : {flavor: "herbal", taste: "bitter", intensity: "rich", caffeine: "none", score: 0, url: "../Tsveta/products/thyme.html"},

        "tea-vibe" : {flavor: "herbal", taste: "sweet", intensity: "rich", caffeine: "none", score: 0, url: "../Tsveta/products/vibe.html"},

    };


    for(let tea_name in tea_stats){
        const tea = tea_stats[tea_name];
        if(tea.flavor === answers.flavor){
            tea.score += 1;
        }
        if(tea.taste === answers.taste){
            tea.score += 1;
        }
        if(tea.intensity === answers.intensity){
            tea.score += 1;
        }
        if(tea.caffeine === answers.caffeine){
            tea.score += 2;
        }

    }


    const tea_list = Object.values(tea_stats);
    tea_list.sort((a, b) => b.score - a.score);

    const final_pick = tea_list[0];

    if(final_pick){
        window.location.href = final_pick.url;
    } else{
        alert("Please pick atleast one preference.");
    }





}