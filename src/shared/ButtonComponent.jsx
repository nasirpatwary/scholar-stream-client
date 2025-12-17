import { Link } from "react-router";
export const ButtonComponent = ({ children, to, className = "" }) => {
  return (
    <Link
      to={to}
      className={`${className} btn duration-500 hover:bg-primary hover:text-gray-700 font-semibold`}
    >
      {children}
    </Link>
  );
};

export const CustomLink = ({routPath, to, path}) =>{
  return (
    <p className="text-secondary px-6 pb-4">{routPath} <Link className="text-primary" to={to}>{path}</Link></p>
  )
}
