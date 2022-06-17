import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { LogoComponent } from '@components/Logo';
import Link from 'next/link';
import { RiSearchLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { BsCart2 } from 'react-icons/bs';
import { category } from './data/category';
import {
  Container,
  InputSearch,
  ItemCategory,
  ListCategory,
  Wapper,
  Wapper2,
  Wapper3,
  WapperAnnouncement,
  WapperCategory,
  WapperIconSearch,
  WapperSearch,
  WapperUser,
} from './styles';

export const HeaderComponent: React.FC = (): JSX.Element => {
  const { colors } = useTheme();

  return (
    <Container>
      <MaxContainerComponent>
        <>
          <Wapper>
            <Wapper2>
              <LogoComponent />

              <WapperSearch>
                <InputSearch placeholder="Buscar produtos e muito mais..." />
                <WapperIconSearch>
                  <RiSearchLine color={colors.font_hiper_light} size={17} />
                </WapperIconSearch>
              </WapperSearch>
            </Wapper2>
            <WapperAnnouncement>
              <span>Propaganda ou</span>
              <br />
              <p>anúncios de parceiros</p>
            </WapperAnnouncement>
          </Wapper>
          <Wapper3>
            <WapperCategory>
              <ListCategory>
                {category.map(item => (
                  <Link href={`/category/${item.value}`}>
                    <a>
                      <ItemCategory key={item.id}>{item.value}</ItemCategory>
                    </a>
                  </Link>
                ))}
              </ListCategory>
            </WapperCategory>

            <WapperUser>
              <Link href="/register/user">
                <a>Crie sua conta</a>
              </Link>
              <Link href="/login/user">
                <a>Entre</a>
              </Link>
              <Link href="/bag">
                <a>
                  <BsCart2 size={23} />
                </a>
              </Link>
            </WapperUser>
          </Wapper3>
        </>
      </MaxContainerComponent>
    </Container>
  );
};
