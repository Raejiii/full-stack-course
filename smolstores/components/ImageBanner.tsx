export default function ImageBanner(props: {image: string, alt: string}) {
    const {image, alt} = props
    return (
        <div className="image-banner">
            <img src={image} alt={alt} />
        </div>
    )
}