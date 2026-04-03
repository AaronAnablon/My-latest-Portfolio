import Image from 'next/image';
import type { SocialMediaIconsProps } from '@/types';

const SocialMediaIcons = ({ navigateTo, srcImage, alt, width, height }: SocialMediaIconsProps) => {
  return (
    <a href={navigateTo} className='z-30' target='_blank' rel='noopener noreferrer'>
      <Image height={height} width={width} src={srcImage} alt={alt} />
    </a>
  );
};

export default SocialMediaIcons;