// home-components
import Tools from "../components/home/Tools";
import Software from "../components/home/Software";
import Shows from "../components/home/Shows";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
export default function Home() {
  return (
    <div>
      <div className="mb-7">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus
          veritatis iusto! Amet sint beatae deleniti animi tempora libero
          blanditiis accusantium officia nobis dolor adipisci culpa, id
          laboriosam sapiente assumenda eaque dolorum maiores, molestias neque!
          Earum libero voluptates minus quo recusandae, dicta repellat alias
          aliquid enim culpa eveniet quia saepe nemo perspiciatis qui! Quis
          porro molestiae vitae earum neque maiores nisi incidunt eius ab nemo
          hic delectus ipsa excepturi, alias architecto laboriosam fugiat, iure
          facilis asperiores! Cupiditate temporibus iure, labore necessitatibus
          culpa debitis expedita iusto porro vel, deleniti quasi nulla ipsa ex
          qui sunt error aspernatur harum, amet a sint.
        </p>
      </div>
      <Tools />
      <Software />
      <Shows />
      <Projects />
      <Contact />
    </div>
  );
}
