import { HomepagePattern } from './styles'

interface HomepageProps {
  name: string
  path_img: string
  language: string
}

export default function Homepage(props: HomepageProps) {
  if (props.language === 'Br') {
    return (
      <HomepagePattern>
        <div className="span">
          <p>
            <strong> Eu me chamo</strong>
          </p>
          <div className="hr"></div>
          <span>
            <strong>Breno Alvim</strong>
          </span>

          <div className="hr"></div>
          <img
            src={`https://readme-typing-svg.herokuapp.com?font=Inter&size=35&duration=2600&color=cbd5e1&width=375&height=60&lines=Desenvolvedor+Web;Designer;Desenvolvedor+de+Software;Estudante;UX+Designer`}
            alt=""
          />
          <div className="hr"></div>
          <p>Olá, Mundo! Conheça um pouco da minha história!</p>
          <div className="hr"></div>
          <a href="#About">
            <button>Sobre mim </button>
          </a>
        </div>
        <div className="image">
          <img src={props.path_img} alt="" />
        </div>
      </HomepagePattern>
    )
  } else {
    return (
      <HomepagePattern>
        <div className="span">
          <p>
            <strong> I'm</strong>
          </p>
          <div className="hr"></div>
          <span>
            <strong>Breno Alvim</strong>
          </span>

          <div className="hr"></div>
          <img
            src={`https://readme-typing-svg.herokuapp.com?font=Inter&size=35&duration=2600&color=cbd5e1&width=375&height=60&lines=Web+Developer;Designer;Full-Stack+Developer;Software+Developer;Student;UX+Designer`}
            alt=""
          />
          <div className="hr"></div>
          <p>Hello, World! Know some of my history!</p>
          <div className="hr"></div>
          <a href="#About">
            <button>About Me</button>
          </a>
        </div>
        <div className="image">
          <img src={props.path_img} alt="" />
        </div>
      </HomepagePattern>
    )
  }
}
