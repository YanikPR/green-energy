    function preloader() {
        const imagesList = [
            "./img/img-1.jpg",
            "./img/img-2.jpg",
            "./img/img-3.jpg",
            "./img/img-4.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }
        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}\n\t${images[3].src}`);
    };
    window.addEventListener("load", preloader);

    const btns = document.querySelectorAll("button");

    const resources = {
        wind: {
            headingContent: "Wind",
            imgUrl: "./img/img-4.jpg",
            imgAlt:"Wind Power",
            bodyText: "Although you do not need giant wind mills like the ones shown here, but creating a simple yet effective source for catching the power from the wind will be efficient and cost friendly."
        },
        water: {
            headingContent: "Water",
            imgUrl: "./img/img-3.jpg",
            imgAlt: "Water Power",
            bodyText: "When flowing water is captured and turned into electricity, it is called hydroelectric power or hydropower. There are several types of hydroelectric facilities; they are all powered by the kinetic energy of flowing water as it moves downstream."
        },
        solar: {
            headingContent: "Solar Power",
            imgUrl: "./img/img-2.jpg",
            imgAlt: "Solar Power",
            bodyText: "The cost to build solar power has plummeted over the last decade, a new report suggests Canadians aren't rushing use the sun to make electricity. By installing solar panels you will reduce the energy that you use from the electrical grid,which means you don’ t have to buy as much.In some provinces you can even sell your solar - produced power to your utility provider, earning money for the energy you produce "
        }
    }

    // Finding our event-target objects
    const container = document.querySelector(".content");

    /* The first button in a NODE LIST of buttons will initially 
        have the id: active-button - this will uniquely style 
        the active button (CSS rule). 
        */
    btns[0].setAttribute("id", "active-button");

    container.innerHTML = 
    `<h1>${resources.wind.headingContent}</h1>
     <img src="${resources.wind.imgUrl}" alt="${resources.wind.imgAlt}">
     <p>${resources.wind.bodyText}</p>`;

    function handleClick(ev) {


        for (let btn of btns) {
            if (btn.hasAttribute("id")) {
                btn.removeAttribute("id");
            }
        }


        ev.target.setAttribute("id", "active-button");

        let btnLabel = ev.target.textContent;

        if (btnLabel === "WATER") {
            container.innerHTML = `
            <h1>${resources.water.headingContent}</h1>
            <img src = "${resources.water.imgUrl}"
                alt = "${resources.water.imgAlt}" >
                <p>${resources.water.bodyText}</p>`;

        } else if (btnLabel === "SOLAR") {
           container.innerHTML = `<h1>${resources.solar.headingContent}</h1>
            <img src = "${resources.solar.imgUrl}"
                alt = "${resources.solar.imgAlt}" >
                <p>${resources.solar.bodyText}</p>`;
        } else {
           container.innerHTML = `<h1>${resources.wind.headingContent}</h1>
            <img src = "${resources.wind.imgUrl}"
                alt = "${resources.wind.imgAlt}" >
                <p>${resources.wind.bodyText}</p>`;
            
            }
    }

    // Registerring all buttons for CLICK event
    for (let btn of btns) {
        btn.addEventListener("click", handleClick);
    }
