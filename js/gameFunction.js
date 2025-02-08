const handleShowCurrentBox = (box) => {
    document.querySelector(`.caja${box === 0 ? "" : box}`).style.display = "block"
}

const handleOptionCorrectShow = (className) =>
    document.querySelector(className).style.display = "block"

const handleChangeView = (number) =>
    window.location.href = `./index${number}.html`

const handleSaveCorrectQuestion = (number, isTrue) => {
    const responses = JSON.parse(localStorage.getItem('responses'));

    if (!responses) {
        localStorage.setItem("responses", JSON.stringify([{[number]: isTrue}]));
    } else {
        if(!responses.includes(number)) localStorage.setItem("responses", JSON.stringify([...responses, {[number]: isTrue}]));
        
    }
}

const showBoxes = (question) => {
    if (question) {
        const responses = JSON.parse(localStorage.getItem("responses"));

        if (responses) {
            responses.forEach((response, i) => {
                if (i === question || i === (question - 1)) {
                    console.log(i)
                    const hasResponses = response                 

                    if (hasResponses[i]) {
                        if (i === question)
                            document.querySelector(".chulo1").style.display = "block";
                        else
                            document.querySelector(`.chulo`).style.display = "block";
                    } else if (hasResponses === null) {
                        console.log("no responsed")
                    } else {
                        if (i === question) {
                            document.querySelector(".mal1").style.display = "block";
                        } else {
                            document.querySelector(".mal").style.display = "block";
                        }
                    }
                }
            })
        }
    }
}

const handleCheckResults = () => {
    const responses = JSON.parse(localStorage.getItem("responses"))
    if (!responses) {
        localStorage.setItem("total", 0);
        window.location.href = './index592.html'
    } else {
        const indexs = [0,1,2,3,4,5,6,7,8,9]
        const trueResponses = responses.filter((item, index) => {
            return item[indexs[index]] === true
        })
        if (trueResponses.length === 10) {
            localStorage.setItem("total", 10);
            window.location.href = './index590.html'
        } else if (trueResponses.length < 8) {
            localStorage.setItem("total", trueResponses.length);
            window.location.href = './index592.html'
        } else {
            localStorage.setItem("total", trueResponses.length);
            window.location.href = './index591.html'
        }
    }
}