import styles from './ListingImage.module.css';

interface ListingImageProps {
    source: string,
    alt: string
}

const ListingImage: React.FC<ListingImageProps> = ({source, alt}: ListingImageProps) => {
    return (
        <img data-testid="listingImage" className={styles.listImage} src={source} alt={alt} />
    )
}

export default ListingImage;