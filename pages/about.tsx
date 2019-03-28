import Link from 'next/link';
import { Component } from 'react';

class About extends Component {
  public render() {
    return (
      <div>
        <div>This is about page</div>
        <Link href="/">
          <a >Home</a>
        </Link>
      </div>
    );
  }
}

export default About;