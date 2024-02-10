import Image from 'next/image';

// ...

export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} title-logo`}>
      <span>{caption}</span>
      <Image
        src="/UC_Official_Logo.png"
        alt={title}
        width={300}
        height={100}
        quality={100}
      />
    </h1>
  );
};

export const Logo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} logo`}>
      <span>{caption}</span>
      <Image
        src="/uclogonew.png"
        alt={title}
        width={120}
        height={150}
        quality={100}
      />
    </h1>
  );
};

export const TitleSm = ({ title }) => {
  return <h1 className={`title-sm`}>{title}</h1>;
};

export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>;
};