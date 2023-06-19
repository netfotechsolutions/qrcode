export const Footer = (content) => {
  return (
    <p>
      {content.content.footer_text}{" "}
      <a href={`mailto:${content.content.footer_link_path}`}>
        {" "}
        {content.content.footer_link_text}
      </a>{" "}
      {content.content?.footer_link_text_e}
    </p>
  );
};
