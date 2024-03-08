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
        src="/ucinno-removebg-preview.png"
        alt={title}
        width={150}
        height={150}
        quality={100}
      />
    </h1>
  );
};

export const Bghmc = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} bghmc`}>
      <span>{caption}</span>
      <Image
        src="/bghmc.png"
        alt={title}
        width={50}
        height={50}
        quality={100}
      />
    </h1>
  );
};

export const Slu = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} slu`}>
      <span>{caption}</span>
      <Image
        src="/slusacred.png"
        alt={title}
        width={50}
        height={50}
        quality={100}
      />
    </h1>
  );
};

export const Notre = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} notre`}>
      <span>{caption}</span>
      <Image
        src="/notre.png"
        alt={title}
        width={50}
        height={50}
        quality={100}
      />
    </h1>
  );
};

export const Pines = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} pines`}>
      <span>{caption}</span>
      <Image
        src="/pines.jpg"
        alt={title}
        width={50}
        height={50}
        quality={100}
      />
    </h1>
  );
};

export const GoogleMaps = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} googlemaps`}>
      <span>{caption}</span>
      <Image
        src="/google-maps.png"
        alt={title}
        width={30}
        height={30}
        quality={100}
      />
    </h1>
  );
};

export const Facebook = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} facebook`}>
      <span>{caption}</span>
      <Image
        src="/facebook.png"
        alt={title}
        width={20}
        height={20}
        quality={100}
      />
    </h1>
  );
};

export const GastroBaguio = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} gastrobaguio`}>
      <span>{caption}</span>
      <Image
        src="/uclogonew.png"
        alt={title}
        width={25}
        height={25}
        quality={100}
      />
    </h1>
  );
};

export const GastroBaguio1 = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} gastrobaguio1`}>
      <span>{caption}</span>
      <Image
        src="/uclogonew.png"
        alt={title}
        width={65}
        height={70}
        quality={100}
      />
    </h1>
  );
};

export const Hospital = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} hospital`}>
      <span>{caption}</span>
      <Image
        src="/hospital.png"
        alt={title}
        width={20}
        height={20}
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

export const TitleSm = ({ title, className, fontFamily }) => {
  return <h1 className={`title-sm ${className}`} style={{ fontFamily: fontFamily }}>{title}</h1>;
};

export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>;
};