export default function OldUrl() {
  return <div>Hello world</div>
}

export function getServerSideProps({ query, res }) {
  if (query.code) {
    res.setHeader("location", `/new-url?code=${query.code}`);
    res.statusCode = 302;
    res.end();
  }
  return {props:{}}
}
