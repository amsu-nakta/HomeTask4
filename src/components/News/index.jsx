import { useParallax } from 'react-scroll-parallax';

export default function News() {
  const { ref } = useParallax({
    opacity: [0, 1],
    rootMargin: { top: 0, bottom: -700 },
  });
  const { ref: secondRef } = useParallax({
    opacity: [1, 0],
    rootMargin: { top: -700, bottom: -50 },
  });

  return (
    <div className="news">
      <a name='blog'/>
      <div className="news_subtitle">LETEST NEWS</div>
      <div className="news_title">From Our Blog</div>
      <div className="news_blog" ref={ref}>
        <div className="news_blog_block" ref={secondRef}>
          <img src="../img/news1.png" alt="" />
          <div className="news_blog_block_title">2020 Interior Design Trends</div>
          <div className="news_blog_block_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            incididunt ut labore et dolore magna aliqua.
          </div>
          <a className="news_blog_block_button" href="https://uk.wikipedia.org">
            CONTINUE READING....
          </a>
        </div>
        <div className="news_blog_block" ref={secondRef}>
          <img src="../img/news2.png" alt="" />
          <div className="news_blog_block_title">28 Notable Product at ARC Interior Design</div>
          <div className="news_blog_block_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            incididunt ut labore et dolore magna aliqua.
          </div>
          <a className="news_blog_block_button" href="https://uk.wikipedia.org">
            CONTINUE READING....
          </a>
        </div>
      </div>
    </div>
  );
}
