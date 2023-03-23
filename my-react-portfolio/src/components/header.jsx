export default function Header() {
    return (
      <div className="container mx-auto text-center">
      <section className="box-content h-35 p-4 border-2 border-t-0 rounded-b-lg border-orange">
        <div className="grid grid-cols-4 divide-x">
        <button className="uppercase text-orange hover:text-gold">About Me</button>
        <button className="uppercase text-orange hover:text-gold">My Portfolio</button>
        <button className="uppercase text-orange hover:text-gold">My Skills</button>
        <button className="uppercase text-orange hover:text-gold">Contact Me</button>
        </div>
      </section>
    </div>
    );
} 