import React, { Fragment, useState } from 'react';
import 'bulma/css/bulma.css'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expreciences] = useState([
    { title: 'Full Stack Developer', enterprise: 'SEFIN - RO', type: 'Presential', link: 'https://www.sefin.ro.gov.br/', description: 'Eu trabalhei por 3 anos na SEFIN, foi meu primeiro emprego aonde pela primeira vez tive contato com a linguagem ruby logo de cara já me apaixonei pela linguagem e me incentivaram muito a masterizar ela na minha stack trabalhei com uma equipe com cerca de 30 desenvolvedores capacitados e o melhor de tudo eles eram comunicativos, desde lá já exerço toda a idéia de compartilhamento de conhecimento, lá trabalhei com wordpress, java, PHP, javascript, AngularJS, e principalmente Ruby. Lá também muitas vezes era necessário o conhecimento DEVOPS foi aonde conheci o Docker também e comecei a estudar por lá mesmo, usavamos digital ocean, gitlab, e docker para organização total de códigos, containers e ambientes de produção.Eu trabalhei por 3 anos na SEFIN, foi meu primeiro emprego aonde pela primeira vez tive contato com a linguagem ruby logo de cara já me apaixonei pela linguagem e me incentivaram muito a masterizar ela na minha stack trabalhei com uma equipe com cerca de 30 desenvolvedores capacitados e o melhor de tudo eles eram comunicativos, desde lá já exerço toda a idéia de compartilhamento de conhecimento, lá trabalhei com wordpress, java, PHP, javascript, AngularJS, e principalmente Ruby. Lá também muitas vezes era necessário o conhecimento DEVOPS foi aonde conheci o Docker também e comecei a estudar por lá mesmo, usavamos digital ocean, gitlab, e docker para organização total de códigos, containers e ambientes de produção.' },
    { title: 'Ruby On Rails Engenieer', enterprise: 'NOBE', type: 'Remote', link: 'http://nobesistemas.com.br/', description: 'Trabalhei por quase um ano lá, foi minha primeira experiência com o mundo remoto e meu contrato foi CLT, apesar do comum ser PJ, esse em específico foi CLT, Bom foi a primeira vez que tinha visto um código de tão alto nível ao conhecer o sistema ISSIntegra, abriu muito minha mente para o imenso mundo que era o ruby, e naquele momento a ficha caiu de que nunca devemos parar de estudar, mesmo quando parece que sabemos bastante, não sabemos nada, e desde então eu sempre tento aplicar o sempre um código de um nível bom, simples e elegante, nessa mesma época vi a integração de vários bancos de dados no mesmo sistema e principalmente a implementação de um banco de dados NOSQL, que foi o mongodb por escolha da equipe. Tinhamos ambiente de testes e produção, primeira vez que trabalhei com testes com rspec e capybara, apesar de já ter usado gitlab em outros empregos, essa foi a primeira vez que conheci o code review, junto com pull requests (github) ou merge requests (gitlab) todos os serviços de produção/testes que usávamos era hospedado na amazon.' },
    { title: 'Ruby On Rails Engenieer', enterprise: 'BLZ', type: 'Remote', link: 'http://blz.life/', description: 'Depois de me aventurar no mundo do trabalho remoto percebi o quanto era bom trabalhar de casa e quando surgiu a oportunidade de fazer um freelance eu aceitei quase que de imediato, então o BLZ foi o meu primeiro freelance começado e terminado, terminar um freelance é bem dificil quando se está iniciando nesse mundo, mas com toda minha passagem com outros sistemas, e minha dedicação ao estudo do framework ruby on rails conseguimos dar sequencia ao projeto e em 6 meses conseguimos finalizar todo o projeto, o principal conhecimento que hobitive foi com certeza o trabalho com os modelos que eram muito bem estruturados e pensados, e estar junto desde o inicio, criando testes, pensando o que poderia dar errado, emulando casos de usuários, foi simplesmente incrível, pensar em vários detalhes e aplicar isso em código, de frontend para melhor usuabilidade do usuário e no backend para proteger nossa aplicação e nossa integridade do banco de dados.' },
  ]);

  return (
    <Fragment>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="Experience">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline">
              {expreciences.map((item, index) =>
                <div className="column is-12">
                  <a href={item.link} target="_blank">
                    <p className="title is-4">
                      {item.title}
                      <span className="tag is-info">
                        {item.enterprise}
                      </span>
                    </p>
                  </a>
                  <p className="subtitle">
                    {item.type}
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