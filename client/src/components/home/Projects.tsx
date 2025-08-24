// icons
import { SiSky } from "react-icons/si";
export default function Projects() {
  return (
    <div className="mt-24">
      <div className="con-width">
        <h3 className="text-center text-3xl uppercase">Projects</h3>
        <p className="mt-10 max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum
          necessitatibus sint perspiciatis tempore, saepe aspernatur autem
          corrupti nemo nam repudiandae nisi debitis non.
        </p>
        <div className="flex items-center justify-center gap-16 mt-10">
          {[1, 2, 3].map((item, index) => {
            return (
              <div className="max-w-52">
                <div>Projects List</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
