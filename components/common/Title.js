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

export const Citcs = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} citcs`}>
      <span>{caption}</span>
      <Image
        src="/citcs.png"
        alt={title}
        width={150}
        height={150}
        quality={100}
      />
    </h1>
  );
};

export const Innovation = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} innovation`}>
      <span>{caption}</span>
      <Image
        src="/ucinno.jpg"
        alt={title}
        width={150}
        height={150}
        quality={100}
      />
    </h1>
  );
};

export const Yesucan = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} yesucan`}>
      <span>{caption}</span>
      <Image
        src="/yesucan.png"
        alt={title}
        width={300}
        height={100}
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