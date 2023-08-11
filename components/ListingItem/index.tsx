import { ReactNode } from "react"
import styles from './ListingItem.module.css'
import ListingImage from "./ListingImage"
import { Rental } from "@/types/SearchListing.interfaces"
import ListingDetail from "./ListingDetail"

interface ListingItemProps {
    data: Rental
}

const ListingItem: React.FC<ListingItemProps> = ({data}: ListingItemProps) => {
    return (
        <div data-testid="listingItem" className={styles.ListingItem}>
            <ListingImage source={data.imageUrl} alt="fill" />
            <ListingDetail title={data.title} />
        </div>
    )
}

export default ListingItem;