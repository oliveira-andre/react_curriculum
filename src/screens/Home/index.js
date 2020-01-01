import React, { Fragment, useState } from 'react';
import 'bulma/css/bulma.css'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import MineImage from '../../assets/images/me.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faGitlab, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [socialMedia] = useState(
    [
      { icon: faGithub, link: 'https://github.com/oliveira-andre' },
      { icon: faTwitter, link: 'https://twitter.com/dev_andre_' },
      { icon: faGitlab, link: 'https://gitlab.com/oliveira-andre' },
      { icon: faLinkedin, link: 'https://www.linkedin.com/in/andre-oliveira-5b9631135/' },
      { icon: faTelegram, link: 'https://web.telegram.org/#/im?p=@AndreOliveira' },
    ]
  )

  return (
    <Fragment>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="Home">
        <div className="container">
          <section className="section">
            <div>
              <div className="columns is-multiline">
                <div className="column is-12 has-text-centered">
                  <img src={MineImage} alt="André Oliveira" className="round-img" />
                  <p className="title">Andre Oliveira</p>
                  <p className="subtitle has-text-weight-semibold">
                    Remote full stack developer | Linux user | Ruby entusiast | Dog lover | True gamer | Tattooed man | <FontAwesomeIcon icon={faCoffee} />
                  </p>
                  {socialMedia.map((item, index) =>
                    <a href={item.link} class="button is-info is-inverted is-outlined is-rounded is-large">
                      <FontAwesomeIcon icon={item.icon} size="lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
