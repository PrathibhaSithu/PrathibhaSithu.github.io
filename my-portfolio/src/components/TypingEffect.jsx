import Typed from "react-typed/dist/ReactTyped";

export default function TypingEffect() {
  return (
    <h2 className="mt-2 text-2xl text-[#720c61] font-semibold">
      <Typed
        strings={[
          "UI/UX Designer",
          "Web Developer",
          "Frontend Developer",
          "Android Developer",
          "Project Manager",
        ]}
        typeSpeed={80} 
        backSpeed={50} 
        loop           
      />
    </h2>
  );
}
