import React from 'react';
import './App.css'

const App = () => {
  

  return (

    <>
    <div className='m-10'>
    <div class="main">
  <nav>
    <img src="https://assets-global.website-files.com/642697fb54ecdf65a3edf7df/64d4a131d284d2009739182b_Frame_13__1_-removebg-preview.png" alt="logo" class="logo"/>
      <ul>
        <li><a href="https://www.spur.fit/#About">About Us</a></li>
        <li><a href="https://www.spur.fit/contact">Contact Us</a></li>
        <li><a href="https://www.spur.fit/get-started-with-spur-fit">Get Started with Spur.Fit</a></li>
        <li><a href="https://www.spur.fit/privacy-policy">Privacy Policy</a></li>
      </ul>

      <div id="search" className="mt-5">
                <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
                    <rect className="bar" />

                    <g className="magnifier">
                        <circle class="glass" />
                        <line class="handle" x1="32" y1="32" x2="44" y2="44"></line>
                    </g>

                    <g class="sparks">
                        <circle class="spark" />
                        <circle class="spark" />
                        <circle class="spark" />
                    </g>

                    <g class="burst pattern-one">
                        <circle class="particle circle" />
                        <path class="particle triangle" />
                        <circle class="particle circle" />
                        <path class="particle plus" />
                        <rect class="particle rect" />
                        <path class="particle triangle" />
                    </g>
                    <g class="burst pattern-two">
                        <path class="particle plus" />
                        <circle class="particle circle" />
                        <path class="particle triangle" />
                        <rect class="particle rect" />
                        <circle class="particle circle" />
                        <path class="particle plus" />
                    </g>
                    <g class="burst pattern-three">
                        <circle class="particle circle" />
                        <rect class="particle rect" />
                        <path class="particle plus" />
                        <path class="particle triangle" />
                        <rect class="particle rect" />
                        <path class="particle plus" />
                    </g>
                </svg>
                <input type="search" name="q" aria-label="Search for inspiration" />
            </div>
    </nav>
  <div className="content">
  <h1 class="anim">World's first Copilot for
            
                fitness trainers</h1>
    <p class="anim">World's first AI Assistant for fitness & health professionals.</p>
    <div class="links anim">
      <button><span></span>Login</button>
      <button><span></span>Sin in</button>
    </div>

    <div class="mt-5">
                <h6 class="anim">Hear what our coaches have to say</h6>

                <div class="container">
                    <div>
                        <div class="content">
                            <p>World's first AI Assistant for fitness & health professionals.</p>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <p>"Teaming up with Spur.Fit has been a game-changer for Chem Fit. They've helped us streamline operations, improve client experience, and confidently scale our business."</p>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <p>"The Co-pilot helps out a lot because you can get as specific as you want. 'Cause I can go in, I can type in like a three-week program, emphasis on core, and it'll break down an entire workout while emphasizing the core"</p>
                            <span>Web Designer</span>
                        </div>
                    </div>
                    <div>
                        <div class="content">
                            <p>"Creating workouts & diet plan using Spur.Fit's Co-Pilot is so easy. I can manage almost 5x clients through the app and yet save my time."</p>
                        </div>
                    </div>
                     <div>
                        <div class="content">
                            <p>"Spur.Fit is a one-stop solution for me & my clients. Creating workouts, meal plans, communication, managing payments, custom branded app & is just so easy to use."</p>
                        </div>
                    </div>
                </div>
            </div>
  </div>
</div><footer>
    <div class="row">
      <div class="col">
        <img src="https://assets-global.website-files.com/642697fb54ecdf65a3edf7df/64d4a131d284d2009739182b_Frame_13__1_-removebg-preview.png" alt="logo" class="footer_logo"/>
          <p class="footer_about">Spur.Fit is a coaching platform that lets you create customizable workout & diet plans using its inbuilt AI assistant so you can save your time & scale upto 5x.
          </p>
        </div>
      <div class="col">
        <h3>Office <div class="bottom_line"><span></span></div>
        </h3>
        <p>2841 Romines Mill Road</p>
        <p>Plano</p>
        <p>Texas, ZIP 75074, United States</p>
        <p class="footer_email">alexastockphotos@gamil.com</p>
        <h4>+1 - 2145958195</h4>
      </div>
      <div class="col">
        <h3>Links <div class="bottom_line"><span></span></div>
        </h3>
        <ul>
          <li><a href="https://www.spur.fit/">HOME</a></li>
          <li><a href="https://www.spur.fit/#About">ABOUT</a></li>

          <li><a href="https://www.spur.fit/contact">CONTACT US</a></li>
        </ul>
      </div>
      <div class="col">
        <h3>Newsletter <div class="bottom_line"><span></span></div>
        </h3>
        <form>
          <ion-icon class="icon" name="mail"></ion-icon>
          <input type="email" placeholder="Enter your email" required/>
            <button type="submit">
              <ion-icon class="icon_right" name="arrow-round-forward"></ion-icon>
            </button>
          </form>
        <div class="social_icons">
          <ion-icon class="social_icon" name="logo-facebook"></ion-icon>
          <ion-icon class="social_icon" name="logo-whatsapp"></ion-icon>
          <ion-icon class="social_icon" name="logo-twitter"></ion-icon>
          <ion-icon class="social_icon" name="logo-instagram"></ion-icon>
        </div>
      </div>
    </div>
    <hr/>
      <p class="copyright">Cosas Learning Ⓒ 2022 - All Rights Reserved</p>
    </footer>
    </div>
    </>
  );
};

export default App
