import ButtonCustom from "../buttons/button-custom";
import InputBorderRoundedFull from "../inputs/input-border-rounded-full";
import TextAreaBorderRoundedFull from "../textareas/ares-border-rounded-full";

export default function Contact() {
  return (
    <section id="contact">
      <div
        id="contactHeader"
        className="relative flex w-fit items-center gap-5"
      >
        <p className="text-4xl font-bold">Contact</p>
        <span className="absolute -right-48 top-6 h-1 w-40 rounded-full bg-effect-blue"></span>
      </div>
      <div id="contactContent" className="mt-7">
        <p className="text-md font-normal text-stone-300">
          Vous pouvez, si vous le souhaitez, remplir le formulaire ci-dessous
          pour rentrer en contact avec moi. Je vous répondrais dans des délais
          les plus rapides.
        </p>
      </div>
      <div id="contactForm" className="mt-10 w-full ">
        <form
          className="flex w-full flex-col gap-5"
          action="
        "
        >
          <div id="contactFormName" className="w-full 2xl:w-1/2">
            <InputBorderRoundedFull placeholder="Comment vous appelez-vous ?" />
          </div>
          <div id="contactFormEmail" className="w-full 2xl:w-1/2">
            <InputBorderRoundedFull placeholder="Comment je peux vous recontacter ?" />
          </div>
          <div id="contactFormEmail" className="w-full">
            <TextAreaBorderRoundedFull placeholder="Pourquoi me contactez-vous ?" />
          </div>
          <div>
            <ButtonCustom
              name="Envoyer un message"
              isDisabled={true}
              type="submit"
              tailwindClass="bg-[rgb(28,29,28)] px-10 py-3 rounded-full font-medium bg-white text-black duration-500 hover:scale-105"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
