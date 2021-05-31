import "./SocialIframe.css";

function SocialIframe() {
  return (
    <section className="iframe-social">
      <iframe
        title="facebook-iframe"
        className="iframe-social__facebook"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBigBrothers.BigSisters.Russia&amp;tabs=timeline&amp;width=420&amp;height=627&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </section>
  );
}

export default SocialIframe;
