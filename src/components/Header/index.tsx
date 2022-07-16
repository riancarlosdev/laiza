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
                  <ItemCategory>
                    <Link key={item.id} href={`/category/${item.value}`}>
                      <a>{item.value}</a>
                    </Link>
                  </ItemCategory>
                ))}
              </ListCategory>
            </WapperCategory>

            <WapperUser>
              <a href="/account/register">Crie sua conta</a>
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
