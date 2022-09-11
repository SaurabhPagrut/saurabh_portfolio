let homejs = () => {
    return `
        <div id="home_container">
            <div class="avatar">
                <img src="./Images/Personal/SaurabhPagrut.png" alt="SaurabhPagrut">
            </div>
            <div class="intro_resume">
                <div class="intro">
                    <h2>Hi, my name is</h2>
                    <a href="./index.html">
                        <h1>Saurabh Pagrut</h1>
                    </a>
                    <h1>I'm a Java Backend Developer</h1>
                </div>
                <div id="buttons">
                    <a href="mailto:getsaurabhpagrut@gmail.com" target="_blank"><button class="intro_btn">CONNECT
                            NOW</button></a>
                    <a href="./Images/Files/Saurabh_Pagrut_Resume.pdf" target="_blank" download><button
                            class="intro_btn">RESUME</button></a>
                </div>
            </div>
        </div>
    `;
};

export { homejs };