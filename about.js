window.onload = function() {
    var faces = document.getElementsByClassName("face");
    for (const face of faces) {
        face.setAttribute('draggable', false);
    }
    const data = [
        {
            element: document.getElementById("Ben"),
            title: "- Ben Clayton. CMO.",
            quote: "I’m Ben, Abode is my first business venture but it’s a project I feel incredibly passionate about and I’m really excited to be working alongside such a talented team. I’ve learned a lot about running a business during my time working on Abode and I can’t wait to put what I’ve learned into action fully when we launch. I feel we can fully make a difference in the student housing process and I’m looking forward to enacting this positive change.",
        },
        {
            element: document.getElementById("Harry"),
            title: "- Harry Panter. CEO.",
            quote: "I’m Harry, I’ve always been passionate about making a difference and causing a change and felt Business is the best medium for that. This is my most current and exciting venture however I have had past experience with founding and running the Panter Business Group; a parent company of 3 successful businesses. I cannot wait to see what the future holds for abode.",
        },
        {
            element: document.getElementById("Joe"),
            title: "- Joe Gaudie. COO.",
            quote: "Being a co-founder of Abode has been challenging yet I’ve thoroughly enjoyed the steep learning curve of running your own business. Working with an ambitious and motivated team, all with a different skill-set, was an attractive prospect alongside the vision of the business and the potential to grow in Manchester and nationwide.",
        },
        {
            element: document.getElementById("Leo"),
            title: "- Leo Elmecker. CTO.",
            quote: "I'm Leo, a Computer Science student at the University of Manchester. I've always wanted to use my passion for coding for something bigger. Abode allows me to explore new areas and learn something different, day in and out, whether it is technical or entrepreneurial skills, I enjoy every bit of it.",
        }
    ];

    for (const person of data) {
        person.element.onclick = () => handleClick(person);
    };

    AOS.init();

    function handleClick(person) {
        let active = document.getElementsByClassName("active")[0];
        let activeText = document.getElementById("quote");
        let activeQuotee = document.getElementById("quotee");
        let quoteContainer = document.getElementById("quoteContainer");

        quoteContainer.removeAttribute("data-aos");
        quoteContainer.removeAttribute("data-aos-duration");
        quoteContainer.setAttribute("data-aos", "zoom-in");
        quoteContainer.setAttribute("data-aos-duration", 2000);

        active.classList.remove("active");
        activeText.innerHTML = person.quote;
        activeQuotee.innerHTML = person.title;
        person.element.classList.add("active");
    };
};