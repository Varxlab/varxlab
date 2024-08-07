function readMore(){
    let btns = document.querySelectorAll(".readMoreBtn");
    let contentElements = document.querySelectorAll(".readMorePara");

    btns.forEach((btn, index) => {
        let contentElement = contentElements[index];
        let moreContent = contentElement.innerText;

        if (moreContent.length > 100) {
            let cutOffIndex = moreContent.lastIndexOf(' ', 100);
            let lessContent = moreContent.substring(0, cutOffIndex) + "...";
            contentElement.innerText = lessContent;
        }

        btn.addEventListener("click", () => {
            window.location.href = "http://localhost:5500/readMore.html";
        });
    });
}

readMore();
