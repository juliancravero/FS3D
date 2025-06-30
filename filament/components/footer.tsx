import Link from "next/link";

const dataFootrer = [
  {
    id: 1,
    name: "Nosotros",
    link: "#",
  },
  {
    id: 2,
    name: "Productos",
    link: "#",
  },  
  {
    id: 3,
    name: "Mi cuenta",
    link: "#",
  },
  {
    id: 4,
    name: "Privacidad",
    link: "#",
  },
]
const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-ull max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <p>
                <span className="font-bold">
                    GST3D
                </span>
                Web
            </p>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400 ">
                {dataFootrer.map((data) => (
                    <li key={data.id}>
                        <Link href={data.link} className="hover:underline me-4 md:me-6">{data.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;