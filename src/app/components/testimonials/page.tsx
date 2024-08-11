interface Person {
  nama: string;
  text: string;
  img: string;
}

export default function Testimonials() {
  const people: Person[] = [
    {
      nama: "John Doe",
      text: "GameCourse has completely transformed my approach to gaming. The coaches are incredibly knowledgeable and provided personalized feedback that helped me improve my skills significantly.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      nama: "Jane Smith",
      text: "Joining GameCourse was the best decision I made for my gaming career. The structured courses and professional guidance from experienced esports coaches have been invaluable.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      nama: "Michael Johnson",
      text: "The training I received from GameCourse exceeded my expectations. The coaches are top-notch and really know how to bring out the best in their students.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-12 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div>
        <h1 className="text-center text-5xl mb-28">Real Review from gamers</h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {people.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center max-w-xs"
            >
              <img
                src={person.img}
                alt={person.nama}
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-52 lg:h-52 rounded-full"
              />
              <h2 className="text-lg sm:text-xl lg:text-2xl">{person.nama}</h2>
              <p className="text-sm sm:text-base lg:text-base">{person.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
