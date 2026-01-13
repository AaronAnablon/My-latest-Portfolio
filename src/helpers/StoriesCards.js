import Image from "next/image";


const StoriesCards = ({ navigateTo, srcImage, width, height, alt, text }) => {
    return (
        <a href={navigateTo} target="blank" rel="noopener noreferrer"
            className="z-30 w-full grid md:flex bg-slate-700 gap-4 rounded-xl p-10">
            <div className="flex-shrink-0 w-full md:w-auto">
                <Image 
                    src={srcImage} 
                    width={width} 
                    height={height} 
                    alt={alt} 
                    className="w-full h-auto object-contain rounded-lg"
                />
            </div>
            <div>
                <p>{text}</p>
            </div>
        </a>
    );
}

export default StoriesCards;