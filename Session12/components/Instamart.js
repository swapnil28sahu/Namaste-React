import { useState } from "react";

const Section = ({ title, description, isVisible, setisVisible }) => {
  //const [isVisible, setisVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-2xl  font-semibold">{title}</h3>
      {isVisible ? (
        <div>
          <button
            onClick={() => setisVisible(false)}
            className="cursor-pointer underline"
          >
            Hide
          </button>
          <p>{description}</p>
        </div>
      ) : (
        <button
          onClick={() => setisVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisiblesection, setisVisiblesection] = useState(" ");
  const temp = true;
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={isVisiblesection == "about"}
        setisVisible={(temp) => {
          temp ? setisVisiblesection("about") : setisVisiblesection("");
        }}
      />
      <Section
        title={"Details of Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={isVisiblesection == "team"}
        setisVisible={(temp) => {
          temp ? setisVisiblesection("team") : setisVisiblesection("");
        }}
      />
      <Section
        title={"Careers Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={isVisiblesection == "Careers"}
        setisVisible={(temp) => {
          temp ? setisVisiblesection("Careers") : setisVisiblesection("");
        }}
      />
      {/* <DetailsofInstamart />
      <CareerPage /> */}
    </div>
  );
};
export default Instamart;
