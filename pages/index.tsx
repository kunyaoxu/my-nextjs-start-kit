import '../css/styles.scss';
function getHelloMsg(text: string) {
  return `hello ${text}`
}

function Home() {
  return <div className="example">Welcome to Next.js! {getHelloMsg('world')}</div>
}

export default Home;