import Image from "next/image";

interface FullscreenHeadingProps {
  text: string;
  backgroundImage: string;
  containerStyle?: React.CSSProperties;
}

export default function FullscreenHeading(p: FullscreenHeadingProps) {
  return (
    <div style={{
      position: 'fixed',
      width: '100%',
      height: '100%',
      bottom: 0,
      background: '#3a9ebc',
      textAlign: 'center',
      ...p.containerStyle
    }}>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]" /*dark:invert*/
        src={p.backgroundImage}
        alt="iii-earth.id"
        sizes="100%"
        layout="fill"
        objectFit="contain"
        priority
      />
      <div style={{ position: 'relative', top: '50%', transform: `translateY(-50%)` }}>
        <h1>{p.text}</h1>
      </div>
    </div>
  )
}