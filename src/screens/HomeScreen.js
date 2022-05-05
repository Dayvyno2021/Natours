import React from 'react'

function HomeScreen() {
  return (
    <>
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id='navi-toggle'/>
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="#" className="navigation__link"> <span>01</span> About Natous</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link"> <span>02</span> Your benefits</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link"> <span>03</span> Popular Tours</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link"> <span>04</span> Stories</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link"> <span>05</span> book now</a></li>
          </ul>
        </nav>
      </div>

      <header className='header'>
        <div className='header__logo-box'>
          <img src="img/logo-white.png" alt="Logo" className='header__logo' />
        </div>

        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>Outdoors</span>
            <span className='heading-primary--sub'>is where life happens</span>
          </h1>

          <a href="#section-tours" className='btn btn--white btn--animated'>Discover our tours</a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>

          <div className='row'>
            <div className='col-1-of-2'>
              
              <h3 className="heading-tertiary  u-margin-bottom-small">You are going to fall in love with nature</h3>
              <p className="paragragh">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur magni non, nobis quam itaque. Magnam ex nemo consectetur iusto! Adipisci accusamus aliquam reiciendis dolorum perspiciatis recusandae deleniti facere rerum!
              </p>

              <h3 className="heading-tertiary  u-margin-bottom-small">Live adventures like you never have before</h3>
              <p className="paragragh">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iste aliquid blanditiis nostrum accusantium velit, sunt neque nihil libero ducimus soluta saepe atque labore a, minima laborum id quo ex.
              </p>
              <a href="#" className="btn-text">Learn more &rarr;</a>
            </div>
            <div className='col-1-of-2'>
              <div className="composition">
                <img srcSet="img/nat-1.jpg 300w, img/nat-1.jpg 1000w" 
                  sizes='(max-width: 56.25em) 27.78vw, (max-width: 37.5em) 29.6vw, 300px' 
                  src='img/nat-1.jpg' alt="photo1"  
                  className="composition__photo composition__photo--p1"/>

                <img srcSet="img/nat-2.jpg 300w, img/nat-2.jpg 1000w" 
                  sizes='(max-width: 56.25em) 27.78vw, (max-width: 37.5em) 29.6vw, 300px' 
                  src='img/nat-2.jpg' alt="photo2"  
                  className="composition__photo composition__photo--p2"/>

                <img srcSet="img/nat-3.jpg 300w, img/nat-3.jpg 1000w" 
                  sizes='(max-width: 56.25em) 27.78vw, (max-width: 37.5em) 29.6vw, 300px' 
                  src='img/nat-3.jpg' alt="photo3"  
                  className="composition__photo composition__photo--p3"/>
                
                
                {/* <img src="/img/nat-1-large.jpg" alt="phot1" className="composition__photo composition__photo--p1" />
                <img src="/img/nat-2-large.jpg" alt="phot2" className="composition__photo composition__photo--p2" />
                <img src="/img/nat-3-large.jpg" alt="phot3" className="composition__photo composition__photo--p3" /> */}
              </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="row">

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon material-icons">language</span> 
                <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                <p className="feature_box__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iste aliquid blanditiis nostrum
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon material-icons">explore</span> 
                <h3 className="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
                <p className="feature_box__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iste aliquid blanditiis nostrum
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon material-icons">favorite_border</span> 
                <h3 className="heading-tertiary u-margin-bottom-small">Live a healthy life</h3>
                <p className="feature_box__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iste aliquid blanditiis nostrum
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon material-icons">place</span> 
                <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                <p className="feature_box__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iste aliquid blanditiis nostrum
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tours" id='section-tours'>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Most popular tours
            </h2>
          </div>
          <div className='row'>
            <div className='col-1-of-3'>
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">
                    &nbsp;
                  </div>          
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li> up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">&#8358;{(297*600).toLocaleString()}</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-1-of-3'>
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">
                    &nbsp;
                  </div>          
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">The Forest Hiker</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>7 day tours</li>
                      <li> up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">&#8358;{(497*600).toLocaleString()}</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className='col-1-of-3'>
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">
                    &nbsp;
                  </div>          
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>5 day tours</li>
                      <li> up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>sleep in provided tents</li>
                      <li>Difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">&#8358;{(897*600).toLocaleString()}</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">Discover all tours</a>
          </div>
        </section>
        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src='img/video.mp4' type='video/mp4' />
              <source src='img/video.mp4' type='video/webm' />
              Your browser is not supported
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img src="img/nat-8.jpg" alt="person on a tour" className='story__img' />
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ut ad dolorum quaerat ducimus repellendus voluptas sequi temporibus ipsa dolores, facilis repellat iure, sit recusandae esse, architecto similique voluptate autem.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ut ad dolorum quaerat ducimus repellendus voluptas sequi temporibus ipsa dolores, facilis repellat iure, sit recusandae esse, architecto similique voluptate autem.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img src="img/nat-9.jpg" alt="person on a tour" className='story__img' />
                <figcaption className="story__caption">Jack Wilson</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ut ad dolorum quaerat ducimus repellendus voluptas sequi temporibus ipsa dolores, facilis repellat iure, sit recusandae esse, architecto similique voluptate autem.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ut ad dolorum quaerat ducimus repellendus voluptas sequi temporibus ipsa dolores, facilis repellat iure, sit recusandae esse, architecto similique voluptate autem.
                </p>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn-text">Read all stories &rarr;</a>
          </div>
        </section>

        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">

                <form action="#" className="form">

                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">
                      Start Booking Now
                    </h2>
                  </div>
                  
                  <div className="form__group">
                    <input type="text" className="form__input" placeholder='Full Name' id='name' required />
                    <label htmlFor="name" className="form__label">Full Name</label>
                  </div>

                  <div className="form__group">
                    <input type="email" className="form__input" placeholder='Email Address' id='email' required />
                    <label htmlFor="email" className="form__label">Email Address</label>
                  </div>
                  
                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input type="radio" id={'small'} className="form__radio-input" name='tour-size'/>
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input type="radio" id={'large'} className="form__radio-input" name='tour-size' />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>
                  <div className="form__group">
                    <button className="btn btn--green">
                      Next Step &rarr;
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <source srcSet="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x" media="(max-width: 37.5em)" />
            <img srcSet="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="full logo" src='img/logo-green-2x.png' />
          </picture>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                
                <li className="footer__item">
                  <a href="#" className="footer__link">Company</a>
                </li>

                <li className="footer__item">
                  <a href="#" className="footer__link">Contact us</a>
                </li>

                <li className="footer__item">
                  <a href="#" className="footer__link">Careers</a>
                </li>

                <li className="footer__item">
                  <a href="#" className="footer__link">Privacy Policy</a>
                </li>

                <li className="footer__item">
                  <a href="#" className="footer__link">Terms</a>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by <a href="#" className="footer__link">Dayve Media</a> with React, pure HTML and Sass
            </p>
          </div>
        </div>

        <div className="popup" id='popup'>
          <div className="popup__content">
            <div className="popup__left">
              <img src="img/nat-8.jpg" alt="tour photo" className='popup__img'/>
              <img src="img/nat-9.jpg" alt="tour photo" className='popup__img'/>
            </div>
            <div className="popup__right">
              <a href="#" className="popup__close">&times;</a>
              <h2 className="heading-secondary u-margin-bottom-small ">Start booking now</h2>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Important &ndash; Please read terms before booking
              </h3>
              <p className="popup__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum assumenda, 
                reprehenderit sit architecto minima voluptatibus dolore quos laudantium doloribus 
                tenetur harum provident, distinctio quaerat. Earum dolor ipsum expedita fugiat!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum assumenda, 
                reprehenderit sit architecto minima voluptatibus dolore quos laudantium doloribus 
                tenetur harum provident, distinctio quaerat. Earum dolor ipsum expedita fugiat!
              </p>
              <a href="#" className="btn btn--green u-margin-top-small">Book Now</a>
            </div>
          </div>
        </div>

      </footer>


      {/* <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>
            Col 1 of 2
          </div>
          <div className='col-1-of-2'>
            Col 1 of 2
          </div>
        </div>
        
        <div className='row'>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
        </div>

        <div className='row'>
          <div className='col-1-of-3'>
            Col 1 of 3
          </div>
          <div className='col-2-of-3'>
            Col 2 of 3
          </div>
        </div>
              
        <div className='row'>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
        </div>
              
        <div className='row'>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-2-of-4'>
            Col 2 of 4
          </div>
        </div>
              
        <div className='row'>
          <div className='col-1-of-4'>
            Col 1 of 4
          </div>
          <div className='col-3-of-4'>
            Col 3 of 4
          </div>
        </div>
      </section> */}
    </>
  )
}

export default HomeScreen