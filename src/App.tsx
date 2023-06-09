import "./index.css";

const App = () => {
  return (
    <div className="space-y-12 px-5 py-20">
      <div className="grid gap-2 sm:grid-cols-3">
        <Category
          name="Hiking"
          image="/hiking.webp"
          intro="Wind down. Enjoy nature."
        />
        <Category
          name="Trial Running"
          image="/trail-running.webp"
          intro="In the case walking is too slow for you."
        />
        <Category
          name="Climbing"
          image="/climbing.webp"
          intro="Bring yourself to new heights."
        />
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <Category
          name="Snow sports"
          image="/snow-sports.webp"
          intro="Don't let the cold stop you."
        />
        <Category
          name="Mountainbiking"
          image="/mountainbiking.webp"
          intro="They see me rollin'..."
        />
      </div>
      <Category
        name="Most wanted"
        image="/most-wanted.webp"
        intro="Your favorite picks to explore your favorite places. Check out this month’s best-sellers. "
      />
    </div>
  );
};

type CategoryProps = {
  name: string;
  image: string;
  intro: string;
};

const Category = ({ name, image, intro }: CategoryProps) => {
  return (
    <div className="relative flex aspect-square overflow-clip
    rounded-md bg-black text-white @container/category">
      <img
        src={image}
        alt=""
        className="absolute h-full w-full object-cover @[700px]:w-[70%]"
      />
      <div className="relative z-10 flex w-full flex-col items-center
      justify-center p-5 @container @[350px]:items-start
      @[350px]:justify-end @[700px]:left-[70%] @[700px]:w-[30%]
      @[700px]:justify-start">
        <p className="text-2xl @[350px]:text-4xl">{name}</p>
        <p className="mt-2 hidden @[350px]/category:block @[700px]/category:mt-5">
          {intro}
        </p>
      </div>
    </div>
  );
};

export default App;
