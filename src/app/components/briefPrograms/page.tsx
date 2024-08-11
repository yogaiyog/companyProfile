

export default function BriefPrograms() {
    const programs = [
      {
        title: "MOBA (Multiplayer Online Battle Arena)",
        desc: "The MOBA coaching program is designed for players looking to master the complexities of popular titles like League of Legends, Dota 2, and other MOBA games.",
        imgSrc: "/images/moba.jpg" // Replace with your image path
      },
      {
        title: "FPS (First-Person Shooter)",
        desc: "The FPS coaching program focuses on sharpening your skills in games like Call of Duty, Counter-Strike, Valorant, and other leading first-person shooters.",
        imgSrc: "/images/FPS.png" // Replace with your image path
      },
      {
        title: "Action Fighting",
        desc: "The Action Fighting coaching program is tailored for players of games like Street Fighter, Tekken, Mortal Kombat, and other fighting games.",
        imgSrc: "/images/action-fighting.jpg" // Replace with your image path
      },
      {
        title: "Strategy",
        desc: "The Strategy coaching program is ideal for players of titles like StarCraft, Civilization, and other strategy games. This program focuses on critical thinking, resource management, and tactical decision-making.",
        imgSrc: "/images/strategy.jpg" // Replace with your image path
      }
    ];
  
    return (
      <div className="bg-violet-600 min-h-screen py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-slate-200">Our selection of</h1>
          <h1 className="text-4xl font-bold text-white">Coaching Programs</h1>
        </div>
          
        <div className="flex flex-wrap justify-center gap-8 px-8">
          {programs.map((program, index) => (
            <div key={index} className="card bg-white rounded-lg shadow-lg p-6 max-w-xs flex flex-col justify-between">
              <img
                src={program.imgSrc}
                alt={program.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-4 text-indigo-600">{program.title}</h2>
              <p className="text-gray-700 mb-6">
                {program.desc}
              </p>
              <button className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
        
      </div>
    );
  }
  