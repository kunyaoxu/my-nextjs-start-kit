import '../css/styles.scss';
import { Component } from 'react';
import Link from 'next/link';

function getHelloMsg(text: string) {
  return `hello ${text}`
}

class Home extends Component {
  public render() {
    return (
      <div>
        <div className="example">Welcome to Next.js! {getHelloMsg('world')}</div>
        <div>
          <img width="100%" src="/static/nextjs.png"/>
        </div>
        <Link href="/about">
          <a >About</a>
        </Link>
      </div>
    );
  }
}

export default Home;