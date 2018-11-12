import React from 'react';
import ReactDOM from 'react-dom';
import { getScrollTop, getLink } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import CountDown from '../../components/countDown';
import Language from '../../components/language';
import Slider from '../../components/slider';
import TechItem from '../../components/techItem';
import NewsItem from '../../components/newsItem';
import ListHeader from '../../components/listHeader';
import TechRec from './techRec';
import activityJson from '../../../md_json/docs.json';
import newsAndTechJson from '../../../md_json/blog.json';

import './index.scss';

// 活动轮播数据
const activitys = {};
activitys['en-us'] = activityJson['en-us'].filter(a => (
  !a.meta.hidden || a.meta.hidden === 'false'
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
activitys['zh-cn'] = activityJson['zh-cn'].filter(a => (
  !a.meta.hidden || a.meta.hidden === 'false'
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

// 新闻列表数据，按时间排序，最多取6个
const news = {};
news['en-us'] = newsAndTechJson['en-us'].filter(md => (
  md.link.split('/')[3] === 'news' && (!md.meta.hidden || md.meta.hidden === 'false')
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date)).slice(0, 6);
news['zh-cn'] = newsAndTechJson['zh-cn'].filter(md => (
  md.link.split('/')[3] === 'news' && (!md.meta.hidden || md.meta.hidden === 'false')
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date)).slice(0, 6);

// 技术专栏列表数据，按时间排序
const tech = {};
tech['en-us'] = newsAndTechJson['en-us'].filter(md => (
  md.link.split('/')[3] === 'tech' && (!md.meta.hidden || md.meta.hidden === 'false')
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
tech['zh-cn'] = newsAndTechJson['zh-cn'].filter(md => (
  md.link.split('/')[3] === 'tech' && (!md.meta.hidden || md.meta.hidden === 'false')
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

let map = {};
const topics = {
  'en-us': [],
  'zh-cn': [],
};
// 获取所有专题标题
tech['en-us'].forEach((t) => {
  if (!map[t.meta.topic]) {
    map[t.meta.topic] = true;
    topics['en-us'].push(t.meta.topic);
  }
});
map = {};
tech['zh-cn'].forEach((t) => {
  if (!map[t.meta.topic]) {
    map[t.meta.topic] = true;
    topics['zh-cn'].push(t.meta.topic);
  }
});
// 将所有文章进行分类
const techList = {
  'en-us': [],
  'zh-cn': [],
};
topics['en-us'].forEach((topic) => {
  const recommend = tech['en-us'].find(te => te.meta.recommend === 'true') || tech['en-us'][0];
  const recIndex = tech['en-us'].findIndex(te => te.link === recommend.link);
  const temp = [...tech['en-us']];
  temp.splice(recIndex, 1);
  const obj = {
    topic,
    recommend,
    techWithoutRec: temp.slice(0, 3),
  };
  techList['en-us'].push(obj);
});
topics['zh-cn'].forEach((topic) => {
  const recommend = tech['zh-cn'].find(te => te.meta.recommend === 'true') || tech['en-us'][0];
  const recIndex = tech['zh-cn'].findIndex(te => te.link === recommend.link);
  const temp = [...tech['zh-cn']];
  temp.splice(recIndex, 1);
  const obj = {
    topic,
    recommend,
    techWithoutRec: temp.slice(0, 3), // 最多取3个
  };
  techList['zh-cn'].push(obj);
});
// 主题按推荐文章的时间排序
techList['en-us'].sort((a, b) => new Date(b.recommend.meta.date) - new Date(a.recommend.meta.date));
techList['zh-cn'].sort((a, b) => new Date(b.recommend.meta.date) - new Date(a.recommend.meta.date));

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    });
  }

  renderActivity() {
    const language = this.getLanguage();
    const dataSource = activitys[language].map(a => (
      {
        img: a.meta.bannerImg,
        title: a.meta.title,
        address: a.meta.address,
        expires: a.meta.date,
        link: a.link,
      }
    ));
    return (
      <Slider>
        {
          dataSource.map((d, i) => (
            <div key={i} className="activity-container" style={{ backgroundImage: `url(${getLink(d.img)})` }}>
              <div className="vertical-middle">
                <div className="activity-title">
                  {d.title}
                </div>
                <span className="activity-address">{d.address}</span>
                <CountDown expires={d.expires} />
                <Button type="normal" link={d.link}>{language === 'en-us' ? 'Particate In' : '立即参加'}</Button>
              </div>
            </div>
          ))
        }
      </Slider>
    );
  }

  renderTech() {
    const language = this.getLanguage();
    const techWithTopic = techList[language];
    return (
      <div>
        <ListHeader text="Technical Column" language={language} moreLink={`/${language}/blog/index.html`} />
        {
          techWithTopic.map((t, i) => (
            <div key={i} className="tech-with-rec-item">
              <TechRec
                language={language}
                dataSource={{
                  topic: t.topic,
                  img: t.recommend.meta.listImg,
                  title: t.recommend.meta.title,
                  author: t.recommend.meta.author,
                  date: t.recommend.meta.date,
                  link: t.recommend.link,
                  tags: t.recommend.meta.tags.split(/[,，、]/),
                }}
              />
              {
                t.techWithoutRec && t.techWithoutRec.length ?
                <div className="tech-widthout-rec">
                  {
                    t.techWithoutRec.map((te, j) => (
                      <TechItem
                        key={j}
                        dataSource={{
                          img: te.meta.listImg,
                          title: te.meta.title,
                          author: te.meta.author,
                          date: te.meta.date,
                          link: te.link,
                          tags: te.meta.tags.split(/[,，、]/),
                        }}
                      />
                    ))
                  }
                </div> : null
              }
            </div>
          ))
        }
      </div>
    );
  }

  renderNews() {
    const language = this.getLanguage();
    const dataSource = news[language]
    .map(d => (
      {
        img: d.meta.listImg,
        title: d.meta.title,
        author: d.meta.author,
        date: d.meta.date,
        link: d.link,
        tags: d.meta.tags && d.meta.tags.split(/[,，、]/),
      }
    ));
    return (
      <div>
        <ListHeader text="News Reports" language={language} moreLink={`/${language}/news/index.html`} />
        <div className="news-container">
          {
            dataSource.map((d, i) => <NewsItem key={i} dataSource={d} />)
          }
        </div>
      </div>
    );
  }

  render() {
    const language = this.getLanguage();
    const { headerType } = this.state;
    const headerLogo = headerType === 'primary' ? 'https://img.alicdn.com/tfs/TB1c5oSnpYqK1RjSZLeXXbXppXa-366-46.png' : 'https://img.alicdn.com/tfs/TB1F579nxjaK1RjSZFAXXbdLFXa-366-46.png';
    return (
      <div className="home-page">
        <section className="top-section">
          <Header
            currentKey="home"
            slogan="Unleash the Power of Cloud Infrastructure"
            type={headerType}
            logo={headerLogo}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          {
            this.renderActivity()
          }
        </section>
        <section className="tech-section">
          {
            this.renderTech()
          }
        </section>
        <section className="news-section">
          {
            this.renderNews()
          }
        </section>
        <Footer logo="/img/dubbo_gray.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
