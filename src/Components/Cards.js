import React from 'react';
import icon from '../Assets/icon.png';
import './Cards.css';

const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
    
        target.style.setProperty("--mouse-x", `${x}px`);	
        target.style.setProperty("--mouse-y", `${y}px`);
}

for(const card of document.querySelectorAll(".card")) {
    card.onmousemove = e => handleOnMouseMove(e);
}


function Cards() {
  return (
    <body>
        <div class="container">
            <div id="cards">
                <div class="card">
                    <div class="card-img"></div>
                    <img id="icon" src={icon} alt="icon"/>
                    <h2 class="title">Dorayaki</h2>
                    <button type="button" class="cardBtn">Button Label</button>
                    <div class="row">
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img"></div>
                    <img id="icon" src={icon} alt="icon"/>
                    <h2 class="title">Dorayaki</h2>
                    <button type="button" class="cardBtn">Button Label</button>
                    <div class="row">
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img"></div>
                    <img id="icon" src={icon} alt="icon"/>
                    <h2 class="title">Dorayaki</h2>
                    <button type="button" class="cardBtn">Button Label</button>
                    <div class="row">
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img"></div>
                    <img id="icon" src={icon} alt="icon"/>
                    <h2 class="title">Dorayaki</h2>
                    <button type="button" class="cardBtn">Button Label</button>
                    <div class="row">
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img"></div>
                    <img id="icon" src={icon} alt="icon"/>
                    <h2 class="title">Dorayaki</h2>
                    <button type="button" class="cardBtn">Button Label</button>
                    <div class="row">
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img"></div>
                    <img id="icon" src={icon} alt="icon"/>
                    <h2 class="title">Dorayaki</h2>
                    <button type="button" class="cardBtn">Button Label</button>
                    <div class="row">
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                        <div class="column">
                            <h1>3.14<span class="percentage">%</span></h1>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
  )
}

export default Cards;
