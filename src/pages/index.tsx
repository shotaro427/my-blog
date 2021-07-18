import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Card,
  CardContent,
  Subtitle2,
  Body1,
  H4,
  H5,
  Table,
  Button,
} from 'ui-neumorphism';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faGitlab,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: React.FC = () => {
  const images = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "selfimage.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      qiita: file(relativePath: { eq: "qiita.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      shiori: file(relativePath: { eq: "shiori-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
      minsta: file(relativePath: { eq: "minsta-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  `);

  const langHeaders = [{ text: 'Launguage', align: 'left', value: 'name' }];
  const langItems = [
    { name: 'Javascript' },
    { name: 'Typescript' },
    { name: 'Swift' },
    { name: 'Kotlin' },
    { name: 'Dart' },
    { name: 'Python' },
    { name: 'Rust' },
    { name: 'HTML' },
    { name: 'CSS' },
  ];

  const fwHeaders = [
    { text: 'Framework & Library', align: 'left', value: 'name' },
  ];
  const fwItems = [
    { name: 'Vue.js' },
    { name: 'React' },
    { name: 'Express' },
    { name: 'Nest.js' },
    { name: 'Nuxt.js' },
    { name: 'Next.js' },
    { name: 'React Native' },
    { name: 'Flutter' },
    { name: 'Flask' },
  ];

  const otherHeaders = [{ text: 'Other', align: 'left', value: 'name' }];
  const otherItems = [
    { name: 'Docker & Kurbernetes' },
    { name: 'AWS & GCP' },
    { name: 'Firebase' },
    { name: 'GitHub & GitLab' },
    { name: 'XD & Figma' },
    { name: 'Photoshop & Illustrator' },
    { name: 'WordPress' },
    { name: 'Elasticsearch' },
    { name: 'MySQL & PostgreSQL' },
  ];
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <h1>About Me</h1>
        <div>
          <Card
            bordered
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            maxWidth={800}
          >
            <CardContent>
              <CardContent
                style={{
                  width: '250px',
                }}
              >
                <Img
                  fluid={images.placeholderImage.childImageSharp.fluid}
                  style={{
                    borderRadius: '8px',
                    marginBottom: '32px',
                  }}
                />
              </CardContent>

              <CardContent>
                <Subtitle2 secondary style={{ marginBottom: '4px' }}>
                  freelance engineer
                </Subtitle2>
                <H4>Shotaro Tauchi</H4>
                <Body1>
                  京都在住のフリーランスエンジニア。
                  <br />
                  モバイルアプリやフロントエンド(Nuxt.js、Next.js)
                  <br />
                  バックエンド(Nest.js、Express)など手広くやっています。
                  <br />
                  趣味でアプリ開発やRustでゲームを作ったりしています。
                  <br />
                  <br />
                  お仕事の依頼はTwitterまで
                </Body1>
                <CardContent
                  style={{
                    marginLeft: 0,
                    marginRight: 0,
                    display: 'flex',
                  }}
                >
                  <a href="https://twitter.com/Toshinobu724">
                    <FontAwesomeIcon
                      style={{
                        height: '1.5em',
                        width: '1.5em',
                        marginRight: '8px',
                      }}
                      color="#3eaded"
                      icon={faTwitter}
                    />
                  </a>
                  <a href="https://github.com/shotaro427">
                    <FontAwesomeIcon
                      style={{
                        height: '1.5em',
                        width: '1.5em',
                        marginRight: '8px',
                      }}
                      color="#333"
                      icon={faGithub}
                    />
                  </a>
                  <a href="https://gitlab.com/shotaro.tu13">
                    <FontAwesomeIcon
                      style={{
                        height: '1.5em',
                        width: '1.5em',
                        marginRight: '8px',
                      }}
                      color="#FC6D25"
                      icon={faGitlab}
                    />
                  </a>
                  <a href="https://qiita.com/toshinobu111">
                    <Img
                      style={{
                        height: '1.5em',
                        width: '1.5em',
                        marginRight: '8px',
                      }}
                      fluid={images.qiita.childImageSharp.fluid}
                    />
                  </a>
                </CardContent>
              </CardContent>
            </CardContent>
          </Card>
        </div>
      </section>
      <section
        style={{
          marginTop: '32px',
        }}
      >
        <h1>Skills</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Table
            style={{
              paddingRight: '8px',
              paddingLeft: '8px',
              margin: '8px',
            }}
            inset
            items={langItems}
            headers={langHeaders}
          />
          <Table
            style={{
              paddingRight: '8px',
              paddingLeft: '8px',
              margin: '8px',
            }}
            inset
            items={fwItems}
            headers={fwHeaders}
          />
          <Table
            style={{
              paddingRight: '8px',
              paddingLeft: '8px',
              margin: '8px',
            }}
            inset
            items={otherItems}
            headers={otherHeaders}
          />
        </div>
      </section>
      <section
        style={{
          marginTop: '32px',
        }}
      >
        <h1>Works</h1>
        <Card
          bordered
          style={{
            marginBottom: '32px',
          }}
        >
          <CardContent
            style={{
              display: 'flex',
            }}
          >
            <Img
              fluid={images.shiori.childImageSharp.fluid}
              style={{
                borderRadius: '8px',
                width: '125px',
                height: '125px',
                marginRight: '32px',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <H5
                  style={{
                    marginBottom: 0,
                  }}
                >
                  しおり
                </H5>
                <Body1>
                  読書が趣味な私が「読んだ本をいい感じに管理できるアプリが欲しいなー」と思い作ったアプリ
                  <br />
                  読書時間を記録できたり、覚えたい単語を追加できたりと勉強特化の機能を盛り込んでいる
                  <br />
                  さらに、定期的に更新されるランキングから今流行りの本もチェックできる！
                  <br />
                  <br />
                  使用技術: Flutter、AWS(EC2)、Nest.js、Firebase
                </Body1>
              </div>

              <Button
                bordered
                color="var(--primary)"
                onClick={() =>
                  window.open(
                    'https://apps.apple.com/us/app/%E3%81%97%E3%81%8A%E3%82%8A-shiori/id1553580765',
                    '_blank'
                  )
                }
              >
                AppStore
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card
          bordered
          style={{
            marginBottom: '32px',
          }}
        >
          <CardContent
            style={{
              display: 'flex',
            }}
          >
            <Img
              fluid={images.minsta.childImageSharp.fluid}
              style={{
                borderRadius: '8px',
                width: '125px',
                height: '125px',
                marginRight: '32px',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <H5
                  style={{
                    marginBottom: 0,
                  }}
                >
                  みんスタ
                </H5>
                <Body1>
                  大学生の時、講義資料などを友達と共有したくて作ったアプリ。
                  <br />
                  DropboxやLINEだとどこにどの資料を保存したのか分からなかったので検索性・一覧性に特化させている。
                  <br />
                  <br />
                  使用技術: Flutter、Firebase
                </Body1>
              </div>
              <Button
                bordered
                color="var(--primary)"
                onClick={() =>
                  window.open(
                    'https://apps.apple.com/us/app/%E3%81%BF%E3%82%93%E3%82%B9%E3%82%BF/id1508684865',
                    '_blank'
                  )}
              >
                AppStore
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default IndexPage;
