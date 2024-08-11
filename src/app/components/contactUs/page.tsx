import Image from "next/image";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
      <h2 className="text-2xl font-bold mb-6 text-indigo-600">
        Contact Information
      </h2>
      <p className="mb-4">
        <strong>Email:</strong> info@example.com
      </p>
      <p className="mb-4">
        <strong>Phone:</strong> +1 234 567 890
      </p>
      <p className="mb-5">
        <strong>Address:</strong> 1234 Gaming Lane, Esports City, GameLand
      </p>
      <Image
        src="/images/map.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default ContactUs;
