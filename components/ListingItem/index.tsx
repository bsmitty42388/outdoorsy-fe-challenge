import { ReactNode } from "react"
import styles from './ListingItem.module.css'

interface ListingItemProps {
    children?: ReactNode
}

const ListingItem: React.FC<ListingItemProps> = ({children, ...props}: ListingItemProps) => {
    return (
        <div data-testid="listingItem" className={styles.ListingItem} {...props}>
            {children}
        </div>
    )
}

export default ListingItem;