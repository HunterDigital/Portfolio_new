import React from 'react';

const Header = () => {
  return (
    <section class="parallax" id="parallax">
      <div class="layer layer--1"></div>
      <div class="layer layer--2"></div>
      <div class="layer layer--3"></div>
      <div class="layer layer--4"></div>
      <div class="starter starter--first">
          
          <h1 class="heading--primary">Cześć, nazywam się <span class="test">Tomasz Michalski</span>.</h1>
          
      </div>
      <div class="starter starter--second">
          <h1 class="heading--primary ">Jestem <span class="typer" id="main" data-words="front-end developerem,grafikiem,projektantem UI" data-colors="white" data-delay="50" data-deleteDelay="1500" ></span><span class="cursor" data-cursorDisplay="|"></span>.</h1>
      </div>
      <a href="#portfolio"><div class="viewwork">Zobacz moje prace</div></a>
    </section>
  )
}
export default Header;