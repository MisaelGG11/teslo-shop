import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subTitle?: string;
  className?: string;
}

export const Title = ({ title, subTitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${titleFont.className} font-semibold text-3xl ${className}`}
      >
        {title}
      </h1>
      {subTitle && <h3 className="font-light text-lg">{subTitle}</h3>}
    </div>
  );
};
