import React, { Fragment, useState } from 'react';
import 'bulma/css/bulma.css'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courses] = useState([
    { title: 'Bootcamp Super Full Stack', enterprise: 'OneBitCode', link: 'https://super.onebitcode.com/bootcamp', description: 'Com certeza foi desse curso que tirei grande parte da minha base com ruby on rails, com ruby e outras linguagens como VUEJS, AngularJS e React, após terminar o curso que durou mais ou menos 1 ano, eu percebi que estava pronto para desbravar qualquer lingugem, nesse momento eu estava pronto para enfrentar qualquer desafio principalmente com ruby, eu me senti confiante e produtivo, com certeza não só as aulas, como as lives, estar junto com a comunidade no discord, tudo foi primordial para o enriquecimento de conhecimento do curso.' },
    { title: 'Full Stack JavaScript Developer in 8 weeks', enterprise: 'Escola de Javascript', link: 'https://programador.escoladejavascript.com/', description: 'WIP' },
    { title: 'Data Scientist', enterprise: 'Udacity', link: 'https://www.udacity.com/course/data-scientist-nanodegree--nd025', description: 'Quando comecei a fazer o curso estava sem confiança com a linguagem python, já tinha visto a linguagem mas não sabia se estava no nível da galera, quando vi a formação deles eram de PHD, com trabalhos pelo Facebook ou Apple, mas a didatica deles eram incriveis, foi extremamente prazeroso aprender com eles com certeza aproveitei muito, meus conhecimentos de programação e matemática melhoraram muito, principalmente com python alimentei meu github com mais uma linguagem até tem um repositório forkado deles para resolver os problemas e finalizar o curso, alimentando assim o meu github com a linguagem python.' },
  ]);

  return (
    <Fragment>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="Course">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline">
              {courses.map((item, index) =>
                <div className="column is-12">
                  <a href={item.link} target="_blank">
                    <p className="title is-4">
                      {item.title}
                    </p>
                  </a>
                  <p className="subtitle">
                    {item.enterprise}
                  </p>
                  <p>
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </Fragment>

  )
}

export default Experience;