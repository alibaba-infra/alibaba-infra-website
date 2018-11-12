import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../../components/language';
import Header from '../../components/header';
import Bar from '../../components/bar';
import PageSlider from '../../components/pageSlider';
import BlogItem from './blogItem';
import Footer from '../../components/footer';
import { getLink } from '../../../utils';
import mdJson from '../../../md_json/blog.json';

import './index.scss';

// 技术专栏列表数据，按时间排序
const tech = {};
tech['en-us'] = mdJson['en-us'].filter(md => (
  md.link.split('/')[3] === 'tech' && (!md.meta.hidden || md.meta.hidden === 'false')
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
tech['zh-cn'] = mdJson['zh-cn'].filter(md => (
  md.link.split('/')[3] === 'tech' && (!md.meta.hidden || md.meta.hidden === 'false')
)).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

class Blog extends Language {

  render() {
    const language = this.getLanguage();
    const dataSource = tech[language];
    return (
      <div className="blog-list-page">
        <Header
          type="normal"
          currentKey="tech"
          slogan="Unleash the Power of Cloud Infrastructure"
          logo="https://img.alicdn.com/tfs/TB1F579nxjaK1RjSZFAXXbdLFXa-366-46.png"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Bar text="Technical Column" />
        <section className="blog-container">
          <div className="col col-18 left-part">
            <PageSlider pageSize={5}>
            {
              dataSource.map((d, i) => (
                <BlogItem key={i} dataSource={d} />
              ))
            }
            </PageSlider>
          </div>
          <div className="col col-6 right-part">
            <h4>{language === 'en-us' ? 'All posts' : '所有文章'}</h4>
            <ul>
            {
              dataSource.map((d, i) => (
                <li key={i}><a href={getLink(d.link)}><span>{d.meta.date}&nbsp;&nbsp;</span><span>{d.meta.title}</span></a></li>
              ))
            }
            </ul>
          </div>
        </section>
        <Footer language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Blog />, document.getElementById('root'));

export default Blog;
