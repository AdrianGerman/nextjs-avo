import React from "react";
import Link from "next/link";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: "4em 0em",
      marginTop: "3em",
      borderTop: "1px solid #f2f2f2",
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Nosotros" />
            <List>
              <List.Item>
                <Link href="/about">Conoce más</Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Servicios" />
            <List>
              <List.Item>
                <Link href="/">Todos los productos</Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Hecho para mi portafolio</Header>
            <p>
              <a href="https://github.com/AdrianGerman/">GitHub</a> dictado por{" "}
              <a href="https://www.linkedin.com/in/adrian-german/">
                Adrian Ernesto German Becerra
              </a>
            </p>
            <List horizontal style={{ display: "flex" }}>
              <List.Item
                icon="twitter"
                style={{ display: "flex" }}
                content={<a href="https://twitter.com/">Twitter</a>}
              />
              <List.Item
                icon="github"
                style={{ display: "flex" }}
                content={
                  <a href="https://github.com/AdrianGerman/nextjs-avo.git">
                    GitHub
                  </a>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="colophon">
        <p className="colophon-entry">
          Iconos hechos por{" "}
          <a
            target="_blank"
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            Freepik
          </a>
          {" from "}
          <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
        <p className="colophon-entry">
          Imágenes de avocados tomadas de{" "}
          <a
            className="acnor"
            target="_blank"
            href="https://www.californiaavocado.com/avocado101/avocado-varieties"
            title="California Avocado"
          >
            Avocado 101
          </a>
          {" at "}
          <a
            target="_blank"
            href="https://www.californiaavocado.com"
            title="Flaticon"
          >
            California Avocado
          </a>
        </p>
      </div>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </Segment>
);

export default Footer;
