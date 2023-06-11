const PageLink = ({ link, itemClass }) => {
  const { id, href, text } = link;
  return (
    <li
      className={itemClass}
      key={id}
    >
      <a href={href}>{text}</a>
    </li>
  );
};

export default PageLink;
