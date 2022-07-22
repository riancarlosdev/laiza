import Link from 'next/link';
import { ValueInfoRoute, WapperInfoRoute } from './styles';

interface BackRouterProps {
  value: Array<{
    value: string;
    back_to: string;
    id: string;
  }>;
}

export const BackRouterComponent: React.FC<BackRouterProps> = ({
  value,
}): JSX.Element => {
  return (
    <WapperInfoRoute>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <ValueInfoRoute>
        {value.map((item, index) => {
          if (index === value.length - 1) {
            return <a>{item.value}</a>;
          }
          return (
            <>
              {' '}
              <Link key={item.id} href={`/categoria/${item.back_to}`}>
                <a>{item.value}</a>
              </Link>
              {'>'}
            </>
          );
        })}
      </ValueInfoRoute>
    </WapperInfoRoute>
  );
};
