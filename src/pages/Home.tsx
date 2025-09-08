export const Home = () => {
  return (
    <div className="h-full flex flex-row">
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <h1 className="text-6xl">Hi, i'm a Full Stack Developer</h1>
        <p className="text-sm text-center">
          I have tree years of experience in web development, focusing primarily
          in Node.js environments and React.js. I'm also proficient in Java and
          Python. My main frontend frameworks are React.js, Next.js, and Vue.js
          and my backend is composed of Express.js, FastAPI, and Spring Boot.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src="/images/me.jpeg"
          alt="Photo by Élcio"
          className="rounded-4xl shadow-lg"
        />
      </div>
    </div>
  );
};
