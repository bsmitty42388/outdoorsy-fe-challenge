import styles from "./ListingDetail.module.css"

interface ListingDetailProps {
    title: string
}

const ListingDetail: React.FC<ListingDetailProps> = ({title}: ListingDetailProps) => {
    return (
        <p data-testid="listingDetail" className={styles.listingDetail}>
            {title}
        </p>
    )
}

export default ListingDetail;