import React, { useMemo } from 'react';
import { createSearchParams, Link } from 'react-router-dom';
import { OutlinedButton } from '../../atoms/button';

type LinkButtonProps = {
  text: string,
  link: string,
  params: Record<string, string>,
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { text, link, params } = props;

  const fullLink = useMemo(() => {
    const searchParams = createSearchParams(Object.entries(params)).toString();

    if (!searchParams) {
      return link;
    }

    return `${link}?${searchParams}`;
  }, [link, params]);

  return (
    <Link to={fullLink}>
      <OutlinedButton>{text}</OutlinedButton>
    </Link>
  )
}

export default LinkButton;
