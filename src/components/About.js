import React from 'react';

const About = () => {
  return (
    <section class="about" id="about">
           <h2 class="heading--secondary">O mnie</h2>
            <div class="about__description">
                <div class="about__description__card card--1">
                    <div class="circle"><ion-icon name="speedometer"></ion-icon></div>
                    <h3 class="heading--tertiary">&nbsp&nbspSzybka&nbsp&nbsp</h3>
                    <p>Moje projekty mają mały czas ładowania i działają bez opóźnień.</p>
                    
                </div>
                <div class="about__description__card card--2">
                    <div class="circle"><ion-icon name="bulb"></ion-icon></div>
                    <h3 class="heading--tertiary">&nbsp&nbspIntuicyjna&nbsp&nbsp</h3>
                    <p>Czyste i łatwe do zrozumienia interfejsy trafią bezpośrednio do każdego użytkownika.</p>
                    
                </div>
                <div class="about__description__card card--3">
                    <div class="circle"><ion-icon name="flash"></ion-icon></div>
                    <h3 class="heading--tertiary">&nbsp&nbspDynamiczna&nbsp&nbsp</h3>
                    <p>Strony responsywne i pełne życia, moją pasją są animacje <br />>i doświadczenie klienta.</p>
                    
                </div>
                <div class="about__description__card card--4">
                    <div class="circle"><ion-icon name="flash"></ion-icon></div>
                    <h3 class="heading--tertiary">&nbsp&nbspDynamiczna&nbsp&nbsp</h3>
                    <p>Strony responsywne i pełne życia, moją pasją są animacje <br />i doświadczenie klienta.</p>
                    
                </div>
                
            </div>
            <div class="personal">
                <div class="left">
                    
                </div>
                
                <div class="right">
                    <div class="skillbar">
                        <div class="skillbar--what">
                            <p>HTML</p>
                        </div>
                        <div class="progress progress__1"></div>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar--what">
                            <p>CSS</p>
                        </div>
                        <div class="progress progress__2"></div>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar--what">
                            <p>SASS</p>
                        </div>
                        <div class="progress progress__3"></div>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar--what">
                            <p>JS</p>
                        </div>
                        <div class="progress progress__4"></div>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar--what">
                            <p>NODE.js</p>
                        </div>
                        <div class="progress progress__5"></div>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar--what">
                            <p>Angular</p>
                        </div>
                        <div class="progress progress__6"></div>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar--what">
                            <p>Adobe XD</p>
                        </div>
                        <div class="progress progress__7"></div>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default About;