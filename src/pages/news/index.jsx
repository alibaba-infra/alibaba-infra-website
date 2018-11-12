import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../../components/language';
import Header from '../../components/header';
import Bar from '../../components/bar';
import NewsItem from '../../components/newsItem';
import Footer from '../../components/footer';
import mdJson from '../../../md_json/blog.json';

import './index.scss';

// 新闻列表数据，按时间排序
const news = {};
news['en-us'] = mdJson['en-us'].filter(md => (
  md.link.split('/')[3] === 'news' && (!md.meta.hidden || md.meta.hidden === 'false')
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
news['zh-cn'] = mdJson['zh-cn'].filter(md => (
  md.link.split('/')[3] === 'news' && (!md.meta.hidden || md.meta.hidden === 'false')
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

class News extends Language {
  render() {
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
      <div className="news-page">
        <Header
          currentKey="news"
          type="normal"
          slogan="Unleash the Power of Cloud Infrastructure"
          logo="https://img.alicdn.com/tfs/TB1F579nxjaK1RjSZFAXXbdLFXa-366-46.png"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Bar text="News Report" />
        <section className="news-section">
          {
            dataSource.map((d, i) => <NewsItem key={i} dataSource={d} />)
          }
        </section>
        <Footer language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<News />, document.getElementById('root'));

export default News;
