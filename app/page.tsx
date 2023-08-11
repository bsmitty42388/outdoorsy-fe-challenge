import styles from './page.module.css'
import ListingImage from '../components/ListingItem/ListingImage';
import ListingItem from '@/components/ListingItem';
import ListingDetail from '@/components/ListingItem/ListingDetail';
import SearchListing from '@/views/SearchListing';

const testData = [
  {"id": 1, "src": "https://res.cloudinary.com/outdoorsy/image/upload/v1686197514/p/rentals/365844/images/hhfhiwqiw0lpyl6rvo97.jpg", "alt": "Test img 1", "title": "Test Image 1"},
  {"id": 2, "src": "https://res.cloudinary.com/outdoorsy/image/upload/v1651495911/p/rentals/297190/images/c3buqscy1qflhpeoxxtm.jpg", "alt": "Test img 2", "title": "Test Image 2"},
  {"id": 3, "src": "https://res.cloudinary.com/outdoorsy/image/upload/v1686197514/p/rentals/365844/images/hhfhiwqiw0lpyl6rvo97.jpg", "alt": "Test img 3", "title": "Test Image 3"},
  {"id": 4, "src": "https://res.cloudinary.com/outdoorsy/image/upload/v1651495911/p/rentals/297190/images/c3buqscy1qflhpeoxxtm.jpg", "alt": "Test img 4", "title": "Test Image 4"}
]

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <SearchListing />
      </div>
    </main>
  )
}
