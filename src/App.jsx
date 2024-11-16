import {Layout, Flex} from "antd";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  color: '#fff',
  backgroundColor: '#4096ff',
};

function App() {

  return (
    <Layout className="rounded-8px overflow-hidden">
      <Header >Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content className="min-h-96">Content</Content>
      </Layout>
      <Footer className="text-center" >Footer</Footer>
    </Layout>
  )
}

export default App
