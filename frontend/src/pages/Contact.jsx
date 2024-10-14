import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-29 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div>
          <p>OUR OFFICE</p>
          <p>
            2387 Willms Station <br />
            Suite 340, Washington, USA
          </p>
          <p>
            TEL: 00970012791 <br />
            Email: appointmed@gmail.com
          </p>
          <p>Career at AppontMed</p>
          <p>Learn more about our teams and job openings</p>
          <button>Explore jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
