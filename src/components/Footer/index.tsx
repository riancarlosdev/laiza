import { MaxContainerComponent } from '@components/Global/MaxContainer';
import Link from 'next/link';
import { cnpj, endereco } from './data/company';
import { links } from './data/links';
import {
  Cnpj,
  Container,
  Copy,
  End,
  ItemLInk,
  ListLinksCompany,
  WapperCnpjEnd,
  WapperInfoCompany,
} from './styles';

export const FooterComponent: React.FC = (): JSX.Element => {
  return (
    <Container>
      <MaxContainerComponent>
        <>
          <ListLinksCompany>
            {links.map(item => (
              <Link key={item.id} href={item.link}>
                <a>
                  <ItemLInk>{item.value}</ItemLInk>
                </a>
              </Link>
            ))}
          </ListLinksCompany>
          <WapperInfoCompany>
            <Copy>Copyright © Desenvolvido por Rian</Copy>
            <WapperCnpjEnd>
              <Cnpj>CNPJ n.º {cnpj}</Cnpj>
              <End>{endereco}</End>
            </WapperCnpjEnd>
          </WapperInfoCompany>
        </>
      </MaxContainerComponent>
    </Container>
  );
};
