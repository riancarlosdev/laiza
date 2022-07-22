import Link from 'next/link';
import { useRouter } from 'next/router';
import { Value, WapperContainer, Image } from './styles';

interface ItemCategoryProps {
  items: Array<{
    name: string;
    id: string;
    image: string;
    link: string;
  }>;
}

export const ItemCategory: React.FC<ItemCategoryProps> = ({
  items,
}): JSX.Element => {
  const { query } = useRouter();

  return (
    <>
      {items.map(item => (
        <WapperContainer key={item.id}>
          <Link href={`${query.categoria}/${item.link}`}>
            <a>
              <Image image={item.image}>
                <Value>{item.name}</Value>
              </Image>
            </a>
          </Link>
        </WapperContainer>
      ))}
    </>
  );
};
