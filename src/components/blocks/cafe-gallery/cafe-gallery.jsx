import { GallerySection } from './styles';
import Title, { TitleSize } from '../../ui/title/title';
import "swiper/css";
import Gallery from '../../ui/gallery/gallery';

export default function CafeGallery ({ slides }) {
    return slides?.length ? (
        <GallerySection>
            <Title size={TitleSize.BIG} level={2}>Галерея нашего кафе</Title>
            <Gallery slides={slides} />
        </GallerySection>
    ) : null;
}